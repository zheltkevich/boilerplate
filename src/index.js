import _ from 'lodash';

import { createApp } from 'vue';
import App from '@/vue/App.vue';
import router from '@/vue/router/index.js';
import store from '@/vue/store/index.js';

import '@/css/main.css';
import '@/scss/main.scss';
import '@/js/main.js';

createApp(App).use(store).use(router).mount('#app');
