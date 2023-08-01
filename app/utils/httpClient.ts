import axios, {AxiosInstance, AxiosResponse} from 'axios';

interface ResponseResult {
  code: number;
  message?: string;
  data?: any;
}
export let instance: AxiosInstance;

export function initHttpClient() {
  instance = axios.create({
    baseURL: 'http://xxxx',
    timeout: 1000,
    timeoutErrorMessage: '请求超时',
  });
}

export async function postApi(
  url: string,
  params: any,
): Promise<ResponseResult> {
  try {
    const response = await instance.post(url, params);
    return response.data as ResponseResult;
  } catch (e: any) {
    return {code: -1, message: e.message || '服务器错误'};
  }
}

export function addInterceptor(cb: (resp: AxiosResponse) => any) {
  instance.interceptors.response.use(resp => {
    cb(resp);
    return resp;
  });
}
