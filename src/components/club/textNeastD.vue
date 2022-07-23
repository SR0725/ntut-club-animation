<template>
  <div class="bg flex-column d-flex align-center justify-center"
    :style="{ transform: `translateX(${turnX}px) rotate(90deg)`
    ,opacity: turnOpacity}">
    T
  </div>
</template>

<script>
  export default {
    data() {
      return {
        turnX: -400,
        turnOpacity: 0,
        maxScroll: window.innerHeight * 31,
        minScroll: window.innerHeight * 19,
        opacityMaxScroll: window.innerHeight * 20.2,
        opacityMinScroll: window.innerHeight * 19,
      }
    },
    created() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount (){
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.turnX = window.movedet1(-400,0,this.maxScroll-this.minScroll,window.scrollY-this.minScroll)
        if(window.scrollY < this.opacityMaxScroll){
          this.turnOpacity = window.movedet1(0,1,this.opacityMaxScroll-this.opacityMinScroll,window.scrollY)
        }
      }
    }
  }
</script>

<style scoped>
.bg{
  position: fixed;
  width: 256px;
  height: 256px;

  bottom: -64px;
  left: 256px;

  color: #00FF0055;
  font-size: 48em;
  font-weight: bold;
}
</style>
