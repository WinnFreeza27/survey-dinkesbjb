import supabase from '../lib/supabaseClient';
import bcryptjs from 'bcryptjs';

export const handleLogin = async (username, password) => {
  // Fetch admin data from Supabase
  const { data: admin, error } = await supabase
    .from('admin')
    .select('*')
    .eq('username', username)
    .single();

  if (error || !admin) {
    return { error: 'User not found' };
  }

  // Verify password
  const isValidPassword = await bcryptjs.compare(password, admin.hash_password);
  if (!isValidPassword) {
    return { error: 'Invalid password' };
  }

  // Return role for further handling
  return { role: admin.role };
};