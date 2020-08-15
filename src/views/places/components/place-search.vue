<template>
	<v-responsive class="mx-auto" max-width="1152">
		<v-container>
			<v-row>
				<v-col>
					<div>
						<h5>เชียงใหม่ . เมืองคอง . Stay</h5>
						<h1>ทดสอบ โฮมสเตย์</h1>
						<h4>฿฿ . HomeStay</h4>
					</div>
				</v-col>
			</v-row>
			<v-row>
				<v-col md="8">
					<v-row>
						<v-col class="pb-1">
							<v-img
								src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
							></v-img>
						</v-col>
					</v-row>
					<v-row class="px-2">
						<v-col cols="4" class="pa-1">
							<v-img
								src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
							></v-img>
						</v-col>
						<v-col cols="4" class="pa-1">
							<v-img
								src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
							></v-img>
						</v-col>
						<v-col cols="4" class="pa-1">
							<v-img
								src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
							></v-img>
						</v-col>
					</v-row>

					<v-divider class="mt-3 mb-5"></v-divider>

					<div>
						<div class="text--primary">
							HomeStay เมืองคอง สัมผัสบรรยากาศสบายๆ <br />
							แบบวิถีชนบท มีกิจกรรม ดำนา ชมหมอก ดูน้ำตก
						</div>
					</div>
					<v-divider class="mt-3 mb-5"></v-divider>
				</v-col>
				<v-col md="4">
					<v-card class="mb-5" outlined>
						<v-card-title>
							<h4>Contact</h4>
						</v-card-title>
						<v-card-text>
							Ratchadapisek Rd., Huay Khwang, Bangkok, Thailand.
							<br />
							Website: tripgator.com <br />
							Facebook: facebook.com/tripgatordotcom <br />
							Instargram: instagram.com/tripgatordotcom <br />
							Line: @tripgatordotcom
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
			<v-row>
				<v-col md="8">
					<v-card class="mb-5" outlined>
						<v-card-title primary-title>
							<h4>Maps</h4>
						</v-card-title>

						<v-card-text> </v-card-text>
					</v-card>
					<v-card class="mb-5" outlined>
						<v-card-title primary-title>
							<h4>Reviews</h4>
						</v-card-title>

						<v-card-text> </v-card-text>
					</v-card>
					<v-card class="mb-5" outlined>
						<v-card-title primary-title>
							<h4>Q & A</h4>
						</v-card-title>

						<v-card-text> </v-card-text>
					</v-card>
				</v-col>
				<v-col md="4">
					<v-card class="mb-5" outlined>
						<v-card-title primary-title>
							<h4>What is Nearby?</h4>
						</v-card-title>
						<v-card-title primary-title>
							<h5>Travel</h5>
						</v-card-title>
						<v-card-text> </v-card-text>
						<v-card-title primary-title>
							<h5>Food & Drink</h5>
						</v-card-title>
						<v-card-text> </v-card-text>
						<v-card-title primary-title>
							<h5>Stay</h5>
						</v-card-title>
						<v-card-text> </v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-responsive>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component({
	components: {}
})
export default class PlaceForm extends Vue {}
</script>
