<template>
  <div class="header">
    <nav>
      <div class="menu">
        <router-link class="brand-logo" to="/">
          <b-icon icon="bar-chart-line-fill"></b-icon>UserData
        </router-link>
        <router-link
          class="menu-item"
          :to="{ name: 'Clients', params: { tab: 'Information' } }"
        >Clients</router-link>
        <router-link class="menu-item" to="/Page2">Page 2</router-link>
        <router-link class="menu-item" to="/Page3">Page 3</router-link>
        <router-link class="menu-item" to="/Page4">Page 4</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'defaultHeader',
};
</script>

<style lang="scss" scoped>
$padding-item-top: 30px;
$padding-left: 60px;

.header {
  position: sticky;
  top: 0;
  background-color: rgb(0, 97, 182);
  width: 100%;
}
.brand-logo {
  color: white;
  padding: $padding-item-top $padding-left;
  text-decoration: none;
}
.menu {
  display: inline-flex;
  justify-content: start;
  color: white;
  &-item {
    color: white;
    text-decoration: none;
    padding: $padding-item-top 20px;
    &:hover {
      background-color: rgba(187, 218, 255, 0.81);
    }
  }
}

</style>
