import Vue from 'vue';
import App from './App.vue';

Vue.config.errorHandler = (err) => {
  console.log(err.message); // "Oops가 나와야한다."
};

new Vue({
  render: (h) => h(App),
}).$mount('#app');
