<template>
  <div class="bg flex-column d-flex align-center justify-center"
    :style="{ transform: 'scale('+ turnScale+') rotate(270deg)',opacity: turnOpacity}">
    <span class="mr-n16" style="margin-left: -280px">
      <span >L</span>
      <span class="text-green anim" :style="{ transform: 'translateY('+ turn+'px)'}">O</span>
    </span>
    <span class="mr-n16">
      <span>Y</span>
      <span>T</span>
    </span>
    <span class="mr-n2">
      <span>U</span>
      <span class="text-green">I</span>
    </span>
    <span >
      <span>N</span>
      <span>&nbsp;</span>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'textAnim',
    data() {
      return {
        turn: 0,
        turnScale: 2,
        turnOpacity: 0,
        maxScroll: window.innerHeight * 4,
        minScroll: window.innerHeight * 1.2,
        turnScalemaxScroll: window.innerHeight * 1.2,
        turnScaleminScroll: 0,
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
          this.turnScale = window.movedet1(2,1,this.turnScalemaxScroll-this.turnScaleminScroll,window.scrollY)
          this.turnOpacity = window.movedet1(0,1,this.turnScalemaxScroll-this.turnScaleminScroll,window.scrollY)
        }

      }
    }
  }
</script>

<style scoped>
.bg{
  color: black;
  font-size: 12em;
  letter-spacing: 156px;
}

.anim{
  position: absolute;
}
</style>
