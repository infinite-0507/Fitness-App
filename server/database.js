import pg from "pg";

const Pool = new pg.Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "ashgreninja",
    database: "postgres"
})

export default Pool;