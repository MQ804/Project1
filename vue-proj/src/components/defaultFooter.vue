<template>
  <div class="footer">
    (c) Footer Information 2021 - 2021
  </div>
</template>

<script>
export default {
  name: 'defaultFooter',
};
</script>

<style lang="scss" scoped>
$padding-left: 60px;

.footer {
  text-align: start;
  font-size: small;
  padding: 10px 0 10px $padding-left;
  position: fixed;
  bottom: 0;
  background-color: rgb(190, 198, 202);
  color: white;
  width: 100%;
}
</style>
