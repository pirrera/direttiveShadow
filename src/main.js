import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'


import shadow from './directives/shadow.js';
import touchScale from './directives/touchScale.js';
import swipe from './directives/swipe.js';

Vue.directive('touchScale', touchScale);  
Vue.directive('shadow', shadow);  
Vue.directive('swipe', swipe);  


if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}


// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  
  render: h => h('frame', [h(App)])
}).$start()

