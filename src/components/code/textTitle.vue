<template>
  <div class="bg d-flex align-start justify-start">
    <span>{{showString.substr(0,3)}}</span>
    <span>{{showString.substr(3,4)}}</span>
    <span style="position: relative;">{{showString.substr(7,4)}}
      <div
      class="decText Down"
      style="height:100%;border-bottom: 3px solid black;"
      :style="{width: turnDown+'%'}"
      ></div>
      <div
      class="decText Right"
      style="width:100%;border-right: 3px solid black;"
      :style="{height: turnRight+'%'}"
      ></div>
      <div
      class="decText Up"
      style="height:100%;border-top: 3px solid black;"
      :style="{width: turnUp+'%'}"
      ></div>
      <div
      class="decText Left"
      style="width:100%;border-left: 3px solid black;"
      :style="{height: turnLeft+'%'}"

      ></div>
    </span>
    <span>{{showString.substr(11)}}</span>
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
        mainString: "教你利用不同的程式語言",
        decString: "牧珥刀甩否桐勺呈戈吾語",
        showString: "",
        lineAnimLen: window.innerHeight * 3,
        stringAnimLen: window.innerHeight * 3,
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
        if(window.scrollY > this.minScroll){
          let len = Math.floor( (window.scrollY-this.minScroll)/(this.stringAnimLen / this.mainString.length) )
          this.stringSpilt(len);
        }
        if(window.scrollY > this.minScroll + this.stringAnimLen){
          this.decStringLine(window.scrollY - (this.minScroll + this.stringAnimLen));
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
      },
      decStringLine(time){
        if(time < this.lineAnimLen*0.25){
          this.turnDown= 100 * time/(this.lineAnimLen*0.25);
          this.turnRight= 0;
          this.turnUp= 0;
          this.turnLeft= 0;
        }else if(time < this.lineAnimLen*0.5){
          this.turnDown= 100;
          this.turnRight= 100 * (time - this.lineAnimLen*0.25)/(this.lineAnimLen*0.25);
          this.turnUp= 0;
          this.turnLeft= 0;
        }else if(time < this.lineAnimLen*0.75){
          this.turnDown= 100;
          this.turnRight= 100;
          this.turnUp= 100 * (time - this.lineAnimLen*0.5)/(this.lineAnimLen*0.25);
          this.turnLeft= 0;
        }else if(time < this.lineAnimLen*1){
          this.turnDown= 100;
          this.turnRight= 100;
          this.turnUp= 100;
          this.turnLeft= 100 * (time - this.lineAnimLen*0.75)/(this.lineAnimLen*0.25);
        }else{
          this.turnDown= 100;
          this.turnRight= 100;
          this.turnUp= 100;
          this.turnLeft= 100;
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
