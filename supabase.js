import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://puwnpgjuogqabuusbcyz.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1d25wZ2p1b2dxYWJ1dXNiY3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzOTk4MzEsImV4cCI6MjA0ODk3NTgzMX0.WHjZgvuC0pxRUD0_BYNTdorCJx0PwzF7wBOjKGjo0Tk'; 

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
