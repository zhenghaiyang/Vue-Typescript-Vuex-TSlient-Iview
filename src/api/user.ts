import { getRequest,
  formPostRequest,
  postRequest,
  putRequest,
  deleteRequest,
  uploadFileRequest,
  mockLocalhostJson } from '@/libs/axios';




// 获取用户列表数据
export const getUserTableList = (params: object) => {
  return mockLocalhostJson('/user/userTable.json');
};

// 删除
export const delUser = (params: Array<object>) => {
  return mockLocalhostJson('/user/userTable.json');
};
