import { getRequest,
  formPostRequest,
  postRequest,
  putRequest,
  deleteRequest,
  uploadFileRequest,
  mockLocalhostJson } from '@/libs/axios';



// // 登录
// export const login = (params: object) => {
//   return postRequest('/login', params);
// };
// 登录
export const login = (params: object) => {
  return mockLocalhostJson('/login.json');
};
