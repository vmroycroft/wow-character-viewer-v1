import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/styles/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faLevelUpAlt,
	faCertificate,
	faShieldAlt,
	faPlus,
	faSave,
	faUser,
	faTshirt,
	faStarHalfAlt,
	faRunning,
	faDumbbell,
	faBrain,
	faBolt,
	faExclamationTriangle,
	faRoute,
	faGraduationCap,
	faSkullCrossbones,
	faRandom,
	faBan,
	faMedkit,
	faStopwatch,
	faSyncAlt,
	faBoxOpen
} from '@fortawesome/free-solid-svg-icons';
import { faMinusSquare, faPlusSquare, faWindowClose } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
	faLevelUpAlt,
	faCertificate,
	faShieldAlt,
	faPlus,
	faSave,
	faUser,
	faTshirt,
	faStarHalfAlt,
	faMinusSquare,
	faPlusSquare,
	faWindowClose,
	faRunning,
	faDumbbell,
	faBrain,
	faBolt,
	faExclamationTriangle,
	faRoute,
	faGraduationCap,
	faSkullCrossbones,
	faRandom,
	faBan,
	faMedkit,
	faStopwatch,
	faSyncAlt,
	faBoxOpen
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
