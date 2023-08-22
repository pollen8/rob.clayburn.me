import { createClient } from '@supabase/supabase-js';

import { Database } from '../types/supabase';

const supabaseUrl = 'https://yjjjuiwzmgymfxdukddv.supabase.co'
export const supabase = createClient<Database>(supabaseUrl, import.meta.env.VITE_SUPABASE_TOKEN)
export type JournalRow = Database['public']['Tables']['journal']['Row'];
