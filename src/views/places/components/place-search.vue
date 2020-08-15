<template>
	<v-responsive class="mx-auto" max-width="1152">
		<v-container>
			<v-row>
				<v-col>
					<v-card class="mb-4">
						<v-card-title>
							<h4>Location</h4>
						</v-card-title>

						<v-form>
							<v-container>
								<v-row>
									<v-col>
										<!-- <ddl-city
											:obj-ddl-value.sync="
												ddlCitySelected
											"
										></ddl-city> -->
									</v-col>
								</v-row>
								<v-row>
									<v-col>
										<v-text-field
											label="Find restaurang in"
											append-outer-icon="mdi-send"
											clearable
											v-model.trim="keyword"
											@click:append-outer="searchPlace"
										></v-text-field>

										<!-- <v-btn
											color="primary"
											@click="searchPlace()"
										>
											<v-icon left>fa fa-search</v-icon>
											Search
										</v-btn> -->
									</v-col>
								</v-row>

								<v-row>
									<v-col>
										<h4 class="mb-2">Maps</h4>
										<gmap-map
											:center="center"
											:zoom="12"
											style="width:100%;  height: 600px;"
										>
											<gmap-marker
												:key="index"
												v-for="(m, index) in markers"
												:position="m.position"
												@click="center = m.position"
											></gmap-marker>
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

@Component({
	components: {
		// VueGoogleMaps
	}
})
export default class PlaceForm extends Vue {
	private center: Location = { lat: 13.82825, lng: 100.5284507 };
	private markers = [];
	private places!: Place[];
	private currentPlace = null;
	private keyword = 'Bang sue';

	private async searchPlace() {
		// Show validate
		// this.$v.dr.$touch();

		// if (this.$v.dr.$error) {
		// 	return;
		// }

		const params = {
			keyword: this.keyword
		};

		try {
			this.markers = [];

			const res = await placeService.list(params);
			this.places = res.data;

			this.places.map((place: Place) => {
				const marker = {
					lat: place.geometry.location.lat,
					lng: place.geometry.location.lng
				};
				this.markers.push({ position: marker });
			});

			// const marker = {
			// 	lat: this.places.geometry.location.lat,
			// 	lng: this.places.geometry.location.lng
			// };
			// this.markers.push({ position: marker });

			// console.log(this.places);
			console.log(this.places);

			// this.notifySaveSuccess(res.data.description);
			// this.$emit('save-result', res.data.code);
		} catch (error) {
			// if (error.response.status !== 403) {
			// 	console.error(error);
			// }
		}
	}
}
</script>
