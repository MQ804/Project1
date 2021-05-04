<template>
<div class="header">
  <Menu />
</div>
</template>

<script>
import Menu from './menu.vue';

export default {
  name: 'header',
  components: { Menu },
};
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  background-color: rgb(0, 97, 182);
  width: 100%;
}
</style>
