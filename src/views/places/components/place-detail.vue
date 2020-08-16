<template>
	<div>
		<v-row>
			<v-col>
				<h2>{{ place.name }}</h2>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<div class="pre-formatted">
					<strong>Address:</strong>
					{{ place.address }}
				</div>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<div class="pre-formatted">
					<strong>Location:</strong>
					{{ lat }}, {{ lng }}
				</div>
			</v-col>
		</v-row>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import placeService from '../services/place.service';
import Place from '../models/place';

@Component({})
export default class PlaceDetail extends Vue {
	@Prop() private placeIdProp!: string;

	private place: Place = Object.assign({});

	private async showPlace(id: string) {
		try {
			const res = await placeService.show(id);
			if (res.status === 200) {
				this.place = res.data;
			} else {
				console.error(res.data.description);
			}
		} catch (error) {
			console.error(error);
		}
	}

	@Watch('placeIdProp')
	private placeIdPropValueChange(value: string) {
		this.showPlace(value);
	}

	get lat() {
		let lat = 0;
		if (typeof this.place.geometry !== 'undefined') {
			lat = this.place.geometry.location.lat;
		}

		return lat;
	}
	get lng() {
		let lng = 0;
		if (typeof this.place.geometry !== 'undefined') {
			lng = this.place.geometry.location.lng;
		}

		return lng;
	}
}
</script>
