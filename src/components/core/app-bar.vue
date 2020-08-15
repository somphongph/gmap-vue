<template>
	<v-app-bar app hide-on-scroll color="white">
		<!-- <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer" /> -->
		<v-container>
			<v-row>
				<div class="d-flex align-center">
					<router-link to="/">
						<v-toolbar-title class="primary--text headline">
							<span class="font-weight-bold">Place Search</span>
						</v-toolbar-title>
					</router-link>
				</div>

				<v-spacer />
			</v-row>
		</v-container>
	</v-app-bar>
</template>

<script>
// Utilities
import { mapGetters, mapMutations } from 'vuex';

export default {
	name: 'CoreAppBar',

	computed: {
		...mapGetters(['links'])
	},

	methods: {
		...mapMutations(['toggleDrawer']),
		onClick(e, item) {
			e.stopPropagation();

			if (item.to || !item.href) return;

			this.$vuetify.goTo(item.href.endsWith('!') ? 0 : item.href);
		}
	}
};
</script>
