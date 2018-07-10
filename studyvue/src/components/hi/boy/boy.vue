<template>
    <div class="boy">
        <p>
            <span v-if="tock===0"> {{ test.pag }}</span>
            <button @click="work" v-if="tock === 0"> {{btn.bg1}} </button>
            <button @click="work2" v-if="tock === 0"> {{btn.bg2}} </button>
        </p>
        
        <span v-if="tock !== 0" >{{say}}</span>
    </div>
</template>
<script>
export default {
    name:'boy',
    data (){
        return {
            page:1,
            tock:0,
            say:'',
            test:{
                pag:'你在下班回家了的路上看见路边有一个脏兮兮的小男孩',
                pag1:'他穿着一身破旧的衣服，灵动的大眼睛朝你看了过来。',
                pag1_1:'他大概4、5岁的样子。长着可爱的圆脸，头发修剪的很整齐。',
                pag2:'你看了看天，好像快要下雨了。你突然想起家里窗户没关，你决定快点回家了。'
            },
            btn:{
                bg1:'你走了上去',
                bg2:'你忽然觉的天暗了',
            }
        }
    },
    watch:{
        tock(value){
            switch (value) {
                case 1:
                    this.say = this.test.pag1
                    break;
                case 2:
                    this.say = this.test.pag2
                    break;
                default:
                    break;
            }
        }
    },
    created(){
        // console.log($router.params)
    },
    methods:{
        work(){
            this.tock = 1;
        },
        work2(){
            this.tock = 2;
        }
    }
}
</script>
