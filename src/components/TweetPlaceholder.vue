<template>
    <div class="tweet-placeholder"><Loader color="lightblue" /></div>
</template>

<script>
import Loader from 'vue-spinner/src/ScaleLoader.vue'
export default {
    components: {
        Loader
    }
}
</script>

<style scoped>
.tweet-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 140px;
    border: 1px solid rgb(225, 232, 237);
    border-radius: 4px;
    max-width: 100%;
    width: 500px;
    min-width: 220px;
    margin-top: 10px;
    margin-bottom: 10px
}
</style>
