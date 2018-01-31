const columns = (name) => {
  const columns = [];
  if (name === 'frame') {
    columns.push(
      {title: '名称', dataIndex: 'name', key: 'name',},
      {title: '备注', dataIndex: 'remarks', key: 'remarks',},);
  } else if (name === 'datacenter') {
    columns.push(
      {title: '名称', dataIndex: 'name', key: 'name',},
      {title: '地址', dataIndex: 'address', key: 'address',},
      {title: '联系人', dataIndex: 'link_name', key: 'link_name',},);
  } else if (name === 'pmserver') {
    columns.push(
      {title: '名称', dataIndex: 'name', key: 'name',},
      {title: '系统', dataIndex: 'os', key: 'os',},
      {title: '内存', dataIndex: 'memory', key: 'memory',},);
  } else if (name === 'vmserver') {
    columns.push(
      {title: '名称', dataIndex: 'name', key: 'name',},
      {title: '系统', dataIndex: 'os', key: 'os',},
      {title: '内存', dataIndex: 'memory', key: 'memory',},);
  }
  return columns
};

export default columns;
