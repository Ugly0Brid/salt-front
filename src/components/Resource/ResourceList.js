import React from 'react';
import {Table, Popconfirm} from 'antd';
import Columns from './Columns';

const ResourceList = ({total, current, loading, currentPageSize, dispatch, dataSource, resourceName}) => {
  const columns = Columns(resourceName);
  columns.push({
    title: '操作',
    key: 'operation',
    render: (text, record) => (
      <p>
        <a onClick={() => {
          dispatch({type: 'resource/update', payload: {"type": "update", "record": record, "size": currentPageSize, "page": current}})
        }}>编辑</a>
        &nbsp;
        <Popconfirm title="确定要删除吗？" onConfirm={() => {
          dispatch({type: 'resource/delete', payload: {"id": record.id, "name": resourceName, "size": currentPageSize, "page": current}})
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
      currentPageSize = pageSize;
      current = page;
      dispatch({type: 'resource/query', payload: {"name": resourceName, "page": page, "size": pageSize}})
    },
    onShowSizeChange: (page, size) => {
      current = page;
      currentPageSize = size;
      dispatch({type: 'resource/query', payload: {"name": resourceName, "page": page, "size": size}})
    }
  };
  return (
    <div>
      <Table size="middle" columns={columns} dataSource={dataSource} loading={loading} rowkey={record => record.id} pagination={pagination}/>
    </div>
  )
};

export default ResourceList;
