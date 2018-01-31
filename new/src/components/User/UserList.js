import React from 'react';
import {Table, Popconfirm} from 'antd';
import Columns from './Columns';

const UserList = ({total, current, loading, dispatch, dataSource, resourceName}) => {
  const columns = Columns(resourceName);
  columns.push({
    title: '操作',
    key: 'operation',
    render: (text, record) => (
      <p>
        <a onClick={() => {
          dispatch({type: 'user/update', payload: {"type": "update", "record": record}})
        }}>编辑</a>
        &nbsp;
        <Popconfirm title="确定要删除吗？" onConfirm={() => {
          dispatch({type: 'user/delete', payload: {"id": record.id, "name": resourceName}})
        }}>
          <a>删除</a>
        </Popconfirm>
      </p>
    ),
  });
  const pagination = {
    total,
    current,
    showTotal: () => `总共 ${total} 条`,
    showQuickJumper: true,
    showSizeChanger: true,
    onChange: (page, pageSize) => {
      dispatch({type: 'user/query', payload: {"name": resourceName, "page": page, "size": pageSize}})
    },
    onShowSizeChange: (current, size) => {
      dispatch({type: 'user/query', payload: {"name": resourceName, "page": current, "size": size}})
    }
  };
  return (
    <div>
      <Table size="middle" columns={columns} dataSource={dataSource} loading={loading} rowkey={record => record.id} pagination={pagination}/>
    </div>
  )
};

export default UserList;
