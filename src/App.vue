<template>
    <div>
       <mt-header fixed title="固定在顶部">

       </mt-header>
       <div id="top_back" @click="url_back()" v-show="is_back_show">&lt;返回</div>
        <router-view class="router_view_style"></router-view>

        <mt-tabbar :class="is_botton_show==true?'':'show'">
            <mt-tab-item>
                <router-link to="/home">
                    <img src="http://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png">
                </router-link>
            </mt-tab-item>
            <mt-tab-item >
                <router-link to="/category">
                    <img src="http://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png">
                </router-link>
            </mt-tab-item>
            <mt-tab-item>
                <img src="http://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png">
            </mt-tab-item>
            <mt-tab-item>
                <img src="http://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png">
            </mt-tab-item>
        </mt-tabbar>

    </div>
</template>

<style scoped>
    .mint-tab-item img{
        width: 42px;
        height: 35px;
    }
    .router_view_style{
        margin-top: 40px;
    }
    .mint-tabbar > .mint-tab-item {
        background-color: #fafafa;
    }
    #top_back{
        position: fixed;
        z-index: 2;
        color: #fff;
        font-weight: 700;
        top: 10px;
        left: 10px;
    }
    .show{
        display: none;
    }
</style>

<script>
    export default {
        data(){
            return {
                is_back_show:false,
                is_botton_show:true
            }
        },
        created(){
            this.get_url_path(this.$route.path);
            console.log(this.$route.path+'---------------path');
        },
        watch:{
            $route(newValue,oldValue){
                this.get_url_path(newValue.path)
            }
        },
        methods:{
            url_back(){
                this.$router.go(-1);
            },
            get_url_path(path){
                if(path=='/home'){
                    this.is_back_show = false;
                    this.is_botton_show = true;
                    console.log(this.is_back_show);
                    console.log('进来了if');
                }else{
                    this.is_back_show = true;
                    this.is_botton_show = false;
                    console.log(this.is_back_show);
                    console.log('进来了else');
                }
            }
        }
    }
</script>