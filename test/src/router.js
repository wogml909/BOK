import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import Mypage from "./views/Mypage";
import Login from "./views/Login";

Vue.use(VueRouter);

const router =new VueRouter({
    mode:"history",
    routes:[
        {path:"/",component:Home },
        {path:"/about",component:About },
        {path:"/Mypage",component:Mypage },
        {path:"/Login",component:Login },
    ]
});

export default router;