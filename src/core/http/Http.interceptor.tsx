import axios from 'axios';
import { toast } from 'react-toastify';

const TIMEOUT_ERROR_MESSAGE = 'timeoutErrorMessage';

axios.defaults.timeout = 20000;
axios.defaults.timeoutErrorMessage = TIMEOUT_ERROR_MESSAGE;

let instance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use(
	async (config) => {
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

instance.interceptors.response.use(
	async (response) => {
		return response;
	},
	(error) => {
		if (error.message === TIMEOUT_ERROR_MESSAGE || error.code === 'ECONNABORTED') {
			toast.error('Tempo de requisição limite excedido!', {
				toastId: TIMEOUT_ERROR_MESSAGE,
			});
		} else if (error) {
			toast.error('Erro Interno. Por favor, contate o administrador.', {
				toastId: TIMEOUT_ERROR_MESSAGE,
			});
		}

		return Promise.reject(error);
	}
);

export const http = instance;
