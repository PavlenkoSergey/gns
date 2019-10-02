import Vue from 'vue'
import Vuex from 'vuex'

import MockData from '../public/test';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		MockData: []
	},
	mutations: {
		init (state) {
			state.MockData = MockData;
		},
		change (state, payload) {
			state.MockData.find(item => { if (item.id === payload.id) item[payload.property] = payload.value;});
		}
	},
	getters: {
		filterData: state => query => {
			return state.MockData.filter((item) => {
				if (!query) return item;
				if (item.name.toLowerCase().includes(query.toLowerCase())) return item;
			});
		}
	},
	actions: {}
})
