import {query, create, delete_r, update,  scan_host} from '../services/resource';
import {routerRedux} from 'dva/router'
import {notification} from 'antd';

export default {
  namespace: "resource",
  state: {
    list: [],
    total: null,
    loading: false,
    current: null,
    currentPageSize: 10,
    currentItem: {},
    modalVisible: false,
    select_list: [],
    modalType: 'create',
    resourceName: null,
  },
  subscriptions: {
    setup({dispatch, history}) {
      history.listen(location => {
        if (location.pathname === '/resource') {
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
        if (data.status === 0) {
          yield put({
            type: 'querySuccess',
            payload: {
              list: data.item_list,
              total: data.count,
              select_list: data.select_list,
              current: data.current,
              resourceName: payload.name,
              currentPageSize: payload.size,
            }
          });
        } else {
          notification["error"]({message: '失败', description: data.error});
        }
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
            // yield put(routerRedux.push('/resource?' + payload.name))
            yield put(routerRedux.push({pathname: '/resource?' + payload.name, query: {"name": payload.name, "size": payload.size, "page": payload.page}}));
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
          yield put(routerRedux.push({pathname: '/resource?' + payload.name, query: {"name": payload.name, "size": payload.size, "page": payload.page}}));
          // yield call(query, {"name": payload.name, "size": payload.size, "page": payload.page});
          notification["success"]({message: '成功', description: '删除数据成功.',});

        } else {
          notification["error"]({message: '失败', description: data.error});
        }
      } else {
        notification["error"]({message: '失败', description: '删除数据失败.'});
      }
      yield put({type: 'deleteSuccess'});
    },
    * update({payload}, {select, put, call}) {
      if (payload.type === 'update') {
        yield put({type: 'showModal', payload: {currentItem: payload.record}});
      } else {
        payload.data['resource_name'] = payload.name;
        const {data} = yield call(update, payload.data);
        if (data) {
          if (data.status === 0) {
            yield call(query, {"name": payload.name, "size": payload.size, "page": payload.page});
            notification["success"]({message: '成功', description: '更新数据成功.',});
            yield put(routerRedux.push({pathname: '/resource?' + payload.name, query: {"name": payload.name, "size": payload.size, "page": payload.page}}));
            yield put({type: 'updateSuccess'});
          } else {
            notification["error"]({message: '失败', description: data.error});
            return false
          }
        } else {
          notification["error"]({message: '失败', description: '更新数据失败.',});
          return false
        }
      }
    },
    * scan({payload}, {select, put, call}) {
      yield put({type: 'showLoading'});
      const {data} = yield call(scan_host);
      if (data) {
        yield put({type: 'hideLoading'});
        if (data.status === 0) {
          yield put(routerRedux.push('/resource?' + payload.name));
          notification["success"]({message: '成功', description: '成功创建扫描任务.',});
        } else {
          notification["error"]({message: '失败', description: '创建扫描任务失败.',});
        }
      } else {
        notification["error"]({message: '失败', description: '创建扫描任务失败.',});
      }
    }
  },
  reducers: {
    showLoading(state, action) {
      return {...state, ...action, loading: true}
    },
    hideLoading(state, action) {
      return {...state, ...action, loading: false}
    },
    showModal(state, action) {
      return {...state, ...action.payload, modalVisible: true}
    },
    hideModal(state, action) {
      return {...state, ...action.payload, modalVisible: false}
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
