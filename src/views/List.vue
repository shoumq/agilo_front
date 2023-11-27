<script setup>
import Layout from '@/components/Layout.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import { useEnv } from '../store/env'
import { useUser } from "../store/userStore"
import { ref } from 'vue'
import axios from 'axios'
import Loader from '@/components/Loader.vue'

const loader = ref(true)

const userData = useUser()
userData.getUserData()

const Env = useEnv()

const group_id = ref(window.location.href.split('/')[4])
const title = ref(null)
const passwords = ref([])

const loadPasswords = () => {
    axios.get(Env.API_URL + 'get_passwords/' + group_id.value)
        .then((response) => {
            loader.value = false
            title.value = response.data[1].title
            passwords.value = response.data[0]
        })
        .catch(() => {
            window.alert('Ошибка!')
        })
}

loadPasswords()
</script>

<template>
    <div>
        <Layout>
            <Loader v-if="loader" />
            <div v-else>
                <div class="flex">
                    <div class="sector_title">Пароли "{{ title }}"</div>
                    <router-link :to="'/create_password/' + group_id" class="text-d">
                        <PrimaryButton type="button">
                            Добавить пароль
                        </PrimaryButton>
                    </router-link>
                </div>
                <div class="pass_flex">
                    <router-link :to="'/password/' + item.id" class="pass_item" v-for="(item, index) in passwords"
                        :key="index">
                        {{ item.title }}
                    </router-link>
                </div>
            </div>
        </Layout>
    </div>
</template>

<style lang="sass" scoped>
.flex
    display: flex
    margin-bottom: 20rem
    align-items: center
    gap: 40rem

.button
    margin-top: 0 !important

.text-d
    text-decoration: none
</style>
