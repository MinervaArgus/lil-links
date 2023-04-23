import { createClient } from "@supabase/supabase-js";

console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('Supabase Public API Key:', process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_API_KEY);

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_ANON_KEY
);

export default supabase;