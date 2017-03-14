<template>
    <div id="app">
        <div class="companies-view">
            <div class="companies-list">
                <CompanyCard v-for="company in companies"
                 iname="company.name"
                 :account="company.account"
                 :profile_image_url="company.profile_image_url"
                 :key="company.account"/>
            </div>
            <div class="company-details">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import fetch from '@/shared/fetch'
import CompanyCard from '@/components/CompanyCard'
export default {
    name: 'app',
    data () {
        return {
            companies: []
        }
    },
    async mounted () {
        const { companies } = await fetch('companies')
        this.companies = companies
    },
    components: {
        CompanyCard
    }
}
</script>

<style>
html, body {
    height: 100%;
    box-sizing: border-box;
    margin: 0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
}

.companies-view {
    display: flex;
    flex-direction: row;
    height: 100%;
}

.companies-list {
    flex: 1;
}
.company-details {
    flex: 3;
}
</style>
