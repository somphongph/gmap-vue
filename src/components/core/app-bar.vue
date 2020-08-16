<template>
	<v-app-bar app hide-on-scroll color="white">
		<!-- <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer" /> -->
		<v-container>
			<v-row>
				<div class="d-flex align-center mr-10">
					<router-link to="/">
						<v-toolbar-title class="primary--text headline">
							<span class="font-weight-bold">Gmap</span>
						</v-toolbar-title>
					</router-link>
				</div>

				<v-btn class="hidden-sm-and-down" text>
					<router-link :to="{ name: 'place-search' }">
						Place
					</router-link>
				</v-btn>

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
