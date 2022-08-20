import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xaypccruqhvfqhiemcpy.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhheXBjY3J1cWh2ZnFoaWVtY3B5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjEwMDIwNDcsImV4cCI6MTk3NjU3ODA0N30.qkbdA2idx9TE9jBIyLgs9hUIrSixxcimHgUBtBg675A";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  localStorage: AsyncStorage,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: false,
});
