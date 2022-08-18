import { defineStore } from 'pinia'
import { store } from '..'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: state => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++
    },
  },
})

// Need to be used outside the setup
export function useLocaleStoreWithOut() {
  return useCounterStore(store)
}
