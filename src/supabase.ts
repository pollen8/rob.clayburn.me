import { createClient } from '@supabase/supabase-js';

import { Database } from '../types/supabase';

const supabaseUrl = 'https://yjjjuiwzmgymfxdukddv.supabase.co'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const supabase = createClient<Database>(supabaseUrl, (process.env as any).supabaseToken)
console.log(supabase);
export type JournalRow = Database['public']['Tables']['journal']['Row'];
