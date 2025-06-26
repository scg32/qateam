// src/supabase.ts
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchUsers = async() => {
  const user = await supabase.auth.getUser();
  console.log(user);

  const { data, error } = await supabase
  .from('usr_user')
  .select('*')

  if(error){
    console.log('Errorr', error);
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

export const loginUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    return null
  }
  if (data.user) {
    return data.user 
  }
};

export const registerUser = async (email: string, password: string) => {
 
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password

  });

  if (error) {
  console.log("🚀 ~ register ~ error:", error)
  }
  
  if (data.user) {
  console.log("🚀 ~ register ~ data:", data)
  }
};