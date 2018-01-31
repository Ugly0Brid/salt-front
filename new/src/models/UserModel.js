import {query, create, delete_r, update} from '../services/users';
import {routerRedux} from 'dva/router'
import {notification} from 'antd';

export default {
  namespace: "user",
  state: {
    list: [],
    total: null,
    loading: false,
    current: null,
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
    resourceName: null,
  },
  subscriptions: {
    setup({dispatch, history}) {
      history.listen(location => {
        if (location.pathname === '/users') {
          dispatch({
            type: 'query',
            payload: {"name": location.search.split("?")[1], "page": 1, "size": 10}
          })
        }
      })
    }
  },
  effects: {
    * query({payload}, {select, call, put}) {
      yield put({type: 'showLoading'});
      const {data} = yield call(query, payload);
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.list,
            total: data.total,
            current: data.current,
            resourceName: payload.name
          }
        });
      } else {
        notification["error"]({message: '失败', description: data.error});
      }
    },
    * create({payload}, {select, call, put}) {
      if (payload.type === 'show') {
        yield put({type: 'showModal', payload: {currentItem: {}}})
      } else if (payload.type === 'hide') {
        yield put({type: 'hideModal', payload: {currentItem: {}}})
      } else {
        payload.data['resource_name'] = payload.name;
        const {data} = yield call(create, payload.data);
        if (data) {
          if (data.status === 0) {
            yield put({type: 'createSuccess'});
            notification["success"]({message: '成功', description: '创建数据成功.'});
            yield put(routerRedux.push('/users?' + payload.name))
          } else {
            notification["error"]({message: '失败', description: data.error});
            return false
          }
        } else {
          notification["error"]({message: '失败', description: '创建数据失败.'});
          return false
        }
      }
    },
    * 'delete'({payload}, {select, call, put}) {
      yield put({type: 'showLoading'});
      const {data} = yield call(delete_r, payload);
      if (data) {
        if (data.status === 0) {
          yield put(routerRedux.push('/users?' + payload.name));
          notification["success"]({message: '成功', description: '删除数据成功.',});
          yield put({type: 'deleteSuccess'});
        } else {
          notification["success"]({message: '成功', description: data.error});
          return false
        }
      } else {
        notification["success"]({message: '成功', description: '删除数据失败.'});
        return false
      }
    },
    * update({payload}, {select, put, call}) {
      if (payload.type === 'update') {
        yield put({type: 'showModal', payload: {currentItem: payload.record}});
      } else {
        payload.data['resource_name'] = payload.name;
        const {data} = yield call(update, payload.data);
        if (data) {
          if (data.status === 0) {
            yield put({type: 'updateSuccess'});
            notification["success"]({message: '成功', description: '更新数据成功.',});
            yield put(routerRedux.push('/users?' + payload.name));
          } else {
            notification["error"]({message: '失败', description: data.error});
            return false
          }
        } else {
          notification["error"]({message: '失败', description: '更新数据失败.',});
          return false
        }
      }
    }
  },
  reducers: {
    showLoading(state, action) {
      return {...state, ...action, loading: true}
    },
    showModal(state, action) {
      return {...state, ...action.payload, modalVisible: true}
    },
    hideModal(state, action) {
      return {...state, ...action, modalVisible: false}
    },
    querySuccess(state, action) {
      return {...state, ...action.payload, loading: false}
    },
    createSuccess(state, action) {
      return {...state, ...action, modalVisible: false}
    },
    deleteSuccess(state, action) {
      return {...state, ...action, loading: false}
    },
    updateSuccess(state, action) {
      return {...state, ...action, modalVisible: false}
    }
  }
}
