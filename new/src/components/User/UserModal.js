import React from 'react';
import {Form, Input, Modal, Button, Icon} from 'antd';

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {span: 4},
  wrapperCol: {span: 8},
};

const UserModal = ({modalVisible, dispatch, currentItem, resourceName, form: {getFieldDecorator, validateFieldsAndScroll,}}) => {
  const {name, id, address, link_name,} = currentItem;

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
      if (JSON.stringify(currentItem) !== "{}") {
        value["id"] = id;
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
          <FormItem {...formItemLayout} label="name">
            {getFieldDecorator('name', {initialValue: name, rules: [{required: true,},],})(<Input placeholder="Please input your name"/>)}
          </FormItem>
          <FormItem {...formItemLayout} label="address">
            {getFieldDecorator('address', {initialValue: address, rules: [{required: true,},],})(<Input placeholder="Please input your nickname"/>)}
          </FormItem>
          <FormItem {...formItemLayout} label="linkName">
            {getFieldDecorator('link_name', {initialValue: link_name, rules: [{required: true,},],})(<Input placeholder="Please input your linkName"/>)}
          </FormItem>
        </Modal>
      </Form>
    </div>
  )
};
export default Form.create()(UserModal);
