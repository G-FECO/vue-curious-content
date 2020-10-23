import Vue from 'vue';

Vue.config.errorHandler = (err) => {
  console.log(err.message); // "Oops가 나와야한다."
};

new Vue({
  template: '<h1>Hello</h1>',
  async mounted() {
    console.log('before');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('after');
    throw new Error('Oops');
  },
}).$mount('#app');
