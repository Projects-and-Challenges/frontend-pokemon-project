import axios from 'axios';

const API = axios.create({
	baseURL: 'http://localhost:8080',
});

API.defaults.headers['Access-Control-Allow-Origin'] = '*';
API.defaults.headers['Access-Control-Allow-Credentials'] = true;
API.defaults.headers['Access-Control-Allow-Headers'] = 'content-type';
API.defaults.headers['Access-Control-Allow-Methods'] = 'PUT, POST, GET, DELETE, PATCH, OPTIONS';

export default API;