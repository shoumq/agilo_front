<script setup>
import Layout from '@/components/Layout.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import axios from 'axios';
import { ref } from 'vue';
import { useEnv } from '../store/env';
import router from '@/router';

const Env = useEnv()

const email = ref(null)
const password = ref(null)

const login = () => {
    axios.post(Env.API_URL + 'auth/login', {
        email: email.value,
        password: password.value
    })
        .then((response) => {
            localStorage.setItem('token', response.data.access_token)
            localStorage.setItem('id', response.data.user_id)
            router.push('/')
        })
        .catch(() => {
            window.alert('Ошибка!')
        })
}
</script>

<template>
    <div>
        <Layout>
            <form @submit.prevent="login">
                <div class="sector_title">Войти</div>
                <div class="auth_flex">
                    <label class="auth_label" for="email">Email
                        <input type="text" id="email" v-model="email" class="sector_input">
                    </label>

                    <label class="auth_label" for="password">Пароль
                        <input type="text" id="password" v-model="password" class="sector_input">
                    </label>
                </div>
                <div class="flex">
                    <router-link to="/register">Еще нет аккаунта?</router-link>
                    <PrimaryButton type="submit">Готово</PrimaryButton>
                </div>
            </form>
        </Layout>
    </div>
</template>

<style lang="sass" scoped>
.sector_title
    margin-bottom: 20rem

.flex
    display: flex
    align-items: center
    margin-top: 20rem
    gap: 20rem

    a
        text-decoration: none
        color: #000

.button
    margin-top: 0
</style>
