// db/index.js

const { Pool } = require('pg'); // sets up a connection pool using the pg library. The pool manages multiple connections to the db and is used to execute queries
// will use the pg library to make queries to the db and supabaseClient client to make new users and log in existing ones
const connectionString = 'postgresql://postgres.prmzpfamlzrqbipghubk:NfPSyPD94peE21Vq@aws-0-us-west-1.pooler.supabase.com:6543/postgres'

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
    query: (text, params) => pool.query(text, params), // export query method so that it can be used in other files to access the db 
}