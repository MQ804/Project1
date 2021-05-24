import Vue from 'vue';
import axios from 'axios';
import vueAxios from 'vue-axios';

Vue.use(vueAxios, axios);
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export default { axios };
