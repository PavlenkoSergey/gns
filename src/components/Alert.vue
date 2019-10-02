<template>
    <div class="container position-fixed fixed-top mt-3" >
        <div class="row">
            <b-alert dismissible
                     :show="dismissCountDown"
                     :fade="true"
                     :variant="variant"
                     @dismissed="dismissCountDown=0"
                     @dismiss-count-down="countDownChanged"
                     class="col-12 "
            >{{message}}
            </b-alert>
        </div>
    </div>
</template>

<script>

	import {BAlert} from 'bootstrap-vue';

	export default {
		name: "Alert",
		components: {
			BAlert
		},
		props: {
			message: String,
			variant: String,
		},
		data () {
			return {
				dismissSecs: 2,
				dismissCountDown: 0
			}
		},
		methods: {
			countDownChanged (dismissCountDown) {
				this.dismissCountDown = dismissCountDown
			},
			showAlert () {
				this.dismissCountDown = this.dismissSecs
			}
		}
	}
</script>

<style scoped>

</style>