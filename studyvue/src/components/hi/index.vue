<template>
        <div>
            <span> 今天礼拜几？</span>
            <i> 礼拜{{time}}</i>
            <button @click="changeTime" >{{this.btn.onOff ? '确定' : '改变时间'}}</button>
            <input v-if="btn.onOff" type="txt" v-model="time" @keydown.enter="inpkey" v-focus>
            <!-- <router-link :to="{name:'boy',params:{hesname:'king'}}">路边有个小男孩</router-link> -->
            <router-view/>
        </div>
</template>

<script>
    export default {
        name: 'Hi',
        data () {
            return{
                you : '',
                me  : '',
                home: '',
                work: '',
                time: '',
                btn : {
                    onOff: false
                }
            }
        }, 
        // 舰艇数据
        watch: {

        },
        // 处理数据
        computed: {

        },
        // 工具方法
        methods: {
            changeTime (){
                this.btn.onOff = !this.btn.onOff;
            },
            inpkey (){
                console.log("enter")
                this.btn.onOff = false;
            }

        },
        // 自定义指令
        directives:{
            // 指令的定义
            focus:{
                // 当指令被插入dom中时执行
                inserted: function(el){
                    //el：对象
                    el.focus()
                }
            }
        }
    }
</script>

