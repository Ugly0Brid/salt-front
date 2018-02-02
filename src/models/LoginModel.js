import {login} from '../services/resource';
import {routerRedux} from 'dva/router'
import {notification} from 'antd';

export default {
  namespace: "login",
  state: {
    loading: false,
  },
  effects: {
    * loginAuth({payload}, {put, call}) {
      yield put({type: 'showLoading'});
      const {data} = yield call(login, payload);
      console.log(data);
      if (data) {
        if (data.status === 0) {
          yield put(routerRedux.push({pathname: '/index'}));
          yield put({type: 'hideLoading'});
        } else {
          yield put(routerRedux.push({pathname: '/'}));
          notification["error"]({message: '失败', description: data.error});
          yield put({type: 'hideLoading'});
        }
      } else {
        yield put(routerRedux.push({pathname: '/'}));
        yield put({type: 'hideLoading'});
        notification["error"]({message: '失败', description: data.error});
      }
    },
  },
  reducers: {
    showLoading(state, action) {
      return {...state, ...action, loading: true}
    },
    hideLoading(state, action) {
      return {...state, ...action, loading: false}
    },
  }
}
