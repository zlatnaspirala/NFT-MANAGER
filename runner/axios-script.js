
import axios from 'axios';
import 'dotenv/config';

console.log(process.env.NODE_ENV)
const { API_KEY, API_NETWORK, OWNER_ADDRESS } = process.env;
const baseURL = `https://eth-${API_NETWORK}.alchemyapi.io/v2/${API_KEY}/getNFTs/`;

var config = {
  method: 'get',
  url: `${baseURL}?owner=${OWNER_ADDRESS}`
};

axios(config)
  .then(response => console.log(JSON.stringify(response.data, null, 2)))
  .catch(error => console.log(error));
