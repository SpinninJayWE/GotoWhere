<template>
    <div class="city">
        <cityHeader/>
        <citySearch/>
        <cityList :citylist='citylist'/> 
        <cityAlphabet :citylist='citylist'/>
    </div>
</template>

<script>
import cityHeader from './component/cityHeader'
import citySearch from './component/search'
import cityList from './component/list'
import cityAlphabet from './component/Alphabet'
import axios from 'axios'
export default {
    name:'city',
    data(){
        return {
            citylist:[]
        }
    },
    components:{
        cityHeader,
        citySearch,
        cityList,
        cityAlphabet
    },
    methods:{
        getCityList(){
            axios.get('/static/Moke/city.json').then((res)=>{
                res = res.data;
                console.log(res)
                if(res.ret){
                    this.citylist=res.data;
                }
            });

        }
    },
    mounted(){
        this.getCityList();
    }
}
</script>

<style>

</style>
