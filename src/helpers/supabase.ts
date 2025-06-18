// src/supabase.ts
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchUsers = async () => {
    const { data, error } = await supabase
    .from('users')
    .select('*');

    if (error) {
        console.error('Error selecting data:', error);
        return [];
    }

    return data;
}

export const insertUser = async (user:object) => {
    const { data, error } = await supabase
    .from('users')
    .insert(user);

    if (error) {
        console.error('Error inserting data:', error);
        return null;
    }

    return data;
}

