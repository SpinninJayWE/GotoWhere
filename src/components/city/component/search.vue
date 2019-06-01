<template>
    <div class="search">
        <input class="search-input" type="text"  placeholder="请输入城市名称或拼音"/>
    </div>
</template>

<script>
export default {
    name:'Citysearch'
}
</script>

<style scoped>
.search{
    height: .72rem;
    background: rgb(4, 178, 212); 
    padding: 0 .1rem;
}
.search .search-input{
    box-sizing: border-box;
    height: .62rem;
    line-height: .62rem;
    width: 100%;
    text-align: center;
    border-radius: 15px;
    color: #666;
    padding: 0 .1rem;
}

</style>
