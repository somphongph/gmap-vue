<template>
	<v-app>
		<core-app-bar />

		<!-- <core-drawer /> -->

		<core-view />

		<core-footer />
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
// import CoreAppBar from '@/components/core/app-bar.vue';

export default Vue.extend({
	name: 'App',

	components: {
		CoreAppBar: () => import('@/components/core/app-bar.vue'),
		// CoreCta: () => import('@/components/core/cta.vue'),
		// CoreDrawer: () => import('@/components/core/drawer.vue'),
		CoreFooter: () => import('@/components/core/footer.vue'),
		CoreView: () => import('@/components/core/view.vue')
	},

	data: () => ({
		//
	})
});
</script>

<style lang="scss">
h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: 'Prompt', 'Arial', 'Tahoma', 'Helvetica', sans-serif;
	font-weight: 400;
}

a {
	text-decoration: none;
}

.v-btn {
	text-transform: capitalize !important;
}

.pre-formatted {
	white-space: pre-wrap;
}
</style>
