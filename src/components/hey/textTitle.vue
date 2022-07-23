<template>
  <div class="bg flex-column d-flex align-center justify-center"
    :style="{ transform: `translateY(${turn}px) rotate(${turnRotate}deg)`}">
    嘿
  </div>
</template>

<script>
  export default {
    name: 'textTitle',
    data() {
      return {
        turn: 120,
        turnRotate: 0,

        maxScroll: window.innerHeight * 4,
        minScroll: 0,
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
        this.turn = window.movedet1(120,0,this.maxScroll-this.minScroll,window.scrollY-this.minScroll)
        if(window.scrollY > this.maxScroll && window.scrollY < this.maxScroll + window.innerHeight*0.5){
          this.turnRotate = window.movedet1(0,90,window.innerHeight*0.5,window.scrollY-this.maxScroll)
        }else if(window.scrollY > this.maxScroll + window.innerHeight*0.5){
          this.turnRotate = 90
        }else{
          this.turnRotate = 0;
        }
      }
    }
  }
</script>

<style scoped>
.bg{
  color: black;
  font-size: 3em;
}
</style>
