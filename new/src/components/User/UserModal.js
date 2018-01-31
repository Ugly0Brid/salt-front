import React from 'react';
import {Form, Modal, Button, Icon} from 'antd';
import FormColumns from './FormColumns';

const UserModal = ({modalVisible, dispatch, currentItem, resourceName, form: {getFieldDecorator, validateFieldsAndScroll,}}) => {
  const {id} = currentItem;
  const FormColumnsProps = {
    currentItem,
    getFieldDecorator,
    resourceName,
  };
  const showModal = () => {
    dispatch({type: 'user/create', payload: {"type": "show", "name": resourceName}})
  };
  const handleCancel = () => {
    dispatch({type: 'user/create', payload: {"type": "hide", "name": resourceName}})
  };
  const handleButClick = () => {
    validateFieldsAndScroll((err, value) => {
      if (err) {
        return
      }
      const arr = Object.keys(currentItem);
      if (arr.length > 1) {
        value["id"] = id;
        value['select_data'] = currentItem.selectData;
        dispatch({type: 'user/update', payload: {"type": "submit", "data": value, "name": resourceName}})
      } else {
        dispatch({type: 'user/create', payload: {"type": "submit", "data": value, "name": resourceName}})
      }
    })
  };
  return (
    <div style={{float: 'left', padding: '0 10px 0 0'}}>
      <Form>
        <Button type="primary" onClick={showModal}><Icon type="plus"/>新增</Button>
        <Modal visible={modalVisible} onOk={handleButClick} onCancel={handleCancel} destroyOnClose>
          <FormColumns {...FormColumnsProps}/>
        </Modal>
      </Form>
    </div>
  )
};
export default Form.create()(UserModal);
