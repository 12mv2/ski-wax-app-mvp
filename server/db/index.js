// db/index.js

const { Pool } = require('pg'); // pool? dont really know how it works or what it really is

const connectionString = 'postgresql://postgres.prmzpfamlzrqbipghubk:[SUPABASE_API_KEY]@aws-0-us-west-1.pooler.supabase.com:6543/postgres'

const pool = new Pool({ // new pool instance to connect to the db using the connection string
    connectionString,
});

pool.on('connect', () => { // on connect event listener
    console.log('connected to the dg');
});


pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err); // error event listener
    process.exit(-1); // exit process with error code -1 if error occurs on idle client in the pool, error code -1 is a general error 
});

module.exports = {
    query: (tect, params) => pool.query(text, params), // export query method so that it can be used in other files to access the db 
}