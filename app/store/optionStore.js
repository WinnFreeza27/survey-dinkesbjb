// store.js
import {create} from 'zustand';

export const optionStore = create((set) => ({
  selectedOptions: {},
  setSelectedOptions: (questionIndex, option) =>
    set((state) => ({
      selectedOptions: {
        ...state.selectedOptions,
        [questionIndex]: option,
      },
    })),
}));
