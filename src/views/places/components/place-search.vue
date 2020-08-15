<template>
	<v-responsive class="mx-auto" max-width="1152">
		<v-container>
			<v-row>
				<v-col>
					<v-card class="mb-4">
						<v-card-title>
							<h4>Find Restaurang</h4>
						</v-card-title>

						<v-form>
							<v-container>
								<v-row>
									<v-col cols="12" md="4">
										<v-text-field
											label="Find restaurang in"
											append-outer-icon="mdi-magnify"
											v-model.trim="keyword"
											@click:append-outer="searchPlace"
											width="50px"
										></v-text-field>
									</v-col>
								</v-row>

								<v-row>
									<v-col>
										<gmap-map
											:center="center"
											:zoom="12"
											style="width:100%;  height: 600px;"
										>
											<gmap-marker
												:key="index"
												v-for="(m, index) in markers"
												:position="m.position"
												:label="m.markerLabel"
												:clickable="true"
												:draggable="true"
												:text="keyword"
												@click="openWindow(m.position)"
											></gmap-marker>
											<gmap-info-window
												@closeclick="windowOpen = false"
												:opened="windowOpen"
												:position="infowindow"
											>
												asdf
											</gmap-info-window>
										</gmap-map>
									</v-col>
								</v-row>
							</v-container>
						</v-form>
					</v-card>
				</v-col>
			</v-row>
			<v-row>
				<v-col md="8"> </v-col>
				<v-col md="4"> </v-col>
			</v-row>
			<v-row>
				<v-col md="8"> </v-col>
				<v-col md="4"> </v-col>
			</v-row>
		</v-container>
	</v-responsive>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import placeService from '../services/place.service';
import Place from '../models/place';
import Location from '../models/location';
import Marker from '../models/marker';
import MarkerLabel from '../models/marker-label';

@Component({
	components: {
		// VueGoogleMaps
	}
})
export default class PlaceForm extends Vue {
	private center: Location = { lat: 13.82825, lng: 100.5284507 };
	private markers: Marker[] = [];
	private places!: Place[];
	private keyword = 'Bang sue';
	private windowOpen = false;
	private infowindow = this.center;

	private openWindow(position: Location) {
		this.infowindow = position;
		this.windowOpen = true;
	}

	private async searchPlace() {
		const params = {
			keyword: this.keyword
		};

		try {
			this.markers = [];

			const res = await placeService.list(params);
			if (res.status === 200) {
				this.places = res.data;
				this.places.map((place: Place) => {
					const position: Location = {
						lat: place.geometry.location.lat,
						lng: place.geometry.location.lng
					};

					const markerLabel: MarkerLabel = {
						color: 'blue',
						fontWeight: 'bold',
						text: place.name
					};

					const marker: Marker = {
						position,
						markerLabel
					};

					this.markers.push(marker);
					this.center = position;
				});
			} else {
				console.error(res.data.description);
			}
		} catch (error) {
			console.error(error);
		}
	}
}
</script>
