import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import {Row, Col} from 'antd';
import UserList from '../components/User/UserList';
import UserSearch from '../components/User/UserSearch';
import UserModal from '../components/User/UserModal';

const UserPage = ({location, dispatch, user}) => {
  const {
    loading, list, total, current, modalVisible, currentItem, resourceName
  } = user;
  const UserSearchProps = {
    dispatch,
    resourceName,
  };
  const UserListProps = {
    total,
    current,
    loading,
    dispatch,
    dataSource: list,
    resourceName,
  };
  const userModalProps = {
    modalVisible,
    dispatch,
    currentItem,
    resourceName,
  };
  return (
    <div>
      <Row>
        <Col span={6} style={{paddingBottom: 10}}>
          <UserSearch {...UserSearchProps}/>
        </Col>
        <Col span={6} offset="1" style={{paddingBottom: 10}}>
          <UserModal {...userModalProps} />
          {/*<UserModal {...userModalProps} />*/}
        </Col>
      </Row>
      <Row>
        <Col span={24}><UserList {...UserListProps} /></Col>
      </Row>
    </div>
  )
};


UserPage.prototype = {
  user: PropTypes.object,
};

function mapStateToProps({user}) {
  return {user};
}

export default connect(mapStateToProps)(UserPage)
