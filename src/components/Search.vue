<template>
    <div class="row mb-5 search-block">
        <div class="col-12">
            <button v-if="value" @click="clearValue" type="button" class="btn btn-link">Clear</button>
            <input v-bind:value="value"
                   v-on:input="$emit('input', $event.target.value)"
                   class="form-control"
                   :placeholder="`Type ${keyValue} here ... `">
        </div>
    </div>
</template>

<script>
	export default {
		name: "Search",
        props: {
	        value: String,
            keyValue: String
        },
      methods: {
	      clearValue () {
		      this.$emit('input', '')
	      }
      }
	}
</script>

<style lang="scss">
    .search-block {
        margin-top: 50px;
        position: relative;
        button {
            position: absolute;
            top: -40px;
            right: 0;
        }
    }
</style>