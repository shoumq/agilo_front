import { defineStore } from 'pinia'

export const useEnv = defineStore('env', {
  state: () => ({ API_URL: 'http://127.0.0.1:8000/api/' }),
})
