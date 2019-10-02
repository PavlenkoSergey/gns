export default {
	data () {
		return {
			changedValue: '',
			changedType: '',
			massage: '',
			massageVariant: ''
		}
	},
	methods: {
		setChangedValue (event, type) {
			this.changedValue = event.target.innerText;
			this.changedType = type;
		},
		unFocus (event) {
			event.target.blur()
		},
		change (id, property, event) {

			let newValue = event.target.innerText,
					onlySymbols = /^[a-zA-Z ]+$/,
					onlyNumbers = /^\d+$/,
					alert = this.$refs.alert;

			if (this.changedType === 'string' && this.changedValue !== newValue) {
				if (onlySymbols.test(newValue)) {

					this.$store.commit('change', {
						id: id,
						property: property,
						value: newValue
					});

					this.massageVariant = 'success';
					this.massage = `Data changed`;
					alert.showAlert();
				} else {
					event.target.innerText = this.changedValue;

					this.massageVariant = 'warning';
					this.massage = `Field \'${property} \' must contain only symbols`;
					alert.showAlert();
				}
			}

			if (this.changedType === 'number' && this.changedValue !== newValue) {
				if (onlyNumbers.test(newValue.replace(/\s+/g, ''))) {

					this.$store.commit('change', {
						id: id,
						property: property,
						value: parseInt(newValue.replace(/\s+/g, ''))
					});

					this.massageVariant = 'success';
					this.massage = `Data changed`;
					alert.showAlert();
				} else {
					event.target.innerText = this.changedValue;

					this.massageVariant = 'warning';
					this.massage = `Field \'${property} \' must contain only numbers`;
					alert.showAlert();
				}
			}
		},
	}
}