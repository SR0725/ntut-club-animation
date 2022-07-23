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
import templateProve from './components/prove/index.vue'  //我們致力於推廣資訊教育
import templateGreat from './components/great/index.vue'  //讓程式的美好k
import templateStudent from './components/student/index.vue'  //普遍於台北科大的學生中K
import templateEazy from './components/eazy/index.vue'   //我們將用最簡單的方式K
import templateCode from './components/code/index.vue'   //教你利用不同的程式語言K
import templateGame from './components/game/index.vue'  //做出不同工具及遊戲K

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
