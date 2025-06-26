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
  console.log("🚀 ~ register ~ error:", error)
  if (data.user) {
  console.log("🚀 ~ register ~ data:", data)
  }
};

export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Błąd podczas wylogowywania:', error);
    return false;
  }
  return true;
};

export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) {
    console.error('Błąd podczas pobierania użytkownika:', error);
    return null;
  }
  return user;
};
