<template>
    <div class="hello">
        <div class="warp"></div>
        <p>
            <input type="checkbox" value="mane1" v-model="ischeck">
            <input type="checkbox" value="mane2" v-model="ischeck">
            <input type="checkbox" value="mane3" v-model="ischeck">
            <input type="checkbox" value="mane4" v-model="ischeck">
        </p>
        <p style="textAling:center">{{ischeck}}</p>
        <p>{{cont}}</p>
        <button @click="clickin">add</button>
        <!-- <router-link class="rundes" :to="{name: 'Hi'}">hi</router-link> -->
    </div>

</template>

<script>
export default {
    name: "HelloWorld",    
    data() {
        return {
            msg: "Welcome to Your Vue.js App",
            ischeck:[],
            cont:0,
            color:'red'
        };
    },
    components:{
        
    },
    methods:{
        clickin:function(){
            this.cont++;
        }
    }

};
</script>

<!-- Add "scoped" attrib ute to limit CSS to this component only -->
<style scoped>
    .rundes{
        text-decoration: none;
        color: #666666;
    }
</style>
