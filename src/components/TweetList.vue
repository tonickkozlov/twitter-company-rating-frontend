<!-- Will list tweets received from given url -->
<template>
    <div class="tweet-list">
        <Tweet v-for="id in tweetIds" :id="id" :key="id"></Tweet>
    </div>
</template>

<script>
import Tweet from 'vue-tweet-embed'

export default {
    props: ['tweetIds'],
    components: {
        Tweet
    }
}
</script>
