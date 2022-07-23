<template>
  <div class="bg flex-column d-flex align-start justify-center mt-37"
    :style="{ transform: `translateX(${turnX}px)`}">
    <span class="d-flex">
      <span>UNIV</span>
      <span class="anim" :style="{ transform: `rotate(${turnRotate3}deg)`}">E</span>
      <span>RSITY</span>

    </span>
    <span class="text-blue">
      OF
    </span>
    <span class="text-green d-flex">
      <span class="anim" :style="{ transform: `translateY(${turnY2}px)`}">T</span>
      <span class="anim" :style="{ transform: `translateY(${turnY5}px)`}">E</span>
      <span>CHNOL</span>
      <span class="anim" :style="{ transform: `rotate(${turnRotate4}deg)`}">O</span>
      <span>GY</span>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'textAnim',
    data() {
      return {
        turnX: 0,
        /*Y*/
        turnY1: 70,
        turnY2: 70,
        turnY3: 70,
        turnY4: 70,
        turnY5: 70,
        turnYdelta: window.innerHeight * 3,
        turnY1time: window.innerHeight * 83,
        turnY2time: window.innerHeight * 87,
        turnY3time: window.innerHeight * 80,
        turnY4time: window.innerHeight * 85,
        turnY5time: window.innerHeight * 79,
        /*R*/
        turnRotate1: 0,
        turnRotate2: 0,
        turnRotate3: 180,
        turnRotate4: 0,
        turnRotate5: 0,

        turnRotatedelta: window.innerHeight * 1,
        turnRotate1time: window.innerHeight * 80,
        turnRotate2time: window.innerHeight * 84,
        turnRotate3time: window.innerHeight * 82,
        turnRotate4time: window.innerHeight * 86,
        turnRotate5time: window.innerHeight * 88,

        turnScaleTime: window.innerHeight * 88,
        maxScroll: window.innerHeight * 91,
        minScroll: window.innerHeight * 79,
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
        this.turnX = window.movedet1(-480,480,this.turnScaleTime-this.minScroll,window.scrollY-this.minScroll,true);
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
        this.turnY1 = window.movedet1(70,0,this.turnYdelta,window.scrollY-this.turnY1time,true)
        this.turnY2 = window.movedet1(70,0,this.turnYdelta,window.scrollY-this.turnY2time,true)
        this.turnY3 = window.movedet1(70,0,this.turnYdelta,window.scrollY-this.turnY3time,true)
        this.turnY4 = window.movedet1(70,0,this.turnYdelta,window.scrollY-this.turnY4time,true)
        this.turnY5 = window.movedet1(70,0,this.turnYdelta,window.scrollY-this.turnY5time,true)
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
