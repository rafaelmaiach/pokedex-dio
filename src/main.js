import Vue from 'vue';

import './styles/main.scss';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#root');
