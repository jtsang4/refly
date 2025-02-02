import { getCookie } from './cookie';
import { getServerOrigin } from '@refly/utils/url';
import { getExtensionVersion } from './version';

const TIMEOUT = 40000;
const DEFAULT_HEADER = {
  'Content-Type': 'application/json',
};

export class ApiErr {
  err_no: number;

  err_msg: string;

  origin: any; // 业务原始错误对象

  constructor(err_msg: string, err_no?: number, origin?: any) {
    this.err_no = err_no || -1;
    this.err_msg = err_msg;
    this.origin = origin;
  }
}

export function getDataErr(res: any) {
  const { err_no, message, err_msg } = res;
  if (err_no === 0 || message === 'success') {
    return null;
  }

  let errNo = 0;
  let errMsg = 'unknown';

  if (err_no) {
    // api_external 错误码处理
    errNo = err_no;
    errMsg = err_msg;
  } else if (message === 'error') {
    // password接口错误码处理
    errNo = res?.data?.error_code || errNo;
    errMsg = res?.data?.description || message;
  }
  return new ApiErr(errMsg, errNo);
}

export const abortablePromise = (target: Promise<any>, timeout: number) => {
  const racePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new ApiErr('timeout'));
    }, timeout);
  });
  return Promise.race([target, racePromise]);
};

export async function extRequest<T>(
  url: string,
  opt: any,
  timeout: number = TIMEOUT,
): Promise<[ApiErr | null, T | null, any?]> {
  let handledUrl = url;
  opt.method = (opt.method || 'GET').toUpperCase();
  if (!url.includes('//')) {
    handledUrl = url;
  }
  console.log('url is ', handledUrl);
  // 获取 header
  opt.headers = {
    ...opt.headers,
    'x-refly-ext-version': getExtensionVersion(),
  };

  // 添加鉴权相关的信息
  const cookie = await getCookie();
  if (cookie) {
    opt.headers = {
      ...opt.headers,
      Authorization: `Bearer ${cookie}`, // Include the JWT token in the Authorization header
    };
  }

  if (opt.method === 'GET') {
    handledUrl = queryJoin(handledUrl, opt.body || '');
    delete opt.body;
  }

  // 如果 data 不为 formData 时，才做 JSON stringify
  if (
    ['POST', 'PUT'].includes(opt.method) &&
    typeof opt.body === 'object' &&
    !(opt.body instanceof FormData)
  ) {
    opt.headers = {
      ...DEFAULT_HEADER,
      ...(opt.headers || {}),
    };
    opt.body = JSON.stringify(opt.body);
  }
  console.log('request opt', opt);

  try {
    const BASEURL = handledUrl.startsWith('http') ? '' : getServerOrigin();
    const res = await fetch(`${BASEURL}${handledUrl}`, {
      ...opt,
    });

    const jsonRes = await res.json();
    console.log('request res', jsonRes);
    if (res?.status >= 200 && res?.status < 300) {
      const body = jsonRes.data || jsonRes;
      // const err = getDataErr(body);
      return [null, body];
    } else {
      return [new ApiErr(jsonRes.data || jsonRes), null];
    }
  } catch (err: any) {
    return [new ApiErr(err.message), null];
  }
}

export const queryJoin = (url = '', query: QUERY | string) => {
  const connect = url.includes('?') ? '&' : '?';
  let str = '';
  if (typeof query === 'object') {
    str = queryStringify(query);
  } else {
    str = query;
  }
  return `${url}${str ? connect + str : ''}`;
};

export const queryStringify = (
  query: QUERY,
  doNotUseEmpty = true, // 是否拼接空对象
) => {
  let str = '';
  Object.keys(query).forEach((key) => {
    if (doNotUseEmpty && !query[key]) {
      return;
    }
    str += `${str ? '&' : ''}${key}=${encodeURIComponent(query[key])}`;
  });
  return str;
};

interface QUERY {
  [key: string]: any;
}
