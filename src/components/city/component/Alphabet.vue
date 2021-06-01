<template>
    <ul class="list">
        <li class="item" 
        v-for="(list,index) in citylist.cities" 
        :key="index"
        :ref="index"
        @click="handleletterClick"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleletterMove"
        @touchend="handleletterEnd"

        >
        {{index}}</li>
    </ul>
</template>

<script>
export default {
    name:'cityAlphabet',
    data(){
        return {
            touchsStatus:false,
            startY: 0,
            timer: null
        }
    },
    props:[
        'citylist'
    ],
    updated(){
        this.startY = this.$refs['A'][0].offsetTop
    },
    computed:{
        letters(){
            const leatters = []
            for(let i in this.citylist.cities){
                leatters.push(i);

            }
             return leatters;
        }
    },
    methods:{
        handleletterClick (e){
            this.$emit('change',e.target.innerText);
            // console.log(e.target.innerText);
        },
        handleTouchStart (){
            this.touchsStatus=true;
        },
        handleletterMove (){
            if (this.touchStatus) {
                if (this.timer) {
          clearTimeout(this.timer)
        }
            this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 79
            const index = Math.floor((touchY - this.startY) / 20)
            if (index >= 0 && index < this.letters.length) {
                    this.$emit('change', this.letters[index])
            }
            }, 16)
      }
        },
        handleletterEnd (){
            this.touchsStatus=false;
        }
    }
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
