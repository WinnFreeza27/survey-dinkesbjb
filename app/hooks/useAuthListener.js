// hooks/useAuthListener.js
import { useEffect } from 'react';
import supabase from '../lib/supabaseClient';
import { useSessionStore } from './useSessionStore';

const useAuthListener = () => {
  const {setSession} = useSessionStore();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        console.log('User is signed in:', session.user);
        setSession(session);
      } else if (event === 'SIGNED_OUT') {
        console.log('User is signed out');
        setSession(null);
      }
        
    });

    // Cleanup subscription on unmount
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [setSession]);
};

export default useAuthListener;
