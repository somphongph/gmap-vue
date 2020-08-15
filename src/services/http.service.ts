import axios from 'axios';

const http = axios.create({
	baseURL: process.env.VUE_APP_BASE_API,
	timeout: 3000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
});

export default http;
