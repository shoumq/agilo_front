<script setup>
import Layout from '@/components/Layout.vue'
import axios from 'axios'
import { useEnv } from '../store/env'
import { ref } from 'vue'

let papka_img = 'https://ouch-cdn2.icons8.com/d8z0iQxM2Chm5dHPyGR63KVBQmwhzCJoa8CJgCsRZRo/rs:fit:784:784/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTA3/L2VjMDYyOTNiLWU5/OTUtNDAxNS1iYTEz/LTNmMjkxNmJlYTI4/NS5wbmc.png'

const Env = useEnv()

const folders = ref([])
const loader = ref(true)

const loadFloders = () => {
    axios.get(Env.API_URL + 'get_groups/' + localStorage.getItem('id'))
        .then((response) => {
            loader.value = false
            folders.value = response.data
        })
}

loadFloders()
</script>

<template>
    <div>
        <Layout>
            <div class="loader" v-if="loader"></div>
            <div class="papka_flex">
                <router-link :to="'/sector/' + item.id" class="papka" v-for="(item, index) in folders" :key="index">
                    <img :src="papka_img" alt="" class="papka_img">
                    <div class="papka_title">{{ item.title }}</div>
                </router-link>
            </div>
        </Layout>
    </div>
</template>


<style lang="css" scoped>
.loader {
    width: 100rem;
    height: 100rem;
    border: 10rem solid #000;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: flex;
    animation: rotation 1s linear infinite;
    margin-inline: auto;
    margin-top: 100rem;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
