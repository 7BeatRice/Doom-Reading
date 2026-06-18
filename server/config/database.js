import pg from 'pg'

const config = {
    user: process.env.PGHOST,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl:{
        rejectUnauthorized: false
    }

}
export const pool = new pg.Pool(config)