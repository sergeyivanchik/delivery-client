import axios from 'axios';

import { REST_API_URL } from './rest-api.constants';

export const restApi = axios.create({
  baseURL: REST_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
