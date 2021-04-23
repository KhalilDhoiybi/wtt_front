// queries.js
import apiEndpoints from './apiEndpoints';

const serializeData = (data) => Object.entries(data)
  .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
  .join('&');

async function getData(...args) {
  // const functionName = 'getData';
  // const [request, params] = args;
  const { queryKey } = args[0];

  const serializedData = serializeData(queryKey[1]);
  const endpoint = queryKey[0];
  const url = `${apiEndpoints[endpoint]}?${serializedData}`;
  const options = {
    // url,
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer',
    // no-referrer, *no-referrer-when-downgrade,
    // origin, origin-when-cross-origin, same-origin,
    // strict-origin, strict-origin-when-cross-origin, unsafe-url
    params: queryKey[0],
  };
  const response = await fetch(url, options);
  const responseJSON = await response.json();
  return responseJSON; // parses JSON response into native JavaScript objects
}

async function postData(...args) {
  // const functionName = 'postData';
  const [request] = args;
  const data = request[1];
  // Default options are marked with *
  const url = apiEndpoints[request[0]];
  const options = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data),
    data, // body data type must match "Content-Type" header
  };
  const response = await fetch(url, options);
  return response.json(); // parses JSON response into native JavaScript objects
}

async function putData(...args) {
  // const functionName = 'putData';
  const [request] = args;
  const data = request[1];
  // console.log(functionName, 'data,', data, '\n\nrequest', request);
  // Default options are marked with *
  const url = apiEndpoints[request[0]];
  const options = {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data),
    data, // body data type must match "Content-Type" header
  };
  const response = await fetch(url, options);
  return response.json(); // parses JSON response into native JavaScript objects
}

export { postData, putData, getData };
