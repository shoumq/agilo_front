<script setup>
import Layout from '@/components/Layout.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import { ref } from 'vue'
import { useEnv } from '../store/env'
import { useUser } from "../store/userStore"
import axios from 'axios'
import router from '@/router'

const password = ref(null)

const userData = useUser()
const Env = useEnv()

userData.getUserData()
const group_id = ref(window.location.href.split('/')[4])

const generatePassword = () => {
    var length = 15,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    password.value = retVal;
}

const store = () => {
    if (password.value) {
        axios.post(Env.API_URL + 'create_password/' + group_id.value, {
            user_id: userData.user.id,
            title: password.value
        })
            .then(() => {
                router.push('/sector/' + group_id.value)
            })
    }
}
</script>

<template>
    <div>
        <Layout>
            <form @submit.prevent="store">
                <div class="sector_title">Создать пароль</div>
                <input class="sector_input" type="text" v-model="password">
                <div class="flex">
                    <PrimaryButton type="submit">Создать</PrimaryButton>
                    <div class="gen" type="button" @click="generatePassword">Сгенерировать</div>
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
    gap: 30rem
    align-items: center
    margin-top: 30rem

.button
    margin-top: 0

.gen
    user-select: none
    cursor: pointer
    color: #000
</style>
