<script setup>
import Layout from '@/components/Layout.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import { computed, ref } from 'vue'
import { useUser } from "../store/userStore"
import { useEnv } from '@/store/env'
import axios from 'axios'
import router from '@/router'

const userData = useUser()
const Env = useEnv()

userData.getUserData()

let user = computed(() => {
    return userData.user
})

const password = ref(null)

const edit = () => {
    axios.post(Env.API_URL + 'edit_profile', {
        id: user.value.id,
        name: user.value.name,
        email: user.value.email
    })
        .then(() => {
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
            <form @submit.prevent="edit">
                <div class="sector_title">Профиль</div>
                <div class="auth_flex">
                    <div class="admin" v-if="user.is_admin">Администратор</div>

                    <label class="auth_label" for="email">Имя
                        <input type="text" id="email" v-model="user.name" class="sector_input">
                    </label>

                    <label class="auth_label" for="email">Email
                        <input type="text" id="email" v-model="user.email" class="sector_input">
                    </label>

                    <label class="auth_label" for="password">Пароль
                        <input type="text" id="password" v-model="password" class="sector_input">
                    </label>
                </div>
                <div class="flex">
                    <PrimaryButton type="submit">Готово</PrimaryButton>
                    <div class="logout" @click="userData.logout">Выйти</div>
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
    gap: 30rem
    margin-top: 30rem

.button
    margin-top: 0

.logout
    cursor: pointer
    font-weight: 500

.admin
    font-weight: 600
    font-size: 18rem
</style>
