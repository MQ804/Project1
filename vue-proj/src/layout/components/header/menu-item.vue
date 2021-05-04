<template>
  <router-link :to="path" v-if="!hidden">
    <b-icon
      v-if="icon"
      :icon="icon"
    ></b-icon>
    {{ title }}
  </router-link>
</template>

<script>
export default {
  name: 'menu-item',
  props: {
    title: {
      type: String,
    },
    icon: {
      type: String,
    },
    path: {
      type: String,
    },
    hidden: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>

</style>
