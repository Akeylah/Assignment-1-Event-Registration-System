import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "event_registration",
  password: "akeylah", 
  port: 5432
});

export default pool;