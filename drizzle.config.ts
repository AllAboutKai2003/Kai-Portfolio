import "dotenv/config"

console.log("Loading database configuration...")

/**
 * Parse a PostgreSQL connection string (DATABASE_URL) into its components
 * @param url The PostgreSQL connection string to parse
 * @returns Object containing host, user, password, database, and ssl settings
 */
function parseDatabaseUrl(url: string) {
  try {
  // Format: postgres://user:password@host:port/database  (also accepts postgresql://)
  const regex = /postgres(?:ql)?:\/\/([^:]+):([^@]+)@([^:]+):?(\d*)\/([^?]+)(\?.*)?/;
    const match = url.match(regex);
    
    if (!match) {
      throw new Error("Invalid PostgreSQL connection string format");
    }
    
    const [, user, password, host, , database, queryString] = match;
    
    // Check if SSL is required from query string
    const sslRequired = queryString?.includes("sslmode=require");
    
    return {
      host,
      user,
      password,
      database,
      ssl: sslRequired ? "require" : true as true | "require",
    };
  } catch (error) {
    console.error("Error parsing DATABASE_URL:", error);
    return null;
  }
}

// Debug: Show if DATABASE_URL is defined
console.log(`DATABASE_URL exists: ${!!process.env.DATABASE_URL}`);

// Extract database credentials from DATABASE_URL if available
const dbConfig = process.env.DATABASE_URL 
  ? parseDatabaseUrl(process.env.DATABASE_URL)
  : null;

// Fallback to individual environment variables if DATABASE_URL parsing failed
if (!dbConfig && !(process.env.PGHOST && process.env.PGUSER && process.env.PGDATABASE && process.env.PGPASSWORD)) {
  console.error("No database credentials found in environment variables.");
  console.error("Tip: copy .env.example to .env and fill in your DATABASE_URL or PGHOST/PGUSER/PGPASSWORD/PGDATABASE.");
  throw new Error("No database credentials found in environment variables. See .env.example for a template.");
}

// Configuration for drizzle-kit
// drizzle-kit expects a Config object with supported keys. We provide the minimal shape and
// a `connectionString` export (used by drizzle commands) to keep credentials flexible.
const connectionString = process.env.DATABASE_URL ||
  (process.env.PGHOST && process.env.PGUSER && process.env.PGPASSWORD && process.env.PGDATABASE
    ? `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}/${process.env.PGDATABASE}`
    : undefined);

if (!connectionString) {
  // This will not be reached because we earlier threw when credentials were missing, but keep as safety.
  throw new Error('No database connection string available.');
}

export default {
  schema: "./lib/db.ts",
  out: "./drizzle",
  verbose: true,
}

// Also export the connection string for runtime utils that may import this file
export { connectionString };
