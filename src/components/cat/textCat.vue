<template>
  <div class="bg flex-column d-flex align-center justify-center"
    :style="{opacity: turnOpacity}">
    <img
      v-if="!turnUpCat"
      width="300"
      src="../../assets/cat.png"
      :style="{ transform: `translateX(${turnX}px) scaleX(${turnScaleX})`}"
    />
    <img
      v-if="turnUpCat"
      width="300"
      src="../../assets/cat-up.png"
      :style="{ transform: `translateX(${turnX}px) scaleX(${turnScaleX})`}"
    />
  </div>
</template>

<script>
  export default {
    name: 'textAnim',
    data() {
      return {
        turnUpCat: 1,
        turnX: 0,
        turnScaleX: 1,
        turnOpacity: 0,
        maxScrollMoveR: window.innerHeight * 7,
        maxScrollMoveL: window.innerHeight * 5.5,
        maxScrollOpacity: window.innerHeight * 5,
        minScrollOpacity: window.innerHeight * 4,
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
        this.turnUpCat = ((Math.floor(window.scrollY) % 512) < 256);
        if(window.scrollY > this.minScrollOpacity && window.scrollY < this.maxScrollOpacity){
          this.turnOpacity = window.movedet1(0,1,this.maxScrollOpacity-this.minScrollOpacity,window.scrollY-this.minScrollOpacity)
        }
        if(window.scrollY > this.minScrollOpacity && window.scrollY < this.maxScrollMoveL){
          this.turnX = window.movedet1(0,-240,this.maxScrollMoveL-this.minScrollOpacity,window.scrollY-this.minScrollOpacity)
          this.turnScaleX = 1;
        }else if(window.scrollY > this.maxScrollMoveL && window.scrollY < this.maxScrollMoveR){
          this.turnX = window.movedet1(-240,0,this.maxScrollMoveR-this.maxScrollMoveL,window.scrollY-this.maxScrollMoveL)
          this.turnScaleX = -1;
        }


      }
    }
  }
</script>

<style scoped>
.bg{
  position: fixed;
  bottom: 0;
  right: 0;
}

.anim{
  position: absolute;
}
</style>
