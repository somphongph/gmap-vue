<template>
	<div>
		<place-search></place-search>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import PlaceSearch from '@/views/places/components/place-search.vue';

@Component({
	components: {
		PlaceSearch
	}
})
export default class Home extends Vue {}
</script>
