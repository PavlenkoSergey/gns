<template>
    <div class="row mb-5">
        <div class="col-12 text-right">
            In total: <strong>{{numberWithSpaces(inTotal)}}</strong>
        </div>
    </div>
</template>

<script>

	import NumberMethods from '../mixins/NumberMethods';

	export default {
		name: "Total",
		mixins: [NumberMethods],
		props: {
			list: Array,
			keyValue: String
		},
		computed: {
			inTotal () {
				return this.numberWithSpaces(this.list.reduce((a, b) => a + (b[this.keyValue] || 0), 0))
			},
		}
	}
</script>

<style scoped>

</style>