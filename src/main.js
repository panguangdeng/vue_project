//引入vue模块
import Vue from 'vue';
//引入App.vue文件模块
import App from './App.vue';
//引入基于vue模块的第三方模块框架
import Mint from 'mint-ui';
//引入mint-ui 的css   类似于mui,和bootstrop框架的css;
import Moment from 'moment';
import 'mint-ui/lib/style.css';
import '../static/mui/css/mui.css';
import '../static/css/body_one.css';
//引入vue路由模块
import vue_router from 'vue-router';
//引入vue-resource 发送ajax请求获取数据
import Vue_resource from 'vue-resource';
//引入.vue为后缀名的文件模块
import Home from './components/home/home.vue';
import Category from './components/category/category.vue';
import News from './components/news/news.vue';
import News_info from './components/news/news_info.vue';


//应用基于vue的第三方包
Vue.use(vue_router);
//在Vue里引用mint-ui ,这样就不用再其他地方继续定义组件
Vue.use(Mint);
Vue.use(Vue_resource);

Vue.filter('moment_date',function(date,str){
    const from_date_str = str || 'YYYY-MM-DD HH:mm';
    return Moment(date).format(from_date_str);
})

//定义路由
const routes = [
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/category',component:Category},
    {path:'/news_list',component:News},
    {path:'/news_info/:news_id',component:News_info},
];
//定义玩路由后再new  注册一个路由
const router = new vue_router({
    routes
});
new Vue({
    el:'#app',
    render:h=>h(App),
    router
})