<template>
  <router-view :key="key" />
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
