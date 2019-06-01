<template>
    <div>
        <Header/>
        <Swiper/>
        <Icons/>
    </div>
</template>

<script>
import Header from './HomeSubcom/Header'
import Swiper from './HomeSubcom/Swiper'
import Icons from './HomeSubcom/Icons'
export default {
    name:'Home',
    components:{
        Header,
        Swiper,
        Icons
    }
}
</script>

<style>

</style>
