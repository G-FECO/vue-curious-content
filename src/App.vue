<template>
  <div>
    Test {{ answer }}
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      answer: 0,
    };
  },
  async created() {
    console.log('created before');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    this.answer = 100;
    console.log('created after');
  },
  async mounted() {
    console.log('mounted');
  },
};
</script>
