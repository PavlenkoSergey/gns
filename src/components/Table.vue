<template>
    <div class="row">
        <div class="col-12">
            <Alert
                    ref="alert"
                    :variant="massageVariant"
                    :message="massage"
            />
            <table class="table table-hover table-responsive-sm text-center">
                <thead>
                <tr>
                    <th>Id</th>
                    <th v-for="column in columns"
                        :key="column.id"
                        @click="sort(column.id)"
                        class="clickable"
                    > {{ column.text}} <span v-if="currentSort.by === column.id" v-html="sortDirection"></span>
                    </th>
                    <th></th>
                </tr>
                </thead>
                <tbody class="table-hover">
                <tr v-for="tableRow in sortData" :key="tableRow.id">
                    <td>{{tableRow.id}}</td>

                    <td v-for="column in columns"
                        :key="column.id"
                            contenteditable='true'
                        @focus="setChangedValue($event, column.type)"
                        @keydown.enter.prevent="unFocus($event)"
                        @blur="change(tableRow.id, column.id, $event)">
                        {{ column.type === 'number' ? numberWithSpaces(tableRow[column.id]) : tableRow[column.id]}}
                    </td>

                    <td>
                        <router-link :to="`/about/${tableRow.id}`">Show details</router-link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
	import NumberMethods from '../mixins/NumberMethods';
	import ChangeFunctionality from '../mixins/ChangeFunctionality';
	import EditableColumns from '../mixins/EditableColumns';
	import Alert from './Alert'

	export default {
		name: "Table",
		mixins: [NumberMethods, ChangeFunctionality, EditableColumns],
		components: {
			Alert
		},
		props: {
			tableData: Array,
		},
		data () {
			return {
				currentSort: {
					by: '',
					asc: true
				},
			}
		},
		methods: {
			sort (by) {
				if (this.currentSort.by === by) {
					this.currentSort.asc = !this.currentSort.asc;
				} else {
					this.currentSort.by = by;
					this.currentSort.asc = true;
				}
			},
		},
		computed: {
			sortDirection () {
				return this.currentSort.asc ? '&uarr;' : '&darr;'
			},
			sortData () {

				let data = this.tableData;

				if (this.currentSort.by && this.currentSort.asc) {
					data.sort((a, b) => {
						if (a[this.currentSort.by] > b[this.currentSort.by]) return 1;
						if (a[this.currentSort.by] < b[this.currentSort.by]) return -1;
						return 0;
					});
				} else if (this.currentSort.by) {
					data.sort((b, a) => {
						if (a[this.currentSort.by] > b[this.currentSort.by]) return 1;
						if (a[this.currentSort.by] < b[this.currentSort.by]) return -1;
						return 0;
					});
				}

				return data;
			}
		}
	}
</script>

<style lang="scss">
    .clickable {
        position: relative;
        cursor: pointer;


    }

    td[contenteditable='true'] {
        position: relative;

        &:hover:not(:focus):after {
            position: absolute;
            right: 5px;
            top: 50%;
            transform: translateY(-50%);
            display: block;
            content: '';
            width: 15px;
            height: 15px;
            z-index: 2;
            background-image: url("../assets/edit.svg");
        }
    }
</style>