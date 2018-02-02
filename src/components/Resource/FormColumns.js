import React from 'react';
import {Form, Input, Select} from 'antd';

const Option = Select.Option;
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {span: 4},
  wrapperCol: {span: 8},
};
const FormColumns = ({currentItem, getFieldDecorator, resourceName}) => {
  const handleChange1 = (value) => {
    currentItem["selectData"] = [({"aaa": value})];
  };
  const handleChange2 = (value) => {
    currentItem["selectData"].push({"bbb": value});
  };
  if (resourceName === 'datacenter') {
    return (
      <div>
        <FormItem {...formItemLayout} label="选择">
          <Select mode="tags" style={{width: '100%'}} tokenSeparators={[',']} onChange={handleChange1}>
            <Option key='1'>1</Option>
            <Option key='2'>2</Option>
          </Select>
        </FormItem>
        <FormItem {...formItemLayout} label="选择">
          <Select mode="tags" style={{width: '100%'}} tokenSeparators={[',']} onChange={handleChange2}>
            <Option key='a'>a</Option>
            <Option key='b'>b</Option>
          </Select>
        </FormItem>
        <FormItem {...formItemLayout} label="名称">
          {getFieldDecorator('name', {initialValue: currentItem.name, rules: [{required: true,},],})(<Input placeholder="Please input your name"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="地址">
          {getFieldDecorator('address', {initialValue: currentItem.address, rules: [{required: true,},],})(<Input placeholder="Please input your nickname"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="联系人">
          {getFieldDecorator('link_name', {initialValue: currentItem.link_name, rules: [{required: true,},],})(<Input placeholder="Please input your linkName"/>)}
        </FormItem>
      </div>
    )
  } else if (resourceName === 'frame') {
    return (
      <div>
        <FormItem {...formItemLayout} label="名称">
          {getFieldDecorator('name', {initialValue: currentItem.name, rules: [{required: true,},],})(<Input placeholder="Please input your name"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="备注">
          {getFieldDecorator('remarks', {initialValue: currentItem.remarks, rules: [{required: true,},],})(<Input placeholder="Please input your remarks"/>)}
        </FormItem>
      </div>
    )
  } else if (resourceName === 'pmserver') {
    return (
      <div>
        <FormItem {...formItemLayout} label="名称">
          {getFieldDecorator('name', {initialValue: currentItem.name, rules: [{required: true,},],})(<Input placeholder="Please input your name"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="系统">
          {getFieldDecorator('os', {initialValue: currentItem.os, rules: [{required: true,},],})(<Input placeholder="Please input your remarks"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="内存">
          {getFieldDecorator('memory', {initialValue: currentItem.memory, rules: [{required: true,},],})(<Input placeholder="Please input your remarks"/>)}
        </FormItem>
      </div>
    )
  } else if (resourceName === 'vmserver') {
    return (
      <div>
        <FormItem {...formItemLayout} label="名称">
          {getFieldDecorator('name', {initialValue: currentItem.name, rules: [{required: true,},],})(<Input placeholder="Please input your name"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="系统">
          {getFieldDecorator('os', {initialValue: currentItem.os, rules: [{required: true,},],})(<Input placeholder="Please input your remarks"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="内存">
          {getFieldDecorator('memory', {initialValue: currentItem.memory, rules: [{required: true,},],})(<Input placeholder="Please input your remarks"/>)}
        </FormItem>
      </div>
    )
  }

};
export default FormColumns;
