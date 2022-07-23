import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import BezierEasing from 'bezier-easing'



loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')

window.easing = BezierEasing(0.25,0.1,0.25,1);
window.movedet1 = function(start,end,time,delta,needEnd){
  if(needEnd){
    if(delta > time){
      return end;
    }else if(delta < 0){
      return start;
    }
  }
  return start + easing(delta / time) * (end - start);
}
window.movedet2 = function(start,end,time,delta){
  return {
    x: start.x + (end.x - start.x) * (delta / time),
    y: start.y + (end.y - start.y) * (delta / time)
  }
}


window.pageAnim = {
  startTime: 0,
  endTime: 0,

  animationHeyStart: function(){
    this.startTime = Date.now();
    this.deltaTime = 30000;
    requestAnimationFrame(pageAnim.animationHey);
  },

  animationHey: function(){
    let progress = movedet1(0,window.innerHeight * 105,pageAnim.deltaTime,Date.now() - pageAnim.startTime);
    window.scrollTo(0, progress);
    if(Date.now() < pageAnim.startTime + pageAnim.deltaTime){
      requestAnimationFrame(window.pageAnim.animationHey);
    }
  }
};
