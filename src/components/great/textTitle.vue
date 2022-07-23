<template>
  <div class="bg d-flex align-start justify-start"
    :style="{ transform: `translateX(${turnX}px)`,opacity: turnOpacity}">
    <span>{{mainString}}</span>
  </div>
</template>

<script>
  export default {
    name: 'textTitle',
    data() {
      return {
        turnX: 120,
        turnOpacity: 0,
        mainString: "讓程式的美好",
        stringAnimLen: window.innerHeight * 2,
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
        if(window.scrollY < this.minScroll + this.stringAnimLen){
          this.turnX = window.movedet1(120,0,this.stringAnimLen,window.scrollY-this.minScroll, true)
          this.turnOpacity = window.movedet1(0,1,this.stringAnimLen,window.scrollY-this.minScroll, true)
        }
      },
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
