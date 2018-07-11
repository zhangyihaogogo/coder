import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    count:0
}
//修改状态（同步）
const mutations={
    add(state,n=1){
        state.count+=n;
    },
    reduce(state){
        state.count--;;
    }
}

// 过滤器
const getters={
    count:function(state){
        return state.count += 100;
    }
}

//修改状态（异步）
const actions = {
    addAction(conttext){
        conttext.commit('add',3)
        setTimeout(()=>{conttext.commit('reduce')},1000)
    },
    reduceAction({commit}){
        commit('reduce')
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})