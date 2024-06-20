// stores/alertStore.js
import create from 'zustand';

export const alertStore = create((set) => ({
  message: '',
  variant: 'success', // Default variant
  visible: false,
  showAlert: (message, variant = 'success') => set({ message, variant, visible: true }),
  hideAlert: () => set({ visible: false }),
}));

