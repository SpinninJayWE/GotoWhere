<template>
    <div class="header">
            <router-link to='/' tag="div">
                    <span class="iconfont header-back" style="font-size:18px;display:block;text-align:center;">&#xe624;</span>
            </router-link>    
            城市选择
    </div>
</template>

<script>
export default {
    name:'CityHeader'

}
</script>

<style>
.header{
    position: relative;
    overflow: hidden;
    height: .86rem;
    line-height: .86rem;
    text-align: center;
    color:#fff;
    background: rgb(4, 178, 212); 
    font-size: 16px;
}
.header .header-back{
    position: absolute;
    width: .64rem;
    text-align: center;
    font-size: .4rem;
    top: 0;
    left: 0;
    bottom: 0;
}



</style>
