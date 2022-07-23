<template>
  <div>
    <div class="show" v-if="show"
    :style="{opacity: turnOpacity}">
      <textCat />
      <div
        class="d-flex align-center justify-center ml-16">
        <textAnim />
      </div>
    </div>

    <div :style="{ height: height+'px'}">

    </div>
  </div>
</template>

<script>
import textCat from './textCat.vue'
import textAnim from './textAnim.vue'


  export default {
    data: () => ({
      height: window.innerHeight * 3,
      lastScrollHeight: window.innerHeight * 4,
      show: false,
      turnOpacity: 1,
    }),
    created() {
      window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        if(window.scrollY > this.height + this.lastScrollHeight + window.innerHeight || window.scrollY < this.lastScrollHeight){
          this.show = false;
          return;
        }else if(window.scrollY > this.height + this.lastScrollHeight){
          this.turnOpacity = window.movedet1(1,0,window.innerHeight,window.scrollY- (this.height + this.lastScrollHeight));
        }else{
          this.turnOpacity = 1;
        }

        this.show = true;

      }
    },
    components: {
      textCat,textAnim
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
