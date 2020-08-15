<template>
	<v-responsive class="mx-auto" max-width="1152">
		<v-container>
			<v-row>
				<v-col md="9">
					<h1>Highlight</h1>
					<v-row class="mb-10">
						<v-col md="6">
							<v-card>
								<router-link
									:to="{
										name: 'place-detail',
										params: { id: 1 }
									}"
								>
									<v-img
										src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
										height="224"
									/>
								</router-link>

								<v-card-title>
									Top western road trips
								</v-card-title>

								<v-card-subtitle>
									1,000 miles of wonder
								</v-card-subtitle>
							</v-card>
						</v-col>
						<v-col md="6">
							<v-row align="center" class="mb-2">
								<v-col class="d-flex" cols="12">
									<router-link
										:to="{
											name: 'place-detail',
											params: { id: 1 }
										}"
									>
										<v-img
											src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
											class="mr-3"
											height="64"
											max-width="96"
										/>
									</router-link>
									<div>
										<div class="subheading">
											เที่ยวเมืองคอง 4 วัน 3 คืน
										</div>

										<div class="caption">
											Date
										</div>
									</div>
								</v-col>
							</v-row>
							<v-row align="center" class="mb-2">
								<v-col class="d-flex" cols="12">
									<router-link
										:to="{
											name: 'place-detail',
											params: { id: 1 }
										}"
									>
										<v-img
											src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
											class="mr-3"
											height="64"
											max-width="96"
										/>
									</router-link>
									<div>
										<div class="subheading">
											ใช้ชีวิตสโลไลท์ สูดอากาศบริษัท
											กับหมู่บ้านที่อากาศดีที่สุด
											ที่คีรีวง
										</div>

										<div class="caption">
											Date
										</div>
									</div>
								</v-col>
							</v-row>
							<v-row align="center" class="mb-2">
								<v-col class="d-flex" cols="12">
									<router-link
										:to="{
											name: 'place-detail',
											params: { id: 1 }
										}"
									>
										<v-img
											src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
											class="mr-3"
											height="64"
											max-width="96"
										/>
									</router-link>
									<div>
										<div class="subheading">
											พักผ่อนกายา ศึกษาวิถีชาวบ้าน
											ที่เชียงคาน
										</div>

										<div class="caption">
											Date
										</div>
									</div>
								</v-col>
							</v-row>
						</v-col>
					</v-row>

					<h1>Reviews</h1>
					<v-row class="mb-10">
						<v-col md="6">
							<v-card>
								<router-link
									:to="{
										name: 'place-detail',
										params: { id: 1 }
									}"
								>
									<v-img
										src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
										height="224"
									/>
								</router-link>

								<v-card-title>
									Top western road trips
								</v-card-title>

								<v-card-subtitle>
									1,000 miles of wonder
								</v-card-subtitle>
							</v-card>
						</v-col>
						<v-col md="6">
							<v-row align="center" class="mb-2">
								<v-col class="d-flex" cols="12">
									<router-link
										:to="{
											name: 'place-detail',
											params: { id: 1 }
										}"
									>
										<v-img
											src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
											class="mr-3"
											height="64"
											max-width="96"
										/>
									</router-link>
									<div>
										<div class="subheading">
											เที่ยวเมืองคอง 4 วัน 3 คืน
										</div>

										<div class="caption">
											Date
										</div>
									</div>
								</v-col>
							</v-row>
							<v-row align="center" class="mb-2">
								<v-col class="d-flex" cols="12">
									<router-link
										:to="{
											name: 'place-detail',
											params: { id: 1 }
										}"
									>
										<v-img
											src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
											class="mr-3"
											height="64"
											max-width="96"
										/>
									</router-link>
									<div>
										<div class="subheading">
											ใช้ชีวิตสโลไลท์ สูดอากาศบริษัท
											กับหมู่บ้านที่อากาศดีที่สุด
											ที่คีรีวง
										</div>

										<div class="caption">
											Date
										</div>
									</div>
								</v-col>
							</v-row>
							<v-row align="center" class="mb-2">
								<v-col class="d-flex" cols="12">
									<router-link
										:to="{
											name: 'place-detail',
											params: { id: 1 }
										}"
									>
										<v-img
											src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
											class="mr-3"
											height="64"
											max-width="96"
										/>
									</router-link>
									<div>
										<div class="subheading">
											พักผ่อนกายา ศึกษาวิถีชาวบ้าน
											ที่เชียงคาน
										</div>

										<div class="caption">
											Date
										</div>
									</div>
								</v-col>
							</v-row>
						</v-col>
					</v-row>
				</v-col>
				<v-col md="3">
					<v-card class="mb-5">
						<v-card-title primary-title>
							Smile with you.
						</v-card-title>
						<v-list color="transparent">
							<v-list-item three-line>
								<v-list-item-content>
									<v-list-item-title>
										Activity
									</v-list-item-title>
									<v-list-item-subtitle>
										<router-link
											:to="{
												name: 'place-list-title'
											}"
										>
											- จุดกางเต้นท์
										</router-link>
									</v-list-item-subtitle>
									<v-list-item-subtitle>
										<router-link
											:to="{
												name: 'place-list-title'
											}"
										>
											- เดินป่า
										</router-link>
									</v-list-item-subtitle>
									<v-list-item-subtitle>
										<router-link
											:to="{
												name: 'place-list-title'
											}"
										>
											- ทะเล
										</router-link>
									</v-list-item-subtitle>
									<v-list-item-subtitle>
										<router-link
											:to="{
												name: 'place-list-title'
											}"
										>
											- น้ำตก
										</router-link>
									</v-list-item-subtitle>
									<v-list-item-subtitle>
										<router-link
											:to="{
												name: 'place-list-title'
											}"
										>
											- จุดชมวิว
										</router-link>
									</v-list-item-subtitle>
									<v-list-item-subtitle>
										<router-link
											:to="{
												name: ''
											}"
										>
											More...
										</router-link>
									</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
							<v-list-item three-line>
								<v-list-item-content>
									<v-list-item-title>
										Destination
									</v-list-item-title>
									<v-list-item-subtitle>
										<router-link
											:to="{
												name: 'place-list-title'
											}"
										>
											- เชียงใหม่
										</router-link>
									</v-list-item-subtitle>
									<v-list-item-subtitle>
										<router-link
											:to="{
												name: 'place-list-title'
											}"
										>
											- สุราษฎรธานี
										</router-link>
									</v-list-item-subtitle>
									<v-list-item-subtitle>
										<router-link
											:to="{
												name: 'place-list-title'
											}"
										>
											- กระบี่
										</router-link>
									</v-list-item-subtitle>
									<v-list-item-subtitle>
										<router-link
											:to="{
												name: 'place-list-title'
											}"
										>
											- เลย
										</router-link>
									</v-list-item-subtitle>
									<v-list-item-subtitle>
										<router-link
											:to="{
												name: 'place-list-title'
											}"
										>
											- พิษณุโลก
										</router-link>
									</v-list-item-subtitle>
									<v-list-item-subtitle>
										<router-link
											:to="{
												name: ''
											}"
										>
											More...
										</router-link>
									</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
						</v-list>
					</v-card>

					<v-card>
						<v-card-title primary-title>
							Q & A
						</v-card-title>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-responsive>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'Home'
};
</script>
