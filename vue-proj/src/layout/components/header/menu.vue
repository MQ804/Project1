<template>
  <div class="menu">
    <menuItem
      v-for="item in routesForDisplay()"
      :key="item.children[0].name"
      class="menu-item"
      :title="item.children[0].name"
      :icon="item.children[0].icon"
      :path="item.children[0].path"
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
  methods: {
    routesForDisplay() {
      return this.routes.filter((route) => !route.hidden);
    },
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
    &:hover {
      background-color: rgba(187, 218, 255, 0.81);
    }
  }
}
</style>
