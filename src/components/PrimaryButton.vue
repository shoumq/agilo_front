<script setup>
/* eslint-disable */
defineProps({
    type: String
})
</script>

<template>
    <button :type="type" class="button">
        <slot></slot>
    </button>
</template>

<style lang="sass" scoped>
.button
    margin-top: 20rem
    padding: 7rem 15rem
    text-align: center
    transition: 0.2s
    color: #000
    font-weight: 500
    border-radius: 5rem
    display: block
    border: 0
    cursor: pointer
    user-select: none
    background: #FAFBFC
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px

    &:hover
        color: #000
        text-decoration: none
        background: #ececec
</style>
