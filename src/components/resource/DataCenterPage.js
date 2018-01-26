import React from 'react';
import {connect} from 'dva';
// import PropTypes from 'prop-types'
import {Table} from 'antd';
// import {Table} from 'antd'
// import dataCenter from '../../models/DataCenterModel';

// class DataCenterPage extends React.Component {
//
//   componentDidMount = () => {
//
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       load: true,
//       list: props.dataCenter,
//       columns: [{
//         title: 'Name',
//         dataIndex: 'name',
//         key: 'name',
//         render: text => <div><a href="">{text}</a></div>,
//       }, {
//         title: 'Age',
//         dataIndex: 'age',
//         key: 'age',
//       }, {
//         title: 'Address',
//         dataIndex: 'address',
//         key: 'address',
//       }, {
//         title: 'Action',
//         key: 'action',
//         render: (text, record) => (
//           <div>
//       <span>
//         <a href="">Action 一 {record.name}</a>
//         <Divider type="vertical"/>
//         <a href="">Delete</a>
//         <Divider type="vertical"/>
//         <a href="" className="ant-dropdown-link">
//           More actions <Icon type="down"/>
//         </a>
//       </span>
//           </div>
//         ),
//       }]
//     };
//   }
//
//
//   render() {
//     let columns = this.state.columns;
//     let list = this.state.list;
//     return (
//       <div>
//         <Table columns={columns} dataSource={list}/>
//       </div>
//     )
//   }
// }

//
const DataCenterPage = ({dataCenter, dispatch}) => {
  const {list, columns} = dataCenter;
  return (
    <div>
      <Table columns={columns} dataSource={list}/>
    </div>
  )
};


function mapStateToProps({dataCenter}) {
  return {dataCenter};
}

// export default DataCenterPage
// export default connect(({dataCenter}) => ({dataCenter}))(DataCenterPage)
export default connect(mapStateToProps)(DataCenterPage)
