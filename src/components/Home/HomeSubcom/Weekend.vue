<template>
    <div>
         <div class="RecomToptitle">
            周末去哪儿
        </div>
         <ul>
            <li style="border-bottom:1px solid #eee;padding-bottom:3px;" class="RecomItem border-bottom" v-for="recoms in list" :key="recoms.id">

                <div class="item-img-warpper">
                    <img class="item-img" :src="recoms.imgUrl"/>
                </div>
                <div class="item-info">
                    <p class="item-info-title">{{recoms.title}}</p>
                    <p class="item-info-text">{{recoms.desc}}</p>
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
