<template>
  <div class="bg d-flex flex-column align-start justify-start">
    <span>{{showString.substr(0,5)}}</span>
    <span>{{showString.substr(5,12)}}</span>
    <span>{{showString.substr(17)}}</span>

  </div>
</template>

<script>
  export default {
    name: 'textTitle',
    data() {
      return {
        turn: 120,
        turnDown: 0,
        turnRight: 0,
        turnUp: 0,
        turnLeft: 0,
        turnRotate: 0,
        mainString: "NTUT PROGRAMMING CLUB",
        decString: "ntut programming club",
        showString: "",
        lineAnimLen: window.innerHeight * 3,
        stringAnimLen: window.innerHeight * 3,
        minScroll: window.innerHeight * 19,
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
        if(window.scrollY > this.minScroll){
          let len = Math.floor( (window.scrollY-this.minScroll)/(this.stringAnimLen / this.mainString.length) )
          this.stringSpilt(len);
        }
      },
      stringSpilt(len){
        if(len > this.mainString.length){
          this.showString = this.mainString ;
        }else{
          this.showString = this.mainString.substr(0,len);
          this.showString += this.decString.substr(len,1);
        }
        if((Math.floor(window.scrollY) % 1024) < 512){
          this.showString += '_';
        }
      }
    }
  }
</script>

<style scoped>
.bg{
  color: black;
  font-size: 3em;
  letter-spacing: 12px;
  width: 700px;
}
.decText{
  position: absolute;
  top: 0;
  left: 0;
}
</style>
