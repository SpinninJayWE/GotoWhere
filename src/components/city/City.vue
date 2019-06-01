<template>
    <div class="city">
        <cityHeader/>
        <citySearch :citylist='citylist'/>
        <cityList :latter="latter" :citylist='citylist'/> 
        <cityAlphabet :citylist='citylist' @change='handelltter'/>
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
            citylist:[],
            latter:''
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

        },
        handelltter(latters){
            this.latter=latters;
            // console.log(this.latter);
        }
    },
    mounted(){
        this.getCityList();
    },
    watch:{
    }
}
</script>

<style>

</style>
