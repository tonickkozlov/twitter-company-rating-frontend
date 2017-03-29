<template>
    <div id="app">
        <div class="companies-view">
            <div class="companies-list">
                <div class="companies-search">
                    <input v-model="search" placeholder="search" />
                </div>
                <CompanyCard v-for="company in filteredCompanies"
                 :selected="$route.params.account == company.account"
                 :name="company.name"
                 :account="company.account"
                 :profile_image_url="company.profile_image_url"
                 :number_of_tweets="company.number_of_tweets"
                 :rating="company.rating"
                 :key="company.account"/>
            </div>
            <div class="company-details">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
/** map range [-1 ... 1] to [0 ... 5] */
const rating = score => (Number(score) - (-1)) / 2 * 5

import fetch from '@/shared/fetch'
import CompanyCard from '@/components/CompanyCard'
export default {
    name: 'app',
    data () {
        return {
            companies: [],
            search: ''
        }
    },
    async mounted () {
        const { companies } = await fetch('companies')
        this.companies = companies
            .map(company => {
                return {
                    rating: rating(company.score),
                    ...company
                }
            })
            .sort((a, b) => b.rating - a.rating)
    },
    computed: {
        filteredCompanies () {
            return this.companies.filter(company => {
                return company.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    components: {
        CompanyCard
    }
}
</script>

<style>
#app {
    text-align: center;
    color: #2c3e50;
    height: 100%;
}

.companies-view {
    display: flex;
    flex-direction: row;
    height: 100%;
}

.companies-search {
    padding-top: 10px;
}

.companies-search > input {
    height: 50px;
    border-bottom: 2px solid red;
    border: none;
    padding: 0;
    width: 100%;
    font-size: 23px;
    border-bottom: 4px solid #d7e5ac;
    background-color: transparent;
}

input:focus {
    outline: none;
}

.companies-list {
    width: 250px;
    min-width: 250px;
    height: 100%;
    overflow-y: scroll;
    background: #eee;
    padding: 0 10px;
}
.companies-list > .company-card {
    margin: 10px 0;
}

.company-details {
    height: 100%;
    flex: 3;
}
</style>
