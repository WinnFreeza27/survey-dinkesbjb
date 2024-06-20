import { optionStore } from "../store/optionStore"
export const useOptionStore = () => {
  const selectedOptions = optionStore(state => state.selectedOptions)
  const setSelectedOptions = optionStore(state => state.setSelectedOptions)
  return {
    selectedOptions,
    setSelectedOptions
  }
}
