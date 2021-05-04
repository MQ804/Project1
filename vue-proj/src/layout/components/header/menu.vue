<template>
  <div class="menu">
    <menuItem
      v-for="item in routes"
      :key="item.title"
      class="menu-item"
      :title="item.title"
      :icon="item.icon"
      :path="item.path"
      :hidden="item.hidden"
    />
  </div>
</template>

<script>
import { routes } from '@/router';
import menuItem from './menu-item.vue';

export default {
  name: 'menu',
  components: { menuItem },
  data() {
    return {
      routes,
    };
  },
};
</script>

<style scoped lang="scss">
$padding-item-top: 30px;

.menu {
  display: flex;
  justify-content: start;
  color: white;
  > :first-child {
    padding: $padding-item-top 60px;
  }
  &-item {
    color: white;
    text-decoration: none;
    padding: $padding-item-top 40px;
  }
}
</style>
