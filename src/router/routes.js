import Home from '../pages/Home'
import Category from '../pages/Category'
import General from '../pages/General'
import Shopping from '../pages/Shopping'
import Personal from '../pages/Personal'
import Login from '../pages/Login'
import Search from '../pages/Search'
export default [
  {
    path:'/home',
    component:Home,
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/general',
    component:General
  },
  {
    path:'/shopping',
    component:Shopping
  },
  {
    path:'/personal',
    component:Personal
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/',
    redirect:'/home'
  },
]
