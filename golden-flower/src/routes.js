import Home from './views/Home/Home'
import HeaderGuide from './views/HeaderGuide/HeaderGuide'
import Admin from './views/Admin/Admin'
import Login from './views/Admin/Login'
import Registered from './views/Admin/Registered'
import Goods from './views/Goods/Goods'
import Travel from './views/Travel/Travel'

const routes=[
    {
        path:'/',
        component:HeaderGuide,
        children:[
            {
                path:'/',
                component:Home,
                exact:true
            },
            {
                path:'/goods',
                component:Goods
            },
            {
                path:'/travel',
                component:Travel
            },
            {
                path:'/admin',
                component:Admin
            },
            {
                path:'/login',
                component:Login
            },
            {
                path:'/registered',
                component:Registered
            },
        ]
    },
    {
        path: '/travelsdetail',
        component: Registered
    }
]
export default routes;