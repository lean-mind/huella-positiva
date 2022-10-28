import { getCookie } from './cookies';

const GET_HEADERS = {
  'Content-Type': 'application/json',
};

const POST_HEADERS = () => {
  return {
    Authorization: 'Bearer ' + getCookie('accessToken'),
    'X-XSRF-TOKEN': '' + getCookie('XSRF-TOKEN'),
  };
};

const get = async (url: string, authentication = false) => {
  const headers = authentication
    ? { ...POST_HEADERS(), 'Content-Type': 'application/json' }
    : GET_HEADERS;
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers,
  });
  return response;
};

const post = async (
  url: string,
  body: string | FormData,
  contentType = 'application/json',
  authentication = false,
) => {
  const headers = authentication
    ? { ...POST_HEADERS(), 'Content-Type': contentType }
    : { 'Content-Type': contentType };
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers,
    body,
  });
  return response;
};

export const http = {
  get,
  post,
};
