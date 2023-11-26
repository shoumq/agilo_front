<script setup>
import Layout from '@/components/Layout.vue'
import axios from 'axios'
import { useEnv } from '../store/env'
import { ref } from 'vue'
import Loader from '@/components/Loader.vue'

let papka_img = 'https://ouch-cdn2.icons8.com/d8z0iQxM2Chm5dHPyGR63KVBQmwhzCJoa8CJgCsRZRo/rs:fit:784:784/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTA3/L2VjMDYyOTNiLWU5/OTUtNDAxNS1iYTEz/LTNmMjkxNmJlYTI4/NS5wbmc.png'

const Env = useEnv()

const folders = ref([])
const loader = ref(true)

const loadFloders = () => {
    let url = ref();
    if (localStorage.getItem('is_admin') === '1') {
        url.value = 'get_all_groups'
    }
    else {
        url.value = 'get_groups/' + localStorage.getItem('id')
    }
    axios.get(Env.API_URL + url.value)
        .then((response) => {
            loader.value = false
            folders.value = response.data;
        })
}

loadFloders()
</script>

<template>
    <div>
        <Layout>
            <Loader v-if="loader" />
            <div class="papka_flex">
                <router-link :to="'/sector/' + item.id" class="papka" v-for="(item, index) in folders" :key="index">
                    <img :src="papka_img" alt="" class="papka_img">
                    <div class="papka_title">{{ item.title }}</div>
                </router-link>
            </div>
        </Layout>
    </div>
</template>
