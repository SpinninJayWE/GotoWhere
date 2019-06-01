<template>
    <div>
        <div class="RecomToptitle">
            热销推荐
        </div>
        <ul>
            <li style="border-bottom:1px solid #eee;padding-bottom:3px;" class="RecomItem border-bottom" v-for="recoms in recommnedList" :key="recoms.id">
                <img class="item-img" :src="recoms.imgurl"/>
                <div class="item-info">
                    <p class="item-info-title">{{recoms.title}}</p>
                    <p class="item-info-text">{{recoms.text}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    data(){
        return {    
            recommnedList:[
                {id:'001',imgurl:'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',title:'上海迪士尼',text:'周末门票半折优惠'},
                {id:'002',imgurl:'http://img1.qunarzz.com/sight/p0/1904/d5/d579b03a110d75a8a3.img.jpg_200x200_740bd4c0.jpg',title:'上海野生动物园',text:'周末门票半折优惠'},
                {id:'003',imgurl:'http://img1.qunarzz.com/sight/p0/1811/e4/e4b9b471d2afc473a3.img.jpg_200x200_9a7794fc.jpg',title:'上海欢乐谷',text:'周末门票半折优惠'},
                {id:'004',imgurl:'http://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_200x200_6d7378b2.jpg',title:'东方明珠',text:'周末门票半折优惠'}
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
    .RecomItem{
        overflow: hidden;
        display: flex;
        height: 94px;
    }

    .RecomItem .item-img{
        width: 1.7rem;
        height: 1.7rem;
        padding: .13rem .20rem;
    }

    .item-info{
        flex: 1;
        padding-left: 0px;
        padding-top: 8px;
        min-width: 0;
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
        color: #ccc;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        
    }

    .item-info .item-button{
        background: #ff9033;
        color: #fff;
        margin-top: 6px;
        padding: 0 .2rem;
        border-radius: 3px;
        line-height: .44rem;
    }

</style>
