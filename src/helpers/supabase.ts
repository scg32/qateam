// src/supabase.ts
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
// const supabaseUrl = 'https://your-project-id.supabase.co';  // Podstaw swój URL z Supabase
// const supabaseKey = 'public-anon-key'; // Podstaw swój klucz API

export const supabase = createClient(supabaseUrl, supabaseKey);
