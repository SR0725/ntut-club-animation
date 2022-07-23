<template>
  <div class="bg flex-column d-flex align-center justify-center mt-37"
    :style="{ transform: `scale(${turnScale}) rotate(180deg) translateX(${turnX}px)`,opacity: turnOpacity}">
    <span class="mr-16">
      <span class="text-green anim" :style="{ transform: `rotate(${turnRotate1}deg) translateY(380px) translateX(70px)`}">T</span>
      <span style="opacity: 0">E</span>
      <span :class="{'text-green':!state2,'text-blue':state2}">C</span>
      <span :class="{'text-green':!state2,'text-blue':state2}">H</span>
    </span>
    <span class="mr-n16" v-if="state2">
      <span class="anim" :style="{ transform: 'translateY('+ turnY1+'px)'}">N</span>
      <span style="opacity: 0">I</span>
      <span style="opacity: 0">O</span>
      <span class="anim" :style="{ transform: 'translateY('+ turnY2+'px)'}">E</span>
      <span style="opacity: 0">R</span>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'textAnim',
    data() {
      return {
        state2: false,

        turnX: 0,
        turnY1: 0,
        turnY2: 0,
        turnRotate1: 0,
        turnScale: 0,
        turnOpacity: 0,
        maxScroll: window.innerHeight * 31,
        minScroll: window.innerHeight * 19,
        turnBigScaleminScroll: window.innerHeight * 24,
        turnScalemaxScroll: window.innerHeight * 20.2,
        turnScaleminScroll: window.innerHeight * 19,
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

        if(window.scrollY > this.turnBigScaleminScroll){
          this.state2 = true;
        }else{
          this.state2 = false;
        }

        if(window.scrollY < this.turnScalemaxScroll){
          this.turnScale = window.movedet1(2,1,this.turnScalemaxScroll-this.turnScaleminScroll,window.scrollY-this.turnScaleminScroll)
          this.turnOpacity = window.movedet1(0,1,this.turnScalemaxScroll-this.turnScaleminScroll,window.scrollY-this.turnScaleminScroll)
        }else if(window.scrollY < this.turnBigScaleminScroll){
          this.turnScale = 1
          this.turnOpacity = 1
        }
        this.animtrans();
        this.animRotate();
      },
      animRotate(){
        if(window.scrollY > window.innerHeight * 28 && window.scrollY < window.innerHeight * 30){
          this.turnRotate1 = window.movedet1(0,360,window.innerHeight * 2,window.scrollY-window.innerHeight * 28,true)
        }else{
          this.turnRotate1 = 0;
        }
      },
      animtrans(){
        this.turnX = window.movedet1(0,-320,this.maxScroll-this.minScroll,
        window.scrollY-this.minScroll)

        if(window.scrollY > window.innerHeight * 21 && window.scrollY < window.innerHeight * 23){
          this.turnY1 = window.movedet1(0,240,window.innerHeight * 2,window.scrollY-window.innerHeight * 21,true)
        }

        if(window.scrollY > window.innerHeight * 26 && window.scrollY < window.innerHeight * 28){
          this.turnY2 = window.movedet1(0,240,window.innerHeight * 2,window.scrollY-window.innerHeight * 26,true)
        }
      }
    }
  }
</script>

<style scoped>
.bg{
  color: gray;
  font-size: 16em;
  letter-spacing: 256px;
}

.anim{
  position: absolute;
}

.mt-37{
  margin-top: 148px;
}
</style>
