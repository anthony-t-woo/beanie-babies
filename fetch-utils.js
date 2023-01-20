const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBabies(sign) {
    // requests data set based on the condition of the argument
    if (sign) {
        let { data, error } = await client
            .from('beanie_babies')
            .select('*')
            .eq('astroSign', sign)
            .limit(100);

        return data;
    }
    // returns data without an argument
    let { data, error } = await client.from('beanie_babies').select('*').limit(100);

    return data;
}

export async function getSigns() {
    // returns data without an argument
    let { data, error } = await client.from('beanie_baby_astro_signs').select('*');

    return data;
}
