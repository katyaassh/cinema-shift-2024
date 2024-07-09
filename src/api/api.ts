import axios from 'axios';
import { baseUrl } from '../constants/baseUrl';

export const instance = axios.create({ baseURL: baseUrl });
