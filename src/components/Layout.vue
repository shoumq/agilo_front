<script setup>
import Header from './Header.vue';
</script>

<template>
    <div>
        <Header/>
        <div class="container mt-5">
            <slot></slot>
        </div>
    </div>
</template>


<style lang="sass" scoped>
.mt-5
    margin-top: 25rem
</style>
