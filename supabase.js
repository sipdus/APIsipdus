const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://<seu-projeto>.supabase.co';
const SUPABASE_KEY = '<sua-anon-ou-service-role-key>';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = supabase;
