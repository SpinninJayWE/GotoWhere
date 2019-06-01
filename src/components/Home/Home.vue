<template>
    <div>
        <Header :city='city'/>
        <Swiper :list='SwiperList'/>
        <Icons :list='IconList'/>
        <Recommend :list='recommendList'/>
        <Weekend :list='weekendList'/>
    </div>
</template>

<script>
import Header from './HomeSubcom/Header'
import Swiper from './HomeSubcom/Swiper'
import Icons from './HomeSubcom/Icons'
import Recommend from './HomeSubcom/Recommend'
import Weekend from './HomeSubcom/Weekend'
import axios from 'axios'
export default {
    name:'Home',
    components:{
        Header,
        Swiper,
        Icons,
        Recommend,
        Weekend
    },
    data(){
        return {
            city:'北京',
            SwiperList:[],
            IconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    methods:{
        getHomeinfo(){
            axios.get('/static/Moke/index.json').then(this.getHomeinfoSucc)
        },
        getHomeinfoSucc(res){
            res = res.data;
            if(res.ret&&res.data){
                this.city=res.data.city;
                this.SwiperList=res.data.swiperList;
                this.IconList=res.data.iconList;
                this.recommendList=res.data.recommendList;
                this.weekendList=res.data.weekendList;
            }
        }
    },
    mounted(){
        this.getHomeinfo();

    }
}
</script>

<style>

</style>
