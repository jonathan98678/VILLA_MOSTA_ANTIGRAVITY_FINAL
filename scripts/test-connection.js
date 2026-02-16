const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Load .env.local manually
const envPath = path.resolve(process.cwd(), '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
        envVars[key.trim()] = value.trim();
    }
});

const supabaseUrl = envVars.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = envVars.SUPABASE_SERVICE_ROLE_KEY || envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('Using URL:', supabaseUrl);
console.log('Using Key Length:', supabaseKey ? supabaseKey.length : 0);

const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
    console.log('Testing connection...');
    const { data, error } = await supabase.from('site_settings').select('count', { count: 'exact', head: true });
    if (error) {
        console.error('Connection failed:', JSON.stringify(error, null, 2));
    } else {
        console.log('Connection successful! Count:', data);
    }
}

test();
