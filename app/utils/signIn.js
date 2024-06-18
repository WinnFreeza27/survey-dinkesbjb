import supabase from '../lib/supabaseClient';

export async function signIn(email, password) {
    let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    if (error) console.error('Error signing in:', error);
    else console.log('User signed in:', data);
}