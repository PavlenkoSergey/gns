<template>
    <div class="container">
        <b-alert v-if="isShowInfo" :show="isShowInfo" :fade="true" dismissible @dismissed="setShown">If you want to sort the table, click
            on the respective
            column header
        </b-alert>
        <Search v-model="searchQuery" keyValue="name"/>
        <Total :list="filteredData" keyValue="currency"></Total>
        <Table :table-data="filteredData"/>
    </div>
</template>

<script>
	import Table from '../components/Table';
	import Search from "../components/Search";
	import Total from "../components/Total";
	import {BAlert} from 'bootstrap-vue';

	export default {
		name: 'home',
		components: {
			Table,
			Search,
			Total,
			BAlert
		},
		data () {
			return {
				searchQuery: '',
				// MockData,
				isShowInfo: true
			}
		},
		methods: {
			setShown () {
				localStorage.setItem('infoShown', 'true')
			},
		},
		computed: {
			filteredData () {
				return this.$store.getters.filterData(this.searchQuery)
			}
		},
		created () {
			this.isShowInfo = !localStorage.getItem('infoShown');
		}
	}
</script>
