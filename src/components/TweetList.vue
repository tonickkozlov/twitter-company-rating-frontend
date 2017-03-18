<!-- Will list tweets received from given url -->
<template>
    <div class="tweet-list">
        <Tweet v-for="id in tweetIds" :id="id" :key="id"><TweetPlaceholder /></Tweet>
    </div>
</template>

<script>
import Tweet from 'vue-tweet-embed'
import TweetPlaceholder from '@/components/TweetPlaceholder'

export default {
    props: ['tweetIds'],
    components: {
        Tweet,
        TweetPlaceholder
    }
}
</script>

<style scoped>
.tweet-list {
    height: 100%;
    overflow-y: scroll;
}
</style>
