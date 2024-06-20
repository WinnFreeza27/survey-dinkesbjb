// stores/sessionStore.js
import create from 'zustand';

const sessionStore = create((set) => ({
  session: null,
  setSession: (session) => set({ session }),
}));

export default sessionStore;
