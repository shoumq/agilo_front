<script setup>
import { useUser } from "../store/userStore";

const userData = useUser()

userData.getUserData()
</script>


<template>
    <div class="header">
        <div class="container">
            <router-link to="/" class="item">Главная</router-link>
            <router-link to="/create_folder" class="item">Создать папку</router-link>
            <router-link to="/profile" class="item" v-if="Object.keys(userData.user).length != 0">{{ userData.user.name }}</router-link>
            <router-link to="/login" class="item" v-else>Войти</router-link>
        </div>
    </div>
</template>
