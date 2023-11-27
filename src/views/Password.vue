<script setup>
import Layout from '@/components/Layout.vue';
import { ref, computed } from 'vue';
import { useEnv } from '../store/env'
import { useUser } from "../store/userStore"
import axios from 'axios';
import Loader from '@/components/Loader.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import router from '@/router';

const loader = ref(true)

const Env = useEnv()
const userData = useUser()

let is_admin = computed(() => {
    return userData.user.is_admin == true
})

const password = ref(null)
const pass_id = ref(window.location.href.split('/')[4])

const loadPassword = () => {
    axios.get(Env.API_URL + 'get_password/' + pass_id.value)
        .then((response) => {
            loader.value = false
            password.value = response.data
        })
}

const edit = () => {
    axios.post(Env.API_URL + 'edit_password', {
        id: password.value.id,
        title: password.value.title
    })
        .then((response) => {
            router.push('/sector/' + response.data.group_id)
        })
        .catch(() => {
            window.alert('Ошибка!')
        })
}

loadPassword()
</script>

<template>
    <div>
        <Layout>
            <Loader v-if="loader" />
            <form @submit.prevent="edit" v-else>
                <div class="sector_title">Пароль #{{ password.id }}</div>
                <input class="sector_input" type="text" :disabled="!is_admin" v-model="password.title">
                <div class="sector_author">Владелец: {{ password.user_name }}</div>
                <PrimaryButton v-if="is_admin" type="submit">Сохранить</PrimaryButton>
            </form>
        </Layout>
    </div>
</template>


<style lang="sass" scoped>
.sector_title
    margin-bottom: 20rem
</style>
