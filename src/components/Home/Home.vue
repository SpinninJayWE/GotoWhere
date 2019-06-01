<template>
    <div>
        <Header/>
        <Swiper/>
        <Icons/>
        <Recommend/>
        <Weekend/>
    </div>
</template>

<script>
import Header from './HomeSubcom/Header'
import Swiper from './HomeSubcom/Swiper'
import Icons from './HomeSubcom/Icons'
import Recommend from './HomeSubcom/Recommend'
import Weekend from './HomeSubcom/Weekend'
export default {
    name:'Home',
    components:{
        Header,
        Swiper,
        Icons,
        Recommend,
        Weekend
    }
}
</script>

<style>

</style>
