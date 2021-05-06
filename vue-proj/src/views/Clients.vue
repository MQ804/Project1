<template>
  <div class="clients">
    <h1>
      {{ this.name }}
    </h1>
    <template>
      <b-breadcrumb :items="breadcrumbItems"></b-breadcrumb>
    </template>
    <div>
      <b-tabs content-class="mt-3" class="tabs">
        <b-tab title="Information" active>
          <div class="tab-content"><p>I'm the first tab</p></div>
        </b-tab>
        <b-tab title="Tab2">
          <div class="tab-content">
            <p>I'm the second tab</p>
          </div>
        </b-tab>
        <b-tab title="Tab3">
          <div class="tab-content">
            <p>I'm a third tab!</p>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clients',
  data() {
    return {
      breadcrumbItems: [
        {
          text: this.$route.name,
          href: '#',
        },
        {
          text: this.tab,
          to: { name: 'Clients', params: { tab: this.tab } },
        },
      ],
      name: this.$route.name,
    };
  },
};
</script>

<style lang="scss" scoped>
.tab-content {
  padding: 20px;
  width: 96%;
  box-shadow: 1px 1px 3px #000000;
}
h1 {
  font-size: 1.6em;
  margin-top: 20px;
}
</style>
