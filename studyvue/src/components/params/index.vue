<template>
    <div>
        <h2>{{masg}}</h2>
        <p>newsId:{{$route.params.newsId}}</p>
        <p>newsTitle:{{$route.params.newsTitle}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            masg:'I am params'
        }
    },
    // 钩子函数，进入路由页面时触发
    beforeRouteEnter (to, from, next) {
        // console.log("准备计入路由")
        next();
    },
    //钩子函数，离开路由页面时触发
    beforeRouteLeave (to, from, next) {
        // console.log("准备离开路由")
        next();
    }
}
</script>

