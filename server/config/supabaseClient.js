// server/config/supabase.js
import { createClient } from '@supabase/supabase-js'; // import createClient to help create a new supabase client for login and signup
// it sets the supabase user up with this project and allows them to interact with the supabase db

const supabaseUrl = 'https://prmzpfamlzrqbipghubk.supabase.co'; // to connect to the supabase db we use the url and api key
const supabaseKey = process.env.SUPABASE_API_KEY; 

const supabase = createClient(supabaseUrl, supabaseKey); // ceate a new supabase client using the url and api key

module.exports = supabase; // export the supabase client so that it cna be used all over the app to interact with the supabase db

