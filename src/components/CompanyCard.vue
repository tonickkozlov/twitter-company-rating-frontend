<!-- Displays a card showing company name, account and image -->
<template>
    <router-link :to="`/${account}`" class="company-card">
        <div class="image-container">
            <img :src="profile_image_url">
        </div>
        <div class="details-container">
            <div>{{name}}</div>
            <div>@{{account}}</div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: ['account', 'name', 'profile_image_url']
}
</script>

<style scoped>
.company-card {
    display: flex;
    height: 48px;
    border: 1px solid #eee;
}
.company-card:hover {
    background: red;
}
.image-container > img {
    height: 100%;
}
.details-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
}
</style>
