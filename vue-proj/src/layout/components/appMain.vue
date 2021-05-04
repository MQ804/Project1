<template>
  <router-view :key="key" style="padding-left: 60px"/>
</template>

<script>
export default {
  name: 'appMain',
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>

</style>
