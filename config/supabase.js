const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://bcvafvwfzbfohxrvwcuy.supabase.cos';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjdmFmdndmemJmb2h4cnZ3Y3V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNzAxNTMsImV4cCI6MjA3Nzk0NjE1M30.aS1scdS8kUTDGmJgrzirSwcYN6BAQypn1BMclP0hD6g';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = supabase;
