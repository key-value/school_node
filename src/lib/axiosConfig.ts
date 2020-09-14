// axiosSetting.js
// request拦截器
import axios from 'axios';
import vue from 'vue';
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error); // for debug
    Promise.reject(error);
  }
);
// respone拦截器
axios.interceptors.response.use(
  (response) => {
    const res = response.data;
    console.log('after', response);
    // if (response.status === 401 || res.status === 40101) {
    //   MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
    //     confirmButtonText: '重新登录',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   }).then(() => {
    //     store.dispatch('LogOut').then(() => {
    //       location.reload() // 为了重新实例化vue-router对象 避免bug
    //     })
    //   })
    //   return Promise.reject('error')
    // }
    // if (res.status === 40301) {
    //   Message({
    //     message: '当前用户无相关操作权限！',
    //     type: 'error',
    //     duration: 5 * 1000
    //   })
    //   return Promise.reject('error')
    // }
    if (response.status !== 200 && res.status !== 200) {
      console.log(response.data, `after`);
      // notification.error({
      //     message: res.status,
      //     description: res.message,
      // })
    }
    return response;
  },
  (error) => {
    if (error === undefined || error.code === 'ECONNABORTED') {
      //   message.warning('服务请求超时');
      return Promise.reject(error);
    }
    const { response } = error;
    console.log('err', response); // for debug
    vue.prototype.$message.error(response.data.msg);
    const {
      response: {
        status,
        statusText,
        data: { msg = '服务器发生错误' },
      },
    } = error;

    if (status === 400) {
      // message.warning('账户或密码错误！')
      //   dispatch(routerRedux.push('/user/login'));
    }
    const info = response.data;
    if (status === 401 || info.status === 40101) {
      // MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
      //     confirmButtonText: '重新登录',
      //     cancelButtonText: '取消',
      //     type: 'warning',
      // }).then(() => {
      //     store.dispatch('LogOut').then(() => {
      //         location.reload() // 为了重新实例化vue-router对象 避免bug
      //     })
      // })
    }
    if (status === 403) {
      //   dispatch(routerRedux.push('/exception/403'));
      // Notification.warning({
      //     title: '禁止',
      //     message: info.message,
      //     type: 'error',
      //     duration: 2 * 1000,
      // })
    }

    if (response.status === 504) {
      //   dispatch(routerRedux.push('/exception/500'));
      // Message({
      //     message: '后端服务异常，请联系管理员！',
      //     type: 'error',
      //     duration: 5 * 1000,
      // })
    }
    // message.error(`${status}:${text}`);
    // throw error
    // return error
    // return Promise.reject(error);
    return Promise.resolve({ data: { ...response.data } });
  }
);
