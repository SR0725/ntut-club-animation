<template>
  <div class="bg flex-column d-flex align-center justify-center"
    :style="{ transform: `scale(${turnScale}) rotate(${turnRotate}deg)`}">
    National Taipei University of Technology Join the NTUT Programming Club - NTUT<br>
    Join the NTUT Programming Club National Taipei University of Technology - NTUT<br>
    National Taipei University of Technology Join the NTUT Programming Club - NTUT<br>
    Join the NTUT Programming Club National Taipei University of Technology - NTUT<br>
    National Taipei University of Technology Join the NTUT Programming Club - NTUT<br>
    Join the NTUT Programming Club National Taipei University of Technology - NTUT<br>
    National Taipei University of Technology Join the NTUT Programming Club - NTUT<br>
    Join the NTUT Programming Club National Taipei University of Technology - NTUT<br>
    National Taipei University of Technology Join the NTUT Programming Club - NTUT<br>
    Join the NTUT Programming Club National Taipei University of Technology - NTUT<br>
    National Taipei University of Technology Join the NTUT Programming Club - NTUT<br>
  </div>
</template>

<script>
  export default {
    name: 'textBackground',
    data() {
      return {
        turnScale: 1,
        turnRotate: 90,
        maxScrollClub: window.innerHeight * 31,
        maxScrollWelcome: window.innerHeight * 19,
        maxScrollCat: window.innerHeight * 7,
        maxScrollHey: window.innerHeight * 4,
        minScrollHey: 0,
      }
    },
    created() {
      window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        if(window.scrollY < this.maxScrollHey){
          this.stateHey();
        }else if(window.scrollY < this.maxScrollCat){
          this.stateCat();
        }else if(window.scrollY < this.maxScrollWelcome){
          this.stateWelcome();
        }else if(window.scrollY < this.maxScrollClub){
          this.stateClub();
        }
      },
      stateClub(){
        this.turnScale = 0.9;
        this.turnRotate = 0;
      },
      stateWelcome(){
        this.turnScale = 2;
        this.turnRotate = window.movedet1(145,0,this.maxScrollWelcome-this.maxScrollCat,window.scrollY-this.maxScrollCat)
      },
      stateCat(){
        this.turnScale = window.movedet1(0.8,2,this.maxScrollCat-this.maxScrollHey,window.scrollY-this.maxScrollHey)
        this.turnRotate = window.movedet1(90,145,this.maxScrollCat-this.maxScrollHey,window.scrollY-this.maxScrollHey)
      },
      stateHey(){
        this.turnScale = window.movedet1(1,0.8,this.maxScrollHey,window.scrollY)
        this.turnRotate = 90;
      }
    }
  }
</script>

<style scoped>
.bg{
  position: fixed;
  left: calc(50vw - 1000px);
  top: calc(50vh - 1000px);
  width: 2000px;
  height: 2000px;
  color: rgba(0,0,0,0.15);
  font-size: 3em;
  line-height: 256px;
  letter-spacing: 3px;
}
</style>
