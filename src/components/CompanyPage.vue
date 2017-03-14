<template>
    <div class="company-page">
        <div v-for="block in tweetBlocks" key="block.id" class="company-page__tweet-block">
            <p>Listing {{block.name}} tweets for {{account}}</p>
            <TweetList :tweetIds="block.ids" />
        </div>
    </div>
</template>

<script>
import TweetList from '@/components/TweetList'
import fetch from '@/shared/fetch'
export default {
    props: ['account'],
    components: {
        TweetList
    },
    data () {
        return {
            tweetBlocks: []
        }
    },
    watch: {
        account: function () {
            this.updateTweets()
        }
    },
    mounted () {
        this.updateTweets()
    },
    methods: {
        async updateTweets () {
            /** fetch best and worst tweets for a given company **/
            this.tweetBlocks = await Promise.all([
                { id: 'worst', name: 'worst' },
                { id: 'best', name: 'best' }
            ].map(async block => {
                const { ids } = await fetch(`company/${this.account}/${block.id}`)
                return { ids, ...block }
            }))
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
