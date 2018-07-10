<template>
    <div> 
        <p>{{msg}}</p>
        <h2>错误代码{{code}}</h2>   
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:'糟糕，页面找不到了！',
            code:'404'
        }
    }
}
</script>
