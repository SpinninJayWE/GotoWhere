<template>
    <div id="HeaderContainer">
        <div class="Header-left">
            <span class="iconfont" style="font-size:18px;display:block;text-align:center;">&#xe624;</span>
            </div>
        <div class="Header-input">
            <span class="iconfont" style="margin-left:6px;">&#xe632;</span>
            输入城市/景点
        </div>
        <div class="Header-right">{{city}}&nbsp;<span class="iconfont arrow-icon">&#xe600;</span></div>
    </div>
</template>

<script>
export default {
    name:'HomeHeader',
    data(){
        return {

        }
    },
    props:[
        'city'
    ]
}
</script>

<style scoped>
* { touch-action: pan-y; } 

@import url('@/assets/styles/varibles.styl');

#HeaderContainer{
    width: 100%;
    height: 42px;
    line-height: 42px;
    background: rgb(4, 178, 212); 
    overflow: hidden; 
    display: flex;
    color: #fff;
}

#HeaderContainer h2{
    font-size: 15px;
    font-weight: bold;
    padding: 5px;
}


#HeaderContainer .Header-left{
    width: 32px;
    float: left;
     
}

#HeaderContainer .Header-input{
    flex: 1;
    /* text-align: center; */
    background: #fff;
    border-radius: 5px;
    line-height: 32px;
    height: 32px;
    margin-top: 5px;
    color: rgb(128, 150, 155);
    font-weight:1000;
    

}

#HeaderContainer .Header-right{
    width: 62px;
    float: right;
    text-align: center;
     
}

.arrow-icon{
    font-size: 13px;
}

</style>
