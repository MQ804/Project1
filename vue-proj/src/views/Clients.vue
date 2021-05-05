<template>
  <div class="clients">
    <h1 class="name" style="font-size: 1.6em; margin-top: 20px">
      {{ this.name }}
    </h1>
    <template>
      <b-breadcrumb :items="breadcrumbItems"></b-breadcrumb>
    </template>
    <div>
      <b-tabs content-class="mt-3" class="tabs">
        <b-tab title="Information" @click="breadcrumbItemsFunc('Information')" active>
          <div class="tab-content"><p>I'm the first tab</p></div>
        </b-tab>
        <b-tab title="Tab2" @click="breadcrumbItemsFunc('Tab2')">
          <div class="tab-content">
            <p>I'm the second tab</p>
          </div>
        </b-tab>
        <b-tab title="Tab3" @click="breadcrumbItemsFunc('Tab3')">
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
          text: 'Information',
          href: '#',
        },
      ],
      name: this.$route.name,
    };
  },
  methods: {
    breadcrumbItemsFunc(nameTab) {
      this.breadcrumbItems = [
        {
          text: this.$route.name,
          href: '#',
        },
        {
          text: nameTab,
          href: '#',
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-content {
  padding: 20px;
  width: 96%;
  box-shadow: 1px 1px 3px #000000;
}
</style>
