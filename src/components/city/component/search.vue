<template>
    <div>
        <div class="search">
            <input class="search-input" v-model="cityname" type="text"  placeholder="请输入城市名称或拼音"/>
        </div>
            <div class="search-content" ref="wrapper" v-show="cityname">

                <ul>
                    <li class="search-item border-bottom" v-for="(list,index) in list" :key="index" @click="handleCityClick(list.name)">{{list.name}} </li>
                    <li v-if="hasNodata" class="search-item tishi"><span class="iconfont">&#xe7fa;</span>&nbsp;未匹配到结果！</li>
                </ul>
                
            </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'Citysearch',
    data(){
        return {
            cityname:'',
            list:[],
            timer:null
        }
    },
    computed:{
        hasNodata(){
            return !this.list.length;
        }
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    props:[
        'citylist'
    ],
    watch:{
        cityname () {  
            if(this.timer){
                clearTimeout(this.timer);

            }
            if(!this.cityname){
                this.list=[];
                return;
            }
                this.timer = setTimeout(() => {
                    const result = []
                    for(let i in this.citylist.cities){
                        this.citylist.cities[i].forEach((val) => {
                            if(val.spell.indexOf(this.cityname)>-1||val.name.indexOf(this.cityname)>-1){
                                result.push(val);
                            }
                        });
                    }
                    this.list=result;
                }, 100);
            
        }
    },
    methods:{
        handleCityClick(ct){
            // console.log(ct)
            this.$store.commit('changecityName',ct);
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>

.search{
    height: .72rem;
    background: rgb(4, 178, 212); 
    padding: 0 .1rem;
}
.search .search-input{
    box-sizing: border-box;
    height: .62rem;
    line-height: .62rem;
    width: 100%;
    text-align: center;
    border-radius: 15px;
    color: #666;
    padding: 0 .1rem;
}

.search-content{
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top:1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
}

.search-item{
    line-height: .65rem;
    padding-left: .2rem;
    color: #666;
    background: #fff;
    border-bottom: 1px solid #eee;
}


.border-bottom::before{
    color: #666;
}

.tishi{
    color: rgb(231, 108, 7);
}


</style>
