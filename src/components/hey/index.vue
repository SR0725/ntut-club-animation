<template>
  <div>
    <div class="show" v-if="show"
    :style="{ transform: `translateY(${turnY}px)`,opacity: turnOpacity}">
      <div
        class="d-flex align-center justify-center"
        style="
          position:absolute;
          width: 100%;
          height: 100vh;
          bottom: 80px;">
        <textAnim />
      </div>

      <div
        class="d-flex align-center justify-center"
        style="
          position:absolute;
          width: 100%;
          height: 100vh;">
        <textTitle />
      </div>

      <textNeastR />
      <textNeastL />
    </div>

    <div :style="{ height: height+'px'}">

    </div>
  </div>
</template>

<script>
  import textAnim from './textAnim.vue'
  import textTitle from './textTitle.vue'
  import textNeastR from './textNeastR.vue'
  import textNeastL from './textNeastL.vue'



  export default {
    data() {
      return {
        height: window.innerHeight * 4,
        show: true,
        turnY: 0,
        turnOpacity: 1,
      }
    },
    created() {
      window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        if(window.scrollY > this.height + window.innerHeight){
          this.show = false;
          return;
        }else if(window.scrollY > this.height){
          this.turnY = window.movedet1(0,256,window.innerHeight,window.scrollY-this.height);
          this.turnOpacity = window.movedet1(1,0,window.innerHeight,window.scrollY-this.height);
        }else{
          this.turnY = 0;
          this.turnOpacity = 1;
        }

        this.show = true;

      }
    },
    components: {
      textAnim,textTitle,textNeastR,textNeastL
    }
  }
</script>

<style scoped>
  .show{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
</style>
