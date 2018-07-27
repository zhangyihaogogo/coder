<template>
    <div>
        <h2>{{msg}}</h2>
        <h3>{{$store.state.count}}--{{count}}</h3>
        <p>
            <button @click="$store.commit('add')" >+</button>
            <button @click="reduce">-</button>
        </p>
        <div>
            <h4>Action</h4>
            <button @click="addAction" >+</button>
            <button @click="reduceAction">-</button>
        </div>
        <el-row>
            <el-col :span="6">
                <div class="grid-content bg-purple-dark">123</div>
                <span class="el-icon-info"></span>
            </el-col>
        </el-row>
        <el-row>
            <el-button round @click="btnclick" >嘿</el-button>
        </el-row>

        <div class="checklist">
            <div v-for="(item, index) in lists" :class="item.name" @click="checks(item,index)" @mouseenter="checkenter(index)" :key="index">
                <input type="checkbox" :value="item.value" v-model="datalists">
                <span>{{item.value}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import store from '@/vuex/store';
// mapState: store中数据处理方便的方法；
// mapMutations: store中处理数据的方法；
// mapGetters: 过滤数据；
// mapActions: 异步处理数据，最终调用mautation改变数据
import {mapState,mapMutations,mapGetters, mapActions} from 'vuex';
export default {
    data(){
        return{
            msg:'Hello Vuex',
            datalists:[],
            onoff:true,
            start:-1
        }
    },
    beforeMount(){
        this.$store.state.info = true
    },
    // 怎样把store中的数据拿到组件中使用(访问数据对象的方法)；方法1
    // comnputed:{
    //     count(){
    //         return this.$store.state.count
    //     }
    // },
    // 方法2:
    // computed:mapState({
    //     count:state=>state.count
    // }),
    // 方法3:
    computed:{
        ...mapState(['count']),
        lists: function(){
            let arr = []
            for (let index = 0; index < 99; index++) {
                if(index<9){
                    arr.push( 
                        {
                            value: '0'+(index+1),
                            name: 'litt'
                        }
                    )
                }else{
                    arr.push(
                        {
                            value: ''+(index+1),
                            name: 'litt'
                        }
                    )
                }
            }
            return arr
        },
        chenckclass(){
            let arr = []
            for (let index = 0; index < 99; index++) {
                arr.push(false)
            }
            return arr
        }
        // count(){
        //     return this.$store.getters.count;
        // }

        // ...mapGetters(['count'])
    },
    methods:{
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction','reduceAction']),
        btnclick(){
            this.reduceAction();
        },
        checks(itm,index){
            let arr = []
            if(this.datalists.some(e => e === itm.value)){
                this.datalists.splice(this.datalists.findIndex(e => e === itm.value),1)
                
            }else{
               
                if(this.start === -1){
                    this.start = index;
                }else{
                    arr = this.lists.map((e,i)=>{
                        if(this.start<index){
                            if(this.start < i && i< index){
                                return e.value
                            }
                        }else{
                            if(index < i && i< this.start){
                                return e.value
                            }
                        }
                    })
                    this.start = -1;
                }
            }
            // console.log("arr",arr)
            this.datalists = [...new Set(this.datalists.concat(arr))]
           
        },
        checkenter(index){
            // if(this.start === -1){
            //     return
            // }
            // let num = index - this.start;
            // num > 0 ? num = num : num = num * -1;
            // this.chenckclass.forEach(e => e = false)
            // for (let i = 0; i <= num; i++) {
            //     if(this.start < index){
            //         // this.chenckclass[this.start+i] = true;
            //         this.$set(this.chenckclass, this.start+i, true)
            //     }else{
            //         this.$set(this.chenckclass, this.start-i, true)
            //         // this.chenckclass[this.start-i] = true;
            //     }
            // }
            // console.log(this.chenckclass)
            // this.chenckclass = this.chenckclass.map(e=>e)
        },
        checkleave(index){

        }
    },
    store
}
</script>
<style>
    .bg-purple-dark{
        background: red;
    }
    .checklist{
        max-width: 250px;
        border: 1px solid black;
    }
    .litt{
        display: inline-block;
        padding: 3px;
    }
    .active{
        background: red;
    }
</style>

