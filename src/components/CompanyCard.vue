<!-- Displays a card showing company name, account and image -->
<template>
    <router-link :to="`/${account}`" class="company-card" :class="{ selected }">
        <div class="image-container">
            <img :src="profile_image_url">
        </div>
        <div class="details-container">
            <div class="company-name">{{name}}</div>
            <div class="company-account">@{{account}}</div>
            <div class="company-rating">
                <span class="rating-star">★</span>{{normalized_rating}} ({{number_of_tweets}})
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: ['rating', 'account', 'name', 'profile_image_url', 'number_of_tweets', 'selected'],
    computed: {
        normalized_rating () {
            return this.rating.toFixed(2)
        }
    }
}
</script>

<style scoped>
.company-card {
    display: flex;
    border: 2px solid #d7e5ac;
    padding-right: 10px;
    background-color: white;
    text-decoration: none;
    color: black;
    box-shadow: 0px 2px 1px 1px #aaa;
}

.rating-star {
    color: orange;
}

.company-card.selected, .company-card:hover {
    background: #d7e5ac;
}

.company-name {
    font-weight: 700;
}
.company-account {
    color: rgb(144, 155, 162);
    font-size: 12px;
}

.company-rating {
    font-size: 12px;
}

.image-container > img {
    height: 100%;
}
.details-container {
    padding-left: 15px;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
}
</style>
