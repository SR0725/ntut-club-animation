<template>
  <v-app>
    <v-main>
      <textBackground />

      <templateHey />
      <templateCat />
      <templateWelcome />
      <templateClub />
      <templateProve />
      <templateGreat />
      <templateStudent />
      <templateEazy />
      <templateCode />
      <templateGame />
    </v-main>
  </v-app>
</template>

<script>
import templateHey from './components/hey/index.vue'
import templateCat from './components/cat/index.vue'
import templateWelcome from './components/welcome/index.vue'
import templateClub from './components/club/index.vue'  //
import templateProve from './components/prove/index.vue'  //找飯店？Trivago！找程式？ＮＰＣ！
import templateGreat from './components/great/index.vue'  //奉獻你的肝臟吧！
import templateStudent from './components/student/index.vue'  //和其他科系的新朋友一起do Project
import templateEazy from './components/eazy/index.vue'   //我們將用最簡單的方式
import templateCode from './components/code/index.vue'   //教你利用不同的程式語言
import templateGame from './components/game/index.vue'  //做出不同工具及遊戲

import textBackground from './components/textBackground.vue'

export default {
  name: 'App',

  components: {
    textBackground,
    templateHey,
    templateCat,
    templateWelcome,
    templateClub,
    templateProve,
    templateGreat,
    templateStudent,
    templateEazy,
    templateCode,
    templateGame
  }
}
</script>
