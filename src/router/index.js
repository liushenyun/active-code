import Vue from 'vue'
import Router from 'vue-router'

const Error = () => import('../views/Error/index') // 404
// 中秋节活动
const MidHome = () => import('../views/MidAutumn/Home/index')
const Introduce = () => import('../views/MidAutumn/Introduce/index')
const Exchange = () => import('../views/MidAutumn/Exchange/index')
const PrizeDetails = () => import('../views/MidAutumn/PrizeDetails/index')

Vue.use(Router)
const VueRouter = new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'error',
        component: Error
    },
    {
        path: '/mid',
        component: MidHome,
        children: [
            {
                path: '',
                name: 'Introduce',
                component: Introduce
            },
            {
                path: 'exchange',
                name: 'Exchange',
                component: Exchange
            },
            {
                path: 'details',
                name: 'PrizeDetails',
                component: PrizeDetails
            }
        ]
    }
  ]
})

export default VueRouter

// VueRouter.beforeEach((to, from, next) => {
//   console.log(to, from, next)
//   // next()
// })
