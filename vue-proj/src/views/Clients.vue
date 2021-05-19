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
        <b-tab title="Information" @click="onTabClick('Information')" active>
          <div class="tab-content">
            <div class="pre-table">
              <span>
                Show <b-form-select
                  v-model="perPage"
                  :options="options"
                  :disabled="!!filter"
              ></b-form-select> entries
              </span>
              <span class="search">
                Search
                  <b-input
                    id="filter-input"
                    v-model="filter"
                    type="search"
                    placeholder="Type to Search"
                  ></b-input>
              </span>
            </div>
            <div>
              <b-table
                id="clients"
                :items="userList"
                :fields="fields"
                :per-page="perPage"
                :current-page="currentPage"
                :filter="filter"
                striped
                hover
              ></b-table>
            </div>
            <div class="post-table">
              <span v-if="!filter">Showing {{ perPage }} out of {{ userList.length }} entries</span>
              <span v-if="!!filter">Showing all out filtering entries</span>
              <span>
                <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="clients"
                first-number
                last-number
                pills
                :disabled="!!filter"
              ></b-pagination>
              </span>
            </div>
          </div>
        </b-tab>
        <b-tab title="Tab2" @click="onTabClick('Tab2')">
          <div class="tab-content">
            <p>I'm the second tab</p>
          </div>
        </b-tab>
        <b-tab title="Tab3" @click="onTabClick('Tab3')">
          <div class="tab-content">
            <p>I'm a third tab!</p>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Clients',
  data() {
    return {
      perPage: 10,
      options: [
        { value: null, text: 'all' },
        { value: 10, text: '10' },
        { value: 25, text: '25' },
        { value: 50, text: '50' },
        { value: 100, text: '100' },
      ],
      currentPage: 1,
      filter: null,
      tab: this.$route.params.tab,
      name: this.$route.name,
      fields: [
        {
          key: 'first_name',
        },
        {
          key: 'last_name',
        },
        {
          key: 'country',
        },
        {
          key: 'birthday',
        },
        {
          key: 'email',
        },
        {
          key: 'created_at',
        },
      ],
    };
  },
  created() {
    this.fetchUserList();
  },
  computed: {
    breadcrumbItems() {
      return [
        {
          text: this.name,
          href: '#',
        },
        {
          text: this.tab,
          to: { name: 'Clients', params: { tab: this.tab } },
        },
      ];
    },
    ...mapState('user', ['userList']),
    rows() {
      return this.userList.length;
    },
  },
  methods: {
    onTabClick(tab) {
      this.tab = tab;
      this.$router.push({ name: 'Clients', params: { tab } });
    },
    ...mapActions('user', ['fetchUserList']),
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
.post-table {
  display: flex;
  justify-content: space-between;
}
.pre-table {
  display: flex;
  justify-content: space-between;
}
.search {
  display: inline-flex;
  align-items: center;
  & > * {
    margin: 0 10px;
  }
}
</style>
