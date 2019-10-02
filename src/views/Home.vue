<template>
    <div class="container">
        <b-alert :show="isShowInfo" :fade="true" dismissible @dismissed="setShown">If you want to sort the table, click on the respective column header</b-alert>

        <Search v-model="searchQuery" keyValue="name"/>
        <Total :list="filteredData" keyValue="currency"></Total>
        <Table v-if="!noData" :table-data="filteredData"/>

        <b-alert :show="noData" :fade="true" variant="warning">Nothing found</b-alert>
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
			},
            noData() {
				return !this.filteredData.length
            }
		},
		created () {
			this.isShowInfo = !localStorage.getItem('infoShown');
		}
	}
</script>
