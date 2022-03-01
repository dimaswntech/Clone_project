import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [{
            path: '/',
            name: 'Home',
            props: true,
            component: () => import('../components/PopuRepo.vue')
        },
        {
            path: '/repo',
            name: 'Repo',
            props: true,
            component: () => import('../components/RepositoryList.vue')
        }],
    },
    {
        path: '/repo/:name',
        name: 'detailrepo',
        component: () => import('../components/DetailsPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
