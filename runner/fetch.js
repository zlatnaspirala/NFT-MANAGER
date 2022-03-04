
import fetch from 'node-fetch';

const { API_KEY, API_NETWORK, OWNER_ADDRESS } = process.env;

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const baseURL = `https://eth-${API_NETWORK}.alchemyapi.io/v2/${API_KEY}/getNFTs/`;
const fetchURL = `${baseURL}?owner=${OWNER_ADDRESS}`;

fetch(fetchURL, requestOptions)
  .then((response) => { 
    console.log("Test: ", response)
    return response.json();
  })
  .then((response) => {
    console.log("Test: ", response)
    JSON.stringify(response, null, 2)}
    ).then(result => console.log(result))
  .catch(error => console.log('error', error));
