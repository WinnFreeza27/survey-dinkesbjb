import { optionStore } from "../store/optionStore"
export const useOptionStore = () => {
  const store = optionStore(state => state)
  return [
    store.selectedOptions,
    store.setSelectedOptions
  ]
}
