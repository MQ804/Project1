import Vue from 'vue';
import * as api from '@/api';

export const Mutations = Object.freeze({
  USER_LIST: 'USER_LIST',
});

export default {
  namespaced: true,
  state: {
    userList: [],
  },
  mutations: {
    [Mutations.USER_LIST]: (state, data) => {
      state.userList = data;
    },
  },
  actions: {
    async fetchUserList({ commit }) {
      const response = await Vue.axios.get(api.default.user.list);
      commit(Mutations.USER_LIST, response.data);

      return response;
    },
  },
  getters: {
  },
};
