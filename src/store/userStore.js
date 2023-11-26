import { defineStore } from 'pinia'
import { useEnv } from './env'
import axios from 'axios'
import router from '@/router';

const Env = useEnv()

export const useUser = defineStore('user', {
    state: () => ({ user: {} }),
    actions: {
        getUserData() {
            if (localStorage.getItem('token') != null) {
                let config = {
                    method: 'post',
                    url: Env.API_URL + 'auth/me',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                };

                axios.request(config)
                    .then((response) => {
                        this.user = response.data
                    })

                    .catch(() => {
                        localStorage.clear();
                        router.push('/login')
                        this.user = {}
                    })
            }
        },

        logout() {
            if (localStorage.getItem('token') != null) {
                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: Env.API_URL + 'auth/logout',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                };

                axios.request(config)
                    .then(() => {
                        localStorage.clear();
                        router.push('/login')
                        this.user = {}
                    })
            }
        }
    }
})
