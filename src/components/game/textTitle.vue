<template>
  <div class="bg d-flex align-start justify-start">
    <span>{{showString}}</span>
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
        mainString: "做出不同的工具及遊戲",
        showString: "",
        lineAnimLen: window.innerHeight * 3,
        stringAnimLen: window.innerHeight * 3,
        maxScroll: window.innerHeight * 102,
        minScroll: window.innerHeight * 91,
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
