import Home from './views/Home/Home'
import HeaderGuide from './views/HeaderGuide/HeaderGuide'
import Admin from './views/Admin/Admin'
import Login from './views/Admin/Login'
import Registered from './views/Admin/Registered'
import Goods from './views/Goods/Goods'
import Travel from './views/Travel/Travel'
import TravelsDetail from './components/travels/travelsdetail/TravelsDetail'
import App from './views/App/App'
import AdminInfo from './views/Admin/AdminInfo'
import GoodsDetail from './views/GoodsDetail/GoodsDetail';
import WangEditor from './components/travels/wangeditor/WangEditor'
const routes = [{
    path: '/',
    component: HeaderGuide,
    children: [{
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/goods',
        component: Goods
    },
    {
        path: '/travel',
        component: Travel
    },
    {
        path: '/admin',
        component: Admin
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/registered',
        component: Registered
    },
    {
        path: '/travelsdetail',
        component: TravelsDetail
    },
    {
        path: '/app',
        component: App
    },
    {
        path: '/admininfo',
        component: AdminInfo
    },
    {
        path: '/goodsDetail',
        component: GoodsDetail
    },
    {
        path: '/write',
        component: WangEditor
    }
    ]
},

]
export default routes;