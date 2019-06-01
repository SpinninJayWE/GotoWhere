<template>
    <div class="icons">
        <swiper :option="swiperOption">   
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="(item) in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-imgcontent" :src="item.imgurl"/>
                    </div>    
                        <p class="icon-Text">{{item.text}}</p>
                </div>
            </swiper-slide>
        </swiper>    
    </div>
</template>

<script>
export default {
    name:'HomeIcon',
    data(){
        return {
            swiperOption:{
                loop:true
            },
            iconlist:[
                {id:'001',imgurl:'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',text:'景点门票'},
                {id:'002',imgurl:'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',text:'一日游'},
                {id:'003',imgurl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png',text:'上海必游'},
                {id:'004',imgurl:'https://imgs.qunarzz.com/piao/fusion/1803/f5/c4c9d9830404e602.png',text:'室内娱乐'},
                {id:'005',imgurl:'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',text:'动植物园'},
                {id:'006',imgurl:'https://imgs.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',text:'世纪公园'},
                {id:'007',imgurl:'https://imgs.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',text:'上海野生'},
                {id:'008',imgurl:'https://imgs.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',text:'上海迪士尼'},
                {id:'009',imgurl:'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png',text:'上海海昌'}
            ]

        }
    },
    computed:{
        pages(){
            const pages =[]
            this.iconlist.forEach((item,index)=>{
                const page = Math.floor(index/8);
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item);

            });

            return pages
        }
    }
}
</script>

<style scoped>
    .icons >>> .swiper-container{
        height: 0;
        padding-bottom: 50%;
        margin-top: 5px;


    }
    .icons .icon{
        position: relative;
        overflow: hidden;
        width: 25%;
        float: left;
        padding-bottom: 25%;    

        height: 0;
    }

    .icons .icon .icon-img{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 22px;
 
        box-sizing: border-box;
        padding: 5px;
    }
 
    .icon-img .icon-imgcontent{
        height: 100%;
        display: block;
        margin: 0 auto;
    }

    .icon .icon-Text{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 22px;
        line-height: 22px;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

</style>
