import * as VueGoogleMaps from 'vue2-google-maps';

export default {
	install(Vue: any) {
		Vue.use(VueGoogleMaps, {
			load: {
				key: process.env.VUE_APP_GOOGLE_MAP_API_KEY,
				libraries: 'places' // necessary for places input
			}
		});
	}
};
