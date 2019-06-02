<template>
    <div>
        <Header/>
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
import {mapState} from 'vuex'
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
            SwiperList:[],
            IconList:[],
            recommendList:[],
            weekendList:[],
            lastCity:''
        }
    },
    methods:{
        getHomeinfo(){
            axios.get('/static/Moke/index.json?city='+this.stacity).then(this.getHomeinfoSucc)
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
    computed:{
        ...mapState({'stacity':'city'})
    },
    mounted(){
        this.getHomeinfo();
        this.lastCity=this.stacity;

    },
    activated(){
        if(this.lastCity!=this.stacity){
            this.lastCity=this.stacity;
            this.getHomeinfo();
        }
    }
}
</script>

<style>

</style>
