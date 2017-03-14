import Vue from 'vue'
import Router from 'vue-router'
import CompanyPage from '@/components/CompanyPage'
import CompanySelectionInvitation from '@/components/CompanySelectionInvitation'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'CompanySelectionInvitation',
            component: CompanySelectionInvitation
        },
        {
            path: '/:account',
            name: 'CompanyPage',
            component: CompanyPage,
            props: true
        }
    ]
})
