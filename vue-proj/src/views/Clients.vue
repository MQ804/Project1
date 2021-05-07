<template>
  <div class="clients">
    <h1 class="name" style="font-size: 1.6em; margin-top: 20px">
      {{ this.name }}
    </h1>
    <template>
      <b-breadcrumb :items="breadcrumbItems"></b-breadcrumb>
    </template>
    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="First" @click="breadcrumbItemsFunc('First')" active><p>I'm the first tab</p></b-tab>
        <b-tab title="Second"  @click="breadcrumbItemsFunc('Second')"><p>I'm the second tab</p></b-tab>
        <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
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
          text: 'First',
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

<style scoped>

</style>
