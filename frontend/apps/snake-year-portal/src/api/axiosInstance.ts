import axios from 'axios';

export const customInstance = axios.create({
  baseURL: 'https://petstore.swagger.io/v2',
  headers: {
    'Content-Type': 'application/json',
  },
});
