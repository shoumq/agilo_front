<template>
    <div class="loader"></div>
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
