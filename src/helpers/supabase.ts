// src/supabase.ts
import { createClient, type User } from '@supabase/supabase-js';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

//==================================== Users ====================================//
type NewUser = {
  role_id?: number;
  username?: string;
  first_name: string;
  last_name: string;
  password: string;
  email?: string;
  phone_num?: string;
  is_active: boolean;
  is_superadmin: boolean;
}

export const fetchUsers = async() => {
  const { data, error } = await supabase
  .from('usr_user')
  .select('*')

  if(error){
    console.log('Error', error);
    return null;
  }

  return data;
}

export const fetchUserById = async(id: number) => {
  const {data, error} = await supabase
  .from('usr_user')
  .select('*')
  .eq('id', id)
  .single();

  if(error){
    console.log('Error', error);
    return null;
  }

  return data;
}

export const fetchCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error('Error fetching current user:', error);
    return null;
  }
  return data;
};

export const updateUserById = async (id: number, userData: Partial<NewUser>) => {
  const { data, error } = await supabase
    .from('usr_user')
    .update(userData)
    .eq('id', id)
    .select('*')
    .single();

  if (error) {
    console.error('Error updating user:', error);
    return null;
  }

  return data;
}

export const insertUser = async (user: NewUser) => {
  const { data, error } = await supabase
    .from('usr_user')
    .insert([user])
    .select('*')
    .single();

  if (error) {
    console.error('Error inserting user:', error);
    return null;
  }

  return data;
}

export const deleteUser = async (id: number) => {
  const {data, error} = await supabase
    .from('usr_user')
    .delete()
    .eq('id', id)
    .select('*');

  if (error) {
    console.error('Error deleting user:', error);
    return null;
  }

  if (!data || data.length === 0) {
    console.warn('No user found with the given ID.');
    return null;
  }

  return data;
}

//==================================== Users ====================================//

export const fetchRoles = async() => {
  const {data, error} = await supabase
  .from('usr_role')
  .select('*')

  if(error){
    console.log('Error', error);
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
