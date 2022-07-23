<template>
  <div>
    <div class="show" v-if="show">
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
        class="d-flex align-center justify-start"
        style="
          position:absolute;
          height: 100vh;
          margin-left: calc(50vw - 350px)">
        <textTitle />
      </div>

      <textNeastT />
      <textNeastD />
    </div>

    <div :style="{ height: height+'px'}">

    </div>
  </div>
</template>

<script>
import textAnim from './textAnim.vue'
import textTitle from './textTitle.vue'
import textNeastT from './textNeastT.vue'
import textNeastD from './textNeastD.vue'

export default {
  data: () => ({
    height: window.innerHeight * 12,
    lastScrollHeight: window.innerHeight * 79,
    show: true,
  }),
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if(window.scrollY > this.height + this.lastScrollHeight || window.scrollY < this.lastScrollHeight){
        this.show = false;
        return;
      }
      this.show = true;

    }
  },
  components: {
    textAnim,textTitle,textNeastT,textNeastD
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
