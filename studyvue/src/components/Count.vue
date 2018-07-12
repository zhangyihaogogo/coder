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
        <ve-pie :data="chartData"></ve-pie>
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
            chartData: {
                columns: ['日期', '访问用户'],
                rows: [
                    { '日期': '1/1', '访问用户': 1393 },
                    { '日期': '1/2', '访问用户': 3530 },
                    { '日期': '1/3', '访问用户': 2923 },
                    { '日期': '1/4', '访问用户': 1723 },
                    { '日期': '1/5', '访问用户': 3792 },
                    { '日期': '1/6', '访问用户': 4593 }
                ]
            }
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
        }
    },
    store
}
</script>
<style>
    .bg-purple-dark{
        background: red;
    }
</style>

