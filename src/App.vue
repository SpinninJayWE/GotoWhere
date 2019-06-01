<template>
  <div id="app">
    <transition mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
                .v-enter,
                .v-leave-to{
                    opacity: 0;
                    transform: translateX(50%);
                }
                /*进入的时间段 离开的时间段*/
                .v-enter-active,
                .v-leave-active{
                    /*transform: rotateX(120deg);*/
                    transition: all 0.4s ease;
                    
                    
                }

</style>
