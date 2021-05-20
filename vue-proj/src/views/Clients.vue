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
            <standard-table
              :fields="fields"
              :date-of-table="tableItems"
              :id="id"
            />
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
import moment from 'moment';
import standardTable from '../components/standardTable.vue';

export default {
  name: 'Clients',
  components: { standardTable },
  data() {
    return {
      id: 'clients',
      fields: [
        {
          key: 'firstName',
        },
        {
          key: 'lastName',
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
          key: 'createdAt',
        },
      ],
      tab: this.$route.params.tab,
      name: this.$route.name,
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
    tableItems() {
      const res = [];
      this.userList.forEach((row) => {
        const {
          id,
          first_name: firstName,
          last_name: lastName,
          country,
          birthday: birthdayOld,
          email,
          created_at: createdAtOld,
        } = row;
        const birthday = moment(birthdayOld, 'YYYY-MM-DD').format('DD.MM.YYYY');
        const createdAt = moment(createdAtOld, 'YYYY-MM-DD').format('DD.MM.YYYY');
        res.push({
          name: { firstName, id },
          firstName,
          lastName,
          country,
          birthday,
          email,
          createdAt,
        });
      });
      return res;
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
</style>
