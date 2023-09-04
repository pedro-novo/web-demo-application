import axios from 'axios';

const axiosPrivate = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { axiosPrivate as axios };
