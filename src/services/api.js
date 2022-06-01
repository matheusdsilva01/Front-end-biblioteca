import axios from 'axios';

const respClient = axios.create({
  baseURL: 'https://biblioteca-devchallenge-production.up.railway.app',
})

export default respClient;