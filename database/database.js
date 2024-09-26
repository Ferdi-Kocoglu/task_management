import { postgres } from "../deps.js";

let sql;
if (Deno.env.get("DATABASE_URL")) {
  sql = postgres(Deno.env.get("DATABASE_URL"));
} else {
  console.error("DATABASE_URL environment variable is not set.");
  Deno.exit(1); // Exit if the DATABASE_URL is not set
}

export { sql };
