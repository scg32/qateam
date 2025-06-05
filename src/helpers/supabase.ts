// src/supabase.ts
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchUsers = async() => {
    const { data, error } = await supabase
  .from('users')
  .select()

  if(error){
    console.log('Error');
    return [];
  }

  return data;
}

export const insertUserToDatabase = async(user:{}) => {
    const { error } = await supabase
  .from('countries')
  .insert(user)
  
  if(error){
    return 'Cannot add user to database';
  }

}