import {login, logout} from '../services/resource';
import {routerRedux} from 'dva/router'
import {notification} from 'antd';

export default {
  namespace: "login",
  state: {
    loading: false,
    username: null,
  },
  effects: {
    * loginAuth({payload}, {put, call}) {
      yield put({type: 'showLoading'});
      const {data} = yield call(login, payload);
      if (data) {
        if (data.status === 0) {
          sessionStorage.setItem("name", data.username);
          yield put({
            type: 'hideLoading', payload: {
              username: data.username
            }
          });
          yield put(routerRedux.push({pathname: '/index'}));
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
    * logoutAuth({payload}, {put, call}) {
      sessionStorage.clear();
      const {data} = yield call(logout, payload);
      if (data) {
        yield put(routerRedux.push({pathname: '/'}));
      } else {
        yield put(routerRedux.push({pathname: '/'}));
      }
    }
  },
  reducers: {
    showLoading(state, action) {
      return {...state, ...action, loading: true}
    },
    hideLoading(state, action) {
      return {...state, ...action.payload, loading: false}
    },
  }
}
