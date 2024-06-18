import supabase from "../lib/supabaseClient";
export async function logout () {

let { error } = await supabase.auth.signOut()
if (error) console.error('Error signing out:', error);
}
