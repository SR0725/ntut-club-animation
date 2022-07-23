<template>
  <div class="bg flex-column d-flex align-start justify-center mt-37"
    :style="{ transform: `translateX(${turn}px) translateY(${turn}px)`}">
    <span class="d-flex">
      <span class="anim" :style="{ transform: `translateY(${turnY1}px)`}">N</span>
      <span class="anim" :style="{ transform: `rotate(${turnRotate1}deg)`}">I</span>
      <span class="anim" :style="{ transform: `rotate(${turnRotate5}deg)`}">C</span>
      <span class="anim" :style="{ transform: `translateY(${turnY4}px)`}">E</span>
    </span>
    <span class="d-flex">
      <span class="anim text-blue" :style="{ transform: `translateY(${turnY1}px)`}">P</span>
      <span class="anim text-blue" :style="{ transform: `translateY(${turnY2}px)`}">R</span>
      <span class="anim text-blue" :style="{ transform: `rotate(${turnRotate3}deg)`}">O</span>
      <span class="anim" :style="{ transform: `translateY(${turnY4}px)`}">G</span>
      <span class="anim" :style="{ transform: `translateY(${turnY5}px)`}">R</span>
      <span class="anim" :style="{ transform: `translateY(${turnY4}px)`}">A</span>
      <span class="anim" :style="{ transform: `rotate(${turnRotate2}deg)`}">M</span>
      <span class="anim" :style="{ transform: `rotate(${turnRotate5}deg)`}">?</span>

    </span>
  </div>
</template>

<script>
  export default {
    name: 'textAnim',
    data() {
      return {
        turn: 0,
        /*Y*/
        turnY1: 150,
        turnY2: 150,
        turnY3: 150,
        turnY4: 150,
        turnY5: 150,
        turnYdelta: window.innerHeight * 1,
        turnY1time: window.innerHeight * 47,
        turnY2time: window.innerHeight * 43,
        turnY3time: window.innerHeight * 44,
        turnY4time: window.innerHeight * 49,
        turnY5time: window.innerHeight * 43,
        /*R*/
        turnRotate1: 0,
        turnRotate2: 0,
        turnRotate3: 180,
        turnRotate4: 0,
        turnRotate5: 0,

        turnRotatedelta: window.innerHeight * 1,
        turnRotate1time: window.innerHeight * 44,
        turnRotate2time: window.innerHeight * 48,
        turnRotate3time: window.innerHeight * 46,
        turnRotate4time: window.innerHeight * 51,
        turnRotate5time: window.innerHeight * 53,

        turnScaleTime: window.innerHeight * 53,
        maxScroll: window.innerHeight * 55,
        minScroll: window.innerHeight * 43,
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
        this.turn = window.movedet1(-520,0,this.turnScaleTime-this.minScroll,window.scrollY-this.minScroll,true);
        this.animtrans();
        this.animrotate();
      },
      animrotate(){
        this.turnRotate1 = window.movedet1(0,360,this.turnRotatedelta,window.scrollY-this.turnRotate1time,true);
        this.turnRotate2 = window.movedet1(0,360,this.turnRotatedelta,window.scrollY-this.turnRotate2time,true);
        this.turnRotate3 = window.movedet1(180,360,this.turnRotatedelta,window.scrollY-this.turnRotate3time,true);
        this.turnRotate4 = window.movedet1(0,360,this.turnRotatedelta,window.scrollY-this.turnRotate4time,true);
        this.turnRotate5 = window.movedet1(0,360,this.turnRotatedelta,window.scrollY-this.turnRotate5time,true);

      },
      animtrans(){
        this.turnY1 = window.movedet1(150,0,this.turnYdelta,window.scrollY-this.turnY1time,true)
        this.turnY2 = window.movedet1(150,0,this.turnYdelta,window.scrollY-this.turnY2time,true)
        this.turnY3 = window.movedet1(150,0,this.turnYdelta,window.scrollY-this.turnY3time,true)
        this.turnY4 = window.movedet1(150,0,this.turnYdelta,window.scrollY-this.turnY4time,true)
        this.turnY5 = window.movedet1(150,0,this.turnYdelta,window.scrollY-this.turnY5time,true)
      }
    }
  }
</script>

<style scoped>
.bg{
  color: gray;
  font-size: 12em;
  letter-spacing: 64px;
}

.anim{
  position: relative;
}

.mt-37{
  margin-top: 148px;
}
</style>
