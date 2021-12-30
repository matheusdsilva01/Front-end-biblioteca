import axios from 'axios';

const respClient = axios.create({
  baseURL: 'https://biblioteca-dev.herokuapp.com',
})

export default respClient;