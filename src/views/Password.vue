<script setup>
import Layout from '@/components/Layout.vue';
import { ref } from 'vue';
import { useEnv } from '../store/env'
import axios from 'axios';

const Env = useEnv()

const password = ref(null)
const pass_id = ref(window.location.href.split('/')[4])

const loadPassword = () => {
    axios.get(Env.API_URL + 'get_password/' + pass_id.value)
        .then((response) => {
            password.value = response.data
        })
}

loadPassword()
</script>

<template>
    <div>
        <Layout>
            <div class="sector_title">Пароль #{{ password.id }}</div>
            <input class="sector_input" type="text" v-model="password.title">
            <div class="sector_author">Владелец: {{ password.user_name }}</div>
        </Layout>
    </div>
</template>


<style lang="sass" scoped>
.sector_title
    margin-bottom: 20rem
</style>
