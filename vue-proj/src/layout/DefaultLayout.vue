<template>
  <div>
    <defaultHeader/>
    <div class="app-wrapper">
      <slot/>
    </div>
    <defaultFooter/>
  </div>
</template>

<script>
import defaultFooter from '../components/defaultFooter.vue';
import defaultHeader from '../components/defaultHeader.vue';

export default {
  name: 'defaultLayout',
  components: { defaultHeader, defaultFooter },
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  padding-left: 60px;
}
</style>
