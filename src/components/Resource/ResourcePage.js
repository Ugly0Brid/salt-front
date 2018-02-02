import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import {Row, Col} from 'antd';
import ResourceList from './ResourceList';
import ResourceSearch from './ResourceSearch';
import ResourceModal from './ResourceModal';

const ResourcePage = ({location, dispatch, resource}) => {
  const {
    loading, list, total, current, modalVisible, currentItem, resourceName,currentPageSize
  } = resource;
  const ResourceSearchProps = {
    dispatch,
    resourceName,
  };
  const ResourceListProps = {
    total,
    current,
    loading,
    currentPageSize,
    dispatch,
    dataSource: list,
    resourceName,
  };
  const ResourceModalProps = {
    modalVisible,
    dispatch,
    currentItem,
    resourceName,
  };
  return (
    <div>
      <Row>
        <Col span={6} style={{paddingBottom: 10}}>
          <ResourceSearch {...ResourceSearchProps}/>
        </Col>
        <Col span={6} offset="1" style={{paddingBottom: 10}}>
          <ResourceModal {...ResourceModalProps} />
          {/*<UserModal {...userModalProps} />*/}
        </Col>
      </Row>
      <Row>
        <Col span={24}><ResourceList {...ResourceListProps} /></Col>
      </Row>
    </div>
  )
};


ResourcePage.prototype = {
  resource: PropTypes.object,
};

function mapStateToProps({resource}) {
  return {resource};
}

export default connect(mapStateToProps)(ResourcePage)
