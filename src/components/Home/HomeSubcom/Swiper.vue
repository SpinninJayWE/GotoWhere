<template>
    <div class="warpper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="(sws,index) in swiperList" :key="index">
                <img class="Swiper-img" :src="sws.imgurl"/>
            </swiper-slide>


            <div class="swiper-pagination"  slot="pagination"></div> 
        </swiper>
    </div>    
</template>

<script>
export default {
    name:'HomeSwiper',
    data(){
        return {
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true
            },
            swiperList:[
                {id:'001',imgurl:'http://attachments.gfan.com/forum/201504/15/202301silig00iwt0sgezn.jpg'},
                {id:'002',imgurl:'http://i0.hdslb.com/bfs/article/bf7e29b094045a1485e6822058b72b2c9c7cf052.png'},
                {id:'003',imgurl:'http://i0.hdslb.com/bfs/article/48865bbca9f2ad5f3c0510cfd2227444e3a2a485.jpg'},
            ]
        }
    }
}
</script>

<style scoped>

.Swiper-img{
    width: 100%;
    height: 210px;
}

.wrapper{
    background: gray;
}
 

</style>
