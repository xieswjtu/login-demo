import Home from "@/components/HomePage.vue"
import Login from "@/components/LoginPage.vue"
import User from "@/components/UserPage.vue"


export  default  [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/user', component: User },
]