<template>
  <div>
    <div class="pre-table">
      <span>
        Show <b-form-select
          v-model="perPage"
          :options="options"
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
        :id="id"
        :items="dateOfTable"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        :filter="filter"
        striped
        hover
      ></b-table>
    </div>
    <div class="post-table">
      <span>Showing {{ perPage }} out of {{ dateOfTable.length }} entries</span>
      <span>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          :aria-controls="id"
          first-number
          last-number
          pills
        ></b-pagination>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'standardTable',
  props: {
    fields: Array,
    dateOfTable: Array,
    id: String,
  },
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
    };
  },
  computed: {
    rows() {
      return this.dateOfTable.length;
    },
  },
};
</script>

<style lang="scss" scoped>
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
