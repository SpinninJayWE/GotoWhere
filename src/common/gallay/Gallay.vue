<template>
    <div class="container" @click="out">
        <div class="wapper">
            <swiper :options='swiperOption'>
                <swiper-slide v-for="(img,index) in imgs" :key="index" >
                    <img class="Swiper-img" :src="img"/>
                </swiper-slide>

                <div class="swiper-pagination"  slot="pagination"></div> 
            </swiper>
        </div>
    </div>

</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name:'CommonGallay',
    data(){
        return {
            swiperOption:{
                pagination : '.swiper-pagination',
                paginationType : 'fraction',
                observeParents:true,
                observer:true,
                loop : true,
            }
        }
    },
    props:{
        imgs:{
            type:Array,
            default(){
                return [
                        // 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_350x240_8e61302a.jpg',
                        // 'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_350x240_df8ba9f7.jpg',
                        // 'http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_350x240_b09a9503.jpg'
                        ]
            }
        }
    },
    methods:{
        ...mapMutations(['changeGallGayShow']),
        out(){
            this.changeGallGayShow(false)
        }
    }
}
</script>

<style scoped>
    .container{
        display: flex;
        z-index: 99;
        flex-direction:column;
        justify-content: center;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #000;
    }
    .wapper{
        /* background: #000; */
        width: 100%;
        height: 0;
        overflow: hidden;
        padding-bottom: 100%;
    }
    .wapper .Swiper-img{
        width: 100%;
    }
    .swiper-pagination{
        color: #fff;
    }

</style>
