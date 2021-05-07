<template>
  <div class="app-wrapper">
    <Header />
    <AppMain />
    <Footer />
  </div>
</template>

<script>
import { Header, Footer, AppMain } from './components/index';

export default {
  name: 'index.vue',
  components: { Header, Footer, AppMain },
};
</script>

<style scoped>

</style>
