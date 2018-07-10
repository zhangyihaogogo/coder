<template>
    <div id="app">
        <div>
            <button @click="goBack">后退</button>
            <button @click="goOn">前进</button>
            <button @click="gotohome">返回首页</button>
        </div>
        <router-link to="/" >isHome</router-link> |
        <router-link to="/Params/192/zyh" >isParams</router-link> |
        <router-link to="/gohome">goHome</router-link> |
        <router-link to="/Hi">hi</router-link> |
        <router-link to="/hao">hao</router-link> |
        <router-link to="/Count">Count</router-link> |
        <!-- transition：路由过度动画 mod：模式 -->
        <transition name="rous" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<script>
export default {
    name: "App",
    methods:{
        goBack(){
            this.$router.go(-1);
        },
        goOn(){
            this.$router.go(1);
        },
        gotohome(){
            this.$router.push('/')
        }
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
/*
    name-enter : 开始；
    name-enter-active:开始执行；
    name-leave： 结束；
    name-leave-active:结束执行；
*/
.rous-enter{
    opacity:0;
}
.rous-enter-active{
    transition: opacity .5s;
}
.rous-leave{
    opacity: 1;
}
.rous-leave-active{
    opacity: 0;
    transition: opacity .5s;
}
</style>
