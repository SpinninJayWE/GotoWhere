<template>
    <div class="icons">
        <swiper :option="swiperOption">   
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="(item) in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-imgcontent" :src="item.imgUrl"/>
                    </div>    
                        <p class="icon-Text">{{item.desc}}</p>
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
            }

        }
    },
    props:[
        'list'
    ],
    computed:{
        pages(){
            const pages =[]
            this.list.forEach((item,index)=>{
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
