import axios from 'axios';
import { getStore, setStore } from './storage';
import globConfig from '@/assets/globConfig';
import { router } from '../router/index';
import Iview from 'iview';
import Cookies from 'js-cookie';
// 统一请求路径前缀
// let base = '/xboot';
const base = globConfig.api;
// 超时设定
// axios.defaults.timeout = 15000;
axios.interceptors.request.use((config: any) => {
    return config;
}, (err: any) => {
    Iview.Message.error('请求超时');
    return Promise.resolve(err);
});

// http response 拦截器
axios.interceptors.response.use((response: any) => {
    const res: any = response.data;
    switch (res.code) {
        case 200:
            res.success = true;
            return res;
        case 401:
            // 未登录 清除已登录状态
            Cookies.set('userInfo', '');
            setStore('accessToken', '');
            router.push('/login');
            break;
        case 403:
            // 没有权限
            if (res.msg !== null) {
                Iview.Message.error(res.msg);
            } else {
                Iview.Message.error('未知错误');
            }
            break;
        case 500:
            // 错误
            if (res.msg !== null) {
                Iview.Message.error(res.msg);
            } else {
                Iview.Message.error('未知错误');
            }
            break;
        default:
            res.success = false;
            if (res.msg) {
                Iview.Message.error(res.msg);
            }
            return Promise.reject(res);
    }
    return res;
}, (err: any) => {
    // 返回状态码不为200时候的错误处理
    Iview.Message.error(err.toString());
    return Promise.reject(err);
});

export const getRequest = (url: string, params: any) => {
    const accessToken = getStore('accessToken');
    return axios({
        method: 'get',
        url: `${base}${url}`,
        params: params,
        headers: {
            accessToken: accessToken,
        },
    });
};

export const formPostRequest = (url: string, params: any) => {
    const accessToken = getStore('accessToken');
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        transformRequest: [function(data) {
            let ret = '';
            for (const it in data) {
              if (data.hasOwnProperty(it)) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
              }
            }
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'accessToken': accessToken,
        },
    });
};

export const postRequest = (url: string, params: any) => {
    const accessToken = getStore('accessToken');
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        headers: {
            'accessToken': accessToken,
        },
    });
};

export const putRequest = (url: string, params: any) => {
    const accessToken = getStore('accessToken');
    return axios({
        method: 'put',
        url: `${base}${url}`,
        data: params,
        transformRequest: [function(data) {
            let ret = '';
            for (const it in data) {
              if (data.hasOwnProperty(it)) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
              }
            }
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'accessToken': accessToken,
        },
    });
};

export const deleteRequest = (url: string, params: any) => {
    const accessToken = getStore('accessToken');
    return axios({
        method: 'delete',
        url: `${base}${url}`,
        params: params,
        headers: {
            'accessToken': accessToken,
        },
    });
};

export const uploadFileRequest = (url: string, params: any) => {
    const accessToken = getStore('accessToken');
    return axios({
        method: 'post',
        url: `${base}${url}`,
        params: params,
        headers: {
            'accessToken': accessToken,
        },
    });
};

// 用户请求本地json
export const mockLocalhostJson = (url: string) => {
  const baseurl: string = 'http://localhost:9090';
  return axios.get(`${baseurl}${url}`);
};
