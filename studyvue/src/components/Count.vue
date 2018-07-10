<template>
    <div>
        <h2>{{msg}}</h2>
        <h3>{{$store.state.count}}--{{count}}</h3>
        <p>
            <button @click="$store.commit('add')" >+</button>
            <button @click="reduce">-</button>
        </p>
    </div>
</template>
<script>
import store from '@/vuex/store';
import {mapState,mapMutations} from 'vuex';
export default {
    data(){
        return{
            msg:'Hello Vuex',
        }
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
    computed:mapState(['count']),
    methods:mapMutations(['add','reduce']),
    store
}
</script>
