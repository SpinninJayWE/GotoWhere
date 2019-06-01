<template>
    <ul class="list">
        <li class="item" v-for="(list,index) in citylist.cities" :key="index">{{index}}</li>
    </ul>
</template>

<script>
export default {
    name:'cityAlphabet',
    data(){
        return {
            
        }
    },
    props:[
        'citylist'
    ]
}
</script>

<style scoped>
.list{
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    /* background: red; */
    width: .25rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgb(4, 178, 212); 

}
.list .item{
    margin-top: 5px;
}

</style>
