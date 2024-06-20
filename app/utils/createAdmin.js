import bcryptjs from 'bcryptjs';
import supabase from '../lib/supabaseClient';

export async function createAdmin(username, password, role) {
    const hashedPassword = await bcryptjs.hash(password, 10); // 10 is the salt rounds
    const { data, error } = await supabase
        .from('admin')
        .insert([{ username, hash_password: hashedPassword, role }]);
    if (error) {
        console.error('Error inserting admin:', error);
    } else {
        console.log('Admin inserted successfully:', data);
    }
}