import http from '@/services/http.service';
import Place from '../models/place';

const serviceApi = '/v1/places';
const service = {
	async list(params: unknown) {
		return await http.get(`${serviceApi}`, { params });
	},

	async show(id: string) {
		return await http.get(`${serviceApi}/${id}`);
	},

	async create(place: Place) {
		return await http.post(`${serviceApi}`, place);
	},

	async update(id: string, place: Place) {
		return await http.put(`${serviceApi}/${id}`, place);
	}
};

export default service;
