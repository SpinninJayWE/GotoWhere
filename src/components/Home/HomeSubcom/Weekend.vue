<template>
    <div>
         <div class="RecomToptitle">
            周末去哪儿
        </div>
         <ul>
            <li style="border-bottom:1px solid #eee;padding-bottom:3px;" class="RecomItem border-bottom" v-for="recoms in recommnedList" :key="recoms.id">

                <div class="item-img-warpper">
                    <img class="item-img" :src="recoms.imgurl"/>
                </div>
                <div class="item-info">
                    <p class="item-info-title">{{recoms.title}}</p>
                    <p class="item-info-text">{{recoms.text}}</p>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    name:'HomeWeekend',
    data(){
        return {    
            recommnedList:[
                {id:'001',imgurl:'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',title:'上海迪士尼',text:'周末门票半折优惠'},
                {id:'002',imgurl:'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',title:'上海野生动物园',text:'周末门票半折优惠'},
                {id:'003',imgurl:'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',title:'上海欢乐谷',text:'周末门票半折优惠'},
                {id:'004',imgurl:'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',title:'东方明珠',text:'周末门票半折优惠'}
            ]
        }
    }
}
</script>


<style scoped>
.RecomToptitle{
        background:#eee;
        padding: 10px;
        margin-top: 5px;
    }
.RecomItem .item-img-warpper{
    overflow: hidden;
    height:0;
    padding-bottom: 40%; 
}

.item-img-warpper .item-img{
    width: 100%; 
}
.RecomItem .item-info{
    padding-left: .2rem;
    padding-bottom: .1rem;
}
.item-info .item-info-title{
        line-height: .54rem;
        font-size: .32rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
}
.item-info .item-info-text{
        line-height: .4rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .24rem;
        color:#616161;
}

</style>
