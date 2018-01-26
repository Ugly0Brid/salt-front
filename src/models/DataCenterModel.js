import {Icon, Divider} from 'antd';

export default {
  namespace: "dataCenter",
  state: {
    count: 0,
    list: [
      {
        id: 1,
        name: '张三',
        age: 23,
        address: '成都',
      },
      {
        id: 2,
        name: '李四',
        age: 24,
        address: '杭州',
      },
      {
        id: 3,
        name: '王五',
        age: 25,
        address: '上海',
      },
      {
        id: 4,
        name: '张逢举',
        age: 25,
        address: '东莞',
      },
      {
        id: 5,
        name: '张逢举1',
        age: 28,
        address: '深圳',
      },
    ],
    columns: [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <div><a href="">{text}</a></div>,
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <div>
        <span>
          <a href="">Action 一 {record.name}</a>
          <Divider type="vertical"/>
          <a href="">Delete</a>
          <Divider type="vertical"/>
          <a href="" className="ant-dropdown-link">
            More actions <Icon type="down"/>
          </a>
        </span>
        </div>
      ),
    }]
  },
  // subscriptions: {}
  // ,
  effect: {
    * query() {
    },
    * create() {
    },
    * 'delete'() {
    },
    * update() {
    },
  }
  ,
  reducers: {
    querySuccess(state) {
      const mock = {
        total: 3,
        current: 1,
        loading: false,
        list: [
          {
            id: 1,
            name: '张三',
            age: 23,
            address: '成都',
          },
          {
            id: 2,
            name: '李四',
            age: 24,
            address: '杭州',
          },
          {
            id: 3,
            name: '王五',
            age: 25,
            address: '上海',
          },
        ],

      };
      return {...state, ...mock, loading: false};
    },
    createSuccess() {
    },
    deleteSuccess() {
    },
    updateSuccess() {
    },
  }
};

