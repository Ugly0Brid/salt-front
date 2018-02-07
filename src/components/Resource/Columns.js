const columns = (name) => {
  const columns = [];
  if (name === 'datacenter') {
    columns.push(
      {title: '名称', dataIndex: 'name', key: 'name',},
      {title: '类型', dataIndex: 'type', key: 'type',},
      {title: '带宽', dataIndex: 'band_width', key: 'band_width',},
      {title: '地址', dataIndex: 'address', key: 'address',},
      {title: '联系人', dataIndex: 'link_name', key: 'link_name',},
      {title: '联系人电话', dataIndex: 'contact_phone', key: 'contact_phone',},
      {title: '机柜数量', dataIndex: 'cabinet_count', key: 'cabinet_count',},)
  } else if (name === 'cabinet') {
    columns.push(
      {title: '名称', dataIndex: 'name', key: 'name',},
      {title: '机架数量', dataIndex: 'frame_count', key: 'frame_count',},
      {title: '关联机房', dataIndex: 'data_center', key: 'data_center',},)
  } else if (name === 'frame') {
    columns.push(
      {title: '名称', dataIndex: 'name', key: 'name',},
      {title: '服务器数量', dataIndex: 'server_count', key: 'server_count',},
      {title: '关联机柜', dataIndex: 'cabinet', key: 'cabinet',},);
  } else if (name === 'scope') {
    columns.push(
      {title: '名称', dataIndex: 'name', key: 'name',},
      {title: '标签', dataIndex: 'label', key: 'label',},
      {title: '服务数量', dataIndex: 'server_count', key: 'server_count',},);
  } else if (name === 'pmserver') {
    columns.push(
      {title: '名称', dataIndex: 'name', key: 'name',},
      {title: 'IP', dataIndex: 'ip', key: 'ip', width: '6.8%'},
      {title: 'MAC地址', dataIndex: 'mac', key: 'mac', width: '8%'},
      {title: '内存', dataIndex: 'memory', key: 'memory',},
      {title: 'CPU', dataIndex: 'cpu', key: 'cpu',},
      {title: '系统', dataIndex: 'os', key: 'os',},
      {title: 'Minion名称', dataIndex: 'minion_name', key: 'minion_name',},
      {title: 'Minion状态', dataIndex: 'minion_status', key: 'minion_status',},
      {title: '所属机架', dataIndex: 'frame', key: 'frame',},
      {title: '所属应用', dataIndex: 'scope', key: 'scope',});
  } else if (name === 'vmserver') {
    columns.push(
      {title: '名称', dataIndex: 'name', key: 'name',},
      {title: 'IP', dataIndex: 'ip', key: 'ip', width: '6.8%'},
      {title: 'MAC地址', dataIndex: 'mac', key: 'mac', width: '8%'},
      {title: '内存', dataIndex: 'memory', key: 'memory',},
      {title: 'CPU', dataIndex: 'cpu', key: 'cpu',},
      {title: '系统', dataIndex: 'os', key: 'os',},
      {title: 'Minion名称', dataIndex: 'minion_name', key: 'minion_name',},
      {title: 'Minion状态', dataIndex: 'minion_status', key: 'minion_status',},
      {title: '所属机架', dataIndex: 'frame', key: 'frame',},
      {title: '所属应用', dataIndex: 'scope', key: 'scope',});
  }
  columns.push(
    {title: '创建时间', dataIndex: 'create_time', key: 'create_time',},
    {title: '更新时间', dataIndex: 'update_time', key: 'update_time',},);
  return columns
};

export default columns;
