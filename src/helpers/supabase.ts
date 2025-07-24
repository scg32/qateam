// src/supabase.ts
import { createClient, type User } from '@supabase/supabase-js';
import type { IUser } from '@/interfaces/IUser';
import type { IPatient } from '@/interfaces/IPatient';
import type { IDoctor } from '@/interfaces/IDoctor';
import { toSnakeCase } from '@/utils/caseConversion';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

//==================================== Users ====================================//
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

export const fetchUserByUserId = async(userId: string) => {
    if (!userId) {
    console.warn('Missing user_id');
    return null;
  }

  const {data, error} = await supabase
  .from('usr_user')
  .select('*')
  .eq('user_id', userId)
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

export const fetchCurrentUserInfo = async () => {
  const currentUser = await fetchCurrentUser();
  
  if (!currentUser) return null;
  const userInfo = await fetchUserByUserId(currentUser.user.id);

  return userInfo;
};

export const fetchCurrentUserRoles = async () => {
  const currentUserInfo = await fetchCurrentUserInfo();

  if (!currentUserInfo) return null;

  const userRoles = currentUserInfo.role_ids;

  return userRoles;
};

// toSnakeCase will be added here
export const updateUserById = async (id: number, userData: Partial<IUser>) => {
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

// toSnakeCase will be added here
export const insertUser = async (user: IUser) => {
  const { data, error } = await supabase
    .from('usr_user')
    .insert(toSnakeCase(user))
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
//==================================== Users =======================================//

//==================================== Patients ====================================//

export const fetchPatients = async () => {
  const {data, error} = await supabase
  .from('apt_patient')
  .select('*')

  if(error){
    console.log('Error', error);
    return null;
  }
  return data;
}

export const fetchPatientById = async (id: number) => {
  const {data, error} = await supabase
  .from('apt_patient')
  .select('*')
  .eq('id', id)
  .single();

  if(error){
    console.log('Error', error);
    return null;
  }

  return data;
}

// toSnakeCase will be added here
export const insertPatient = async (patient: IPatient) => {
  const {data, error} = await supabase
  .from('apt_patient')
  .insert(patient)
  .select('*')
  .single();

  if (error) {
    console.error('Error inserting patient:', error);
    return null;
  }

  return data;
}

// toSnakeCase will be added here
export const updatePatientById = async (id: number, patientData: Partial<IPatient>) => {
  const {data, error} = await supabase
  .from('apt_patient')
  .update(patientData)
  .eq('id', id)
  .select('*')
  .single();

  if (error) {
    console.error('Error updating patient:', error);
    return null;
  }

  return data;
}
//==================================== Patients ====================================//

//==================================== Doctors =====================================//

export const fetchDoctors = async () => {
  const {data, error} = await supabase
  .from('apt_doctor')
  .select('*')

  if(error){
    console.log('Error', error);
    return null;
  }

  return data;
}

export const fetchDoctorById = async (id: number) => {
  const {data, error} = await supabase
  .from('apt_doctor')
  .select('*')
  .eq('id', id)
  .single();

  if(error){
    console.log('Error', error);
    return null;
  }

  return data;
}

// toSnakeCase will be added here
export const insertDoctor = async (doctor: IDoctor) => {
  const {data, error} = await supabase
  .from('apt_doctor')
  .insert(doctor)
  .select('*')
  .single();

  if (error) {
    console.error('Error inserting doctor:', error);
    return null;
  }

  return data;
}

// toSnakeCase will be added here
export const updateDoctorById = async (id: number, doctorData: Partial<IDoctor>) => {
  const {data, error} = await supabase
  .from('apt_doctor')
  .update(doctorData)
  .eq('id', id)
  .select('*')
  .single();

  if (error) {
    console.error('Error updating doctor:', error);
    return null;
  }

  return data;
}
//==================================== Doctors ====================================//



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

//==================================== Supabase functions ====================================//
 
export const loginUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    return null
  }
  if (data) {
    return data
  }
};

export const registerUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password
  });

  if (error) {
    return null
  }
  
  if (data.user) {
    return data;
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

//==================================== Supabase functions ====================================//
