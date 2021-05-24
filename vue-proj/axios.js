import axios from 'axios';

axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
