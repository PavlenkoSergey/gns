<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
	export default {
		name: 'app',
		created () {
			this.$store.commit('init');
		}
	}
</script>

<style lang="scss">

    @import "~bootstrap";
    @import '~bootstrap-vue/src/index.scss';

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        margin-top: 100px;
    }

</style>
