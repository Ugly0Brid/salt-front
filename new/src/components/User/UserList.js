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
    pageSize: 10,
    onChange: () => {
    },
  };
  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowkey={record => record.id}
        pagination={pagination}
      />
    </div>
  )
};

export default UserList;
