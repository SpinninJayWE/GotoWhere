<template>
    <div class="warpper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="(sws,index) in list" :key="index">
                <img class="Swiper-img" :src="sws.imgUrl"/>
            </swiper-slide>


            <div class="swiper-pagination"  slot="pagination"></div> 
        </swiper>
    </div>    
</template>

<script>
export default {
    name:'HomeSwiper',
    props:[
        'list'
    ],
    data(){
        return {
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true,
                autoplay:true
            }
        }
    },
    computed:{
        showSwiper(){
            return this.list.length;
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
