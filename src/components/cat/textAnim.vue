<template>
  <div class="bg flex-column d-flex align-center justify-center"
    :style="{opacity: turnOpacity}">
    <span class="d-flex flex-column">
      <span class="anim" :style="{ transform: 'translateY('+ turn2+'px)'}">T</span>
      <span class="text-green anim ml-n4" :style="{ transform: 'translateY('+ turn1+'px)'}">O</span>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'textAnim',
    data() {
      return {
        turn1: 0,
        turn2: -160,
        turnOpacity: 0,
        maxScroll2: window.innerHeight * 7,
        maxScroll1: window.innerHeight * 5.5,
        minScroll: window.innerHeight * 4,
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
        if(window.scrollY > this.minScroll && window.scrollY < this.maxScroll1){
          this.turn1 = window.movedet1(0, -160,this.maxScroll1-this.minScroll,window.scrollY-this.minScroll);
          this.turnOpacity = window.movedet1(0, 2,this.maxScroll1-this.minScroll,window.scrollY-this.minScroll);
        }else if(window.scrollY > this.maxScroll1 && window.scrollY < this.maxScroll2){
          this.turn2 = window.movedet1(-160, -500,this.maxScroll2-this.maxScroll1,window.scrollY-this.maxScroll1)
        }

      }
    }
  }
</script>

<style scoped>
.bg{
  color: black;
  font-weight: bold;
  font-size: 36em;
  letter-spacing: 128px;
}

.anim{
  position: absolute;
}
</style>
