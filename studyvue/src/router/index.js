import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Hi from '@/components/hi/index';
// import Boy from '@/components/hi/boy/boy';
// import hi2 from '@/components/hi2/hi2';
import Params from '@/components/params/index';
import Error from '@/components/error/error';
import Count from '@/components/Count';


Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/params/:newsId/:newsTitle',
            name: 'Params',
            component: Params,
            // 进入之前触发
            beforeEnter:(to,from,next)=>{
                //to： 到哪去
                // console.log(to);
                //from： 从哪来
                // console.log(from);
                //是否继续进入；参数： true|false||{path:''}
                next();
            }
        },
        {
            path:'/goHome',
            //重定向
            redirect:(a)=>{
                // console.log(a)
                return {
                    path:'/'
                }
            }
        },
        {
            path: '/Hi',
            component: Hi,
            alias: '/hao'
        },
        {
            path: '*',
            component:Error
        },
        {
            path:'/Count',
            component: Count
        }
    ]
})