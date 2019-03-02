import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization:
			"Client-ID 420a3198b34816cd271f2413bbfe5fa5acd95f0ff5473f36ddd7f9dba9370446"
	}
});