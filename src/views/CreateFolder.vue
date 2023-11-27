<script setup>
import Layout from '@/components/Layout.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import { ref } from 'vue'
import { useEnv } from '../store/env'
import { useUser } from "../store/userStore"
import axios from 'axios'
import router from '@/router'

const folder = ref(null)

const userData = useUser()
const Env = useEnv()

userData.getUserData()

const store = () => {
    axios.post(Env.API_URL + 'create_group', {
        user_id: userData.user.id,
        title: folder.value
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
            <form @submit.prevent="store">
                <div class="sector_title">Создать папку</div>
                <input class="sector_input" type="text" v-model="folder">
                <PrimaryButton type="submit">Создать</PrimaryButton>
            </form>
        </Layout>
    </div>
</template>

<style lang="sass" scoped>
.sector_title
    margin-bottom: 20rem
</style>
