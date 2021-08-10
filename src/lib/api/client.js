import axios from 'axios';

const client = axios.create();

// 글로벌 설정 참고: https://fkkmemi.github.io/nemv/nemv-053-axios-interceptor/

// //API 주소
//client.defaults.baseURL = 'http://localhost:8080/';
// //헤더 설정
//client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';

client.interceptors.request.use(
  (request) => {
    console.log('Starting Request', request);
    return request;
  },
  (error) => {
    //요청 실패시 뭐 할지
    return Promise.reject(error);
  },
);

//인터셉터 설정
client.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    //요청 실패 시 특정 작업 수행
    console.error('error는: ', error);
    return Promise.reject(error);
  },
);

export default client;
