<template>
    <div class="company-page">
        <div v-for="block in tweetBlocks" key="block.id" class="company-page__tweet-block">
            <div class="company-page__tweet-block-title">Showing most <span class="tweet-block-title-name">{{block.name}}</span> tweets for {{account}}</div>
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
                { id: 'worst', name: '😡' },
                { id: 'best', name: '😍' }
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
.company-page {
    display: flex;
    height: 100%;
    overflow-y: scroll;
    justify-content: center;
}

.company-page__tweet-block {
    margin: 0 20px;
    height: 100%;
}

.company-page__tweet-block-title {
    font-size: 20px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 4px solid lightblue;
}

.company-page .tweet-list {
    height: calc(100% - 64px);
}

.tweet-block-title-name {
    margin-left: 5px;
    margin-right: 5px;
    font-size: 2em;
}
</style>
