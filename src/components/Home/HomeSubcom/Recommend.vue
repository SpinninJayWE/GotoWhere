<template>
    <div>
        <div class="RecomToptitle">
            热销推荐
        </div>
        <ul>
            <li style="border-bottom:1px solid #eee;padding-bottom:3px;" class="RecomItem border-bottom" v-for="recoms in list" :key="recoms.id">
                <img class="item-img" :src="recoms.imgUrl"/>
                <div class="item-info">
                    <p class="item-info-title">{{recoms.title}}</p>
                    <p class="item-info-text">{{recoms.desc}}</p>
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
          
        }
    },
    props:[
        'list'
    ]
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
