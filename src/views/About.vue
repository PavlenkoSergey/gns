<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <router-link to="/">Home</router-link>
                <Alert
                        ref="alert"
                        :variant="massageVariant"
                        :message="massage"
                />
                <table class="table mt-5">
                    <tbody>
                    <tr>
                        <th>Id</th>
                        <td>{{info.id}}</td>
                    </tr>
                    <tr v-for="column in columns" :key="column.id">
                        <th>{{column.text}}</th>
                        <td contenteditable='true'
                            @focus="setChangedValue($event, column.type)"
                            @keydown.enter.prevent="unFocus($event)"
                            @blur="change(info.id, column.id, $event)">{{ column.type === 'number' ?
                            numberWithSpaces(info[column.id]) : info[column.id]}}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
	import NumberMethods from '../mixins/NumberMethods';
	import ChangeFunctionality from '../mixins/ChangeFunctionality';
	import EditableColumns from '../mixins/EditableColumns';
	import Alert from "../components/Alert";

	export default {
		name: 'about',
		mixins: [NumberMethods, ChangeFunctionality, EditableColumns],
		data () {
			return {
				id: '',
			}
		},
		components: {
			Alert
		},
		computed: {
			info () {
				return this.$store.state.MockData.find(item => item.id === this.id)
			}
		},
		created () {
			this.id = this.$route.params['id'];
		}
	}
</script>
