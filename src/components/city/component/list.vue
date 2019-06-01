<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="arae">
                <div class="title border-topbottom">
                    当前城市
                </div>
                <div class="button-list">
                    <div class="button-warpper">
                        <div class="button">北京</div>
                    </div>
                    
                </div>
            </div>
            <div class="arae">
                <div class="title border-topbottom">
                    热门城市
                </div>
                <div class="button-list">
                    <div class="button-warpper" v-for="Hotcitys in citylist.hotCities" :key="Hotcitys.id">
                        <div class="button">{{Hotcitys.name}}</div>
                    </div>
                    
                </div>
            </div>
            <div class="arae" v-for="(item,key) in citylist.cities" :key="key">
                <div class="title border-topbottom">
                    {{key}}
                </div>
                <div class="item-list" v-for="(citys) in item" :key="citys.id">
                    <div class="item border-bottom">{{citys.name}}</div>
                </div>
            </div>
          
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'citylist',
    mounted(){
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    props:[
        'citylist'
    ]
}
</script>

<style scoped>
.list{
    overflow: hidden;
    position: absolute;
    top:1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
}

.border-topbottom{
     border-bottom: 1px solid #F4F4F4;
}


.title{
    line-height: .54rem;
    height: .44rem;
    background: #eee;
    padding-left: .2rem;
    color: #666;
}

.button-list{
    padding: .1rem .6rem .1rem .1rem;
    overflow: hidden;
}
.button-list .button-warpper{
    width: 33.33%;
    float: left;
    display: block;
}
.button-list .button-warpper .button{
    margin: .1rem;
    padding: .1rem 0;
    text-align: center;
    border:.02rem solid #ccc;
    font-size: 16px;
    border-radius: .06rem;

    
}


.item-list .item{
    line-height: .76rem;
    padding-left: .2rem;
}

.border-bottom::before{
    border-color: #666;
}

</style>
