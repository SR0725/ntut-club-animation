<template>
  <div class="bg flex-column d-flex align-center justify-center mt-37"
    :style="{ transform: `scale(${turnScale}) rotate(180deg) translateX(${turnX}px)`,opacity: turnOpacity}">
    <span class="mr-n2">
      <span class="text-green">F</span>
      <span class="text-green">O</span>
      <span class="text-green">Y</span>
      <span >O</span>
    </span>
    <span>
      <span class="text-blue">F</span>
      <span class="text-blue anim" :style="{ transform: `rotate(${turnRotate1}deg)`}">O</span>
      <span style="opacity: 0" >O</span>
      <span class="anim" :style="{ transform: 'translateY('+ turnY+'px)'}">Y</span>
      <span style="opacity: 0" >Y</span>
      <span class="text-green">O</span>
    </span>
    <span class="mr-n4">
      <span >I</span>
      <span >N</span>
      <span class="anim" :style="{ transform: `rotate(${turnRotate2}deg)`}">U</span>
      <span style="opacity: 0">U</span>
      <span >T</span>
    </span>
    <span class="mr-8">
      <span >T</span>
      <span >R</span>
      <span >A</span>
      <span >Y</span>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'textAnim',
    data() {
      return {
        turnX: 0,
        turnY: 0,
        turnRotate1: 0,
        turnRotate2: 0,
        turnScale: 0,
        turnOpacity: 0,
        maxScroll: window.innerHeight * 19,
        minScroll: window.innerHeight * 7,
        turnBigScaleminScroll: window.innerHeight * 13,
        turnScalemaxScroll: window.innerHeight * 8.2,
        turnScaleminScroll: window.innerHeight * 7,
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
        if(window.scrollY > this.minScroll && window.scrollY < this.maxScroll){
          this.turn = window.movedet1(0,320,this.maxScroll-this.minScroll,window.scrollY-this.minScroll)
        }

        if(window.scrollY < this.turnScalemaxScroll){
          this.turnScale = window.movedet1(2,1,this.turnScalemaxScroll-this.turnScaleminScroll,window.scrollY-this.turnScaleminScroll)
          this.turnOpacity = window.movedet1(0,1,this.turnScalemaxScroll-this.turnScaleminScroll,window.scrollY-this.turnScaleminScroll)
        }else if(window.scrollY < this.turnBigScaleminScroll){
          this.turnScale = 1
          this.turnOpacity = 1
          this.animRotate();
        }else if(window.scrollY > this.maxScroll){
          this.turnScale = 2
          this.turnOpacity = window.movedet1(1,0,window.innerHeight * 2.5,window.scrollY-this.maxScroll, true)
        }else{
          this.turnScale = 2
          this.turnOpacity = 1
          this.animtrans();
        }

      },
      animRotate(){
        if(window.scrollY > window.innerHeight * 8.2 && window.scrollY < window.innerHeight * 10){
          this.turnRotate1 = 360 * (window.scrollY - (window.innerHeight*8.2) )/(window.innerHeight*1.8);

        }else{
          this.turnRotate1 = 0;
        }

        if(window.scrollY > window.innerHeight * 10 && window.scrollY < window.innerHeight * 12){
          this.turnRotate2 = 360 * (window.scrollY - (window.innerHeight*10) )/(window.innerHeight*2);

        }else{
          this.turnRotate2 = 0;
        }
      },
      animtrans(){
        this.turnX = window.movedet1(0,320,this.maxScroll-this.turnBigScaleminScroll,
        window.scrollY-this.turnBigScaleminScroll)

        if(window.scrollY > window.innerHeight * 14 && window.scrollY < window.innerHeight * 16){
          this.turnY = window.movedet1(0,240,window.innerHeight * 2,window.scrollY-window.innerHeight * 14)
        }else if(window.scrollY > window.innerHeight * 14){
          this.turnY = 240
        }else{
          this.turnY = 0
        }

      }
    }
  }
</script>

<style scoped>
.bg{
  color: gray;
  font-size: 12em;
  letter-spacing: 156px;
}

.anim{
  position: absolute;
}

.mt-37{
  margin-top: 148px;
}
</style>
