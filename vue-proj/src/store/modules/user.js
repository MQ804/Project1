import Vue from 'vue';
import * as api from '../../api';

export const Mutations = Object.freeze({
  USER_LIST: 'USER_LIST',
});

export default {
  namespaced: true,
  state: {
    userList: [],
  },
  getters: {
  },
  actions: {
    async fetchUserList({ commit }) {
      const response = await Vue.axios.get(api.default.user.list);
      commit(Mutations.USER_LIST, response.data.data);
      return response;
    },
  },
  mutations: {
    [Mutations.USER_LIST]: (state, data) => {
      // eslint-disable-next-line no-param-reassign
      state.userList = data;
    },
  },
};
