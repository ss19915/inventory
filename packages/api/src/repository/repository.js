import axios from 'axios';
import { RoutePaths } from '../constants';

const REACT_APP_API_ROOT_PATH = process.env.REACT_APP_API_ROOT_PATH || 'http://localhost:8081';

const API = axios.create({
    baseURL: REACT_APP_API_ROOT_PATH,
});

export const Product = {
    add: (payload) => API.post(RoutePaths.products, payload),
    get: (productId) => API.get(`${RoutePaths.products}/${productId}`),
    getAll: () => API.get(RoutePaths.products),
    remove: (productId) => API.delete(`${RoutePaths.products}/${productId}`),
};