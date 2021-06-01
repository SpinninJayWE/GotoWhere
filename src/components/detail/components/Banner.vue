<template>
    <div>
        <div class="banner" @click="GallGay">
            <img class="bannerimg" :src="imgs[0]"/>
            <div class="banner-info">
                <div class="banner-title">故宫(AAAAA景区)</div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe690;</span>&nbsp;32</div>
            </div>
        </div>
        <CommonGallay :imgs='imgs' v-show="GallGayShow"/>
    </div>
</template>

<script>
import  CommonGallay from 'common/gallay/Gallay'
import {mapState,mapMutations} from 'vuex'
export default {
    name:'DetailBanner',
    data(){
        return {
            imgs:[
                     'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_350x240_8e61302a.jpg',
                    'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_350x240_df8ba9f7.jpg',
                    'http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_350x240_b09a9503.jpg'
            ]
        }
    },
    components:{
        CommonGallay
    },
    computed:{
        ...mapState(['GallGayShow'])
    },
    methods:{
        GallGay(){
            this.changeGallGayShow(true);
        },
        ...mapMutations(['changeGallGayShow'])
    },
    activated(){
        this.changeGallGayShow(false);
    }
}
</script>

<style scoped>
.banner{
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
}
.banner .bannerimg{
    width: 100%;
}

.banner .banner-info{
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    /* top: 0; */
    display: flex;
    color: #fff;
    background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))

}

.banner .banner-info .banner-title{
    flex: 6;
    padding-left: .2rem;
    line-height: .5rem;
    height: .5rem;
    font-size: .32rem;
}

.banner .banner-info .banner-number{
    flex: 1;
    line-height: .5rem;
    height: .5rem;
    background: rgb(131, 43, 43,.8);
    border-radius: .2rem;
    text-align: center;
    margin-right: .1rem;
    font-size: .28rem;
}

.banner-icon{
    font-size: .28rem;
}
</style>
