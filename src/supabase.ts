import { createClient } from '@supabase/supabase-js';

import { Database } from '../types/supabase';

const supabaseUrl = 'https://yjjjuiwzmgymfxdukddv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlqamp1aXd6bWd5bWZ4ZHVrZGR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4Mjk4NzEsImV4cCI6MjAwNjQwNTg3MX0.w9mGVXE1ehDpjX_y_12U6BazuD80MfTt4OvJ3RIG85Y';
export const supabase = createClient<Database>(supabaseUrl, supabaseKey)

export type JournalRow = Database['public']['Tables']['journal']['Row'];
