const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://bcvafvwfzbfohxrvwcuy.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjdmFmdndmemJmb2h4cnZ3Y3V5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjM3MDE1MywiZXhwIjoyMDc3OTQ2MTUzfQ.99oaFHSli1aj5a7nUc6z7tOaT_t6QpPS1aBdr_vFxrc';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = supabase;
