import React from 'react';
import {Form, Input, Select} from 'antd';

const Option = Select.Option;
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {span: 6},
  wrapperCol: {span: 14},
};
const FormColumns = ({currentItem, getFieldDecorator, resourceName, select_list}) => {
  const handleChange1 = (value) => {
    console.log(value);
    // currentItem["selectData"] = [({"aaa": value})];
  };
  if (resourceName === 'datacenter') {
    return (
      <div>
        {/*<FormItem {...formItemLayout} label="选择">*/}
        {/*{getFieldDecorator('band_width', {initialValue: currentItem.address, rules: [{required: true,},],})(*/}
        {/*<Select mode="multiple" style={{width: '100%'}} tokenSeparators={[',']} onChange={handleChange1}>*/}
        {/*{select_list.map(function (item) {*/}
        {/*return (<Option key={item.id} value={item.name}>{item.name}</Option>)*/}
        {/*})}*/}
        {/*</Select>)}*/}
        {/*</FormItem>*/}
        <FormItem {...formItemLayout} label="名称">
          {getFieldDecorator('name', {initialValue: currentItem.name, rules: [{required: true,},],})(<Input placeholder="Please input your name"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="类型">
          {getFieldDecorator('data_center_type', {initialValue: currentItem.type_id, rules: [{required: true,},],})(
            <Select style={{width: '100%'}} onChange={handleChange1}>
              {select_list.map(function (item) {
                return (<Option key={item.id} value={item.id}>{item.name}</Option>)
              })}
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="带宽">
          {getFieldDecorator('band_width', {initialValue: currentItem.band_width, rules: [{required: true,},],})(<Input placeholder="Please input your nickname"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="地址">
          {getFieldDecorator('address', {initialValue: currentItem.address, rules: [{required: true,},],})(<Input placeholder="Please input your nickname"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="联系人">
          {getFieldDecorator('link_name', {initialValue: currentItem.link_name, rules: [{required: true,},],})(<Input placeholder="Please input your linkName"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="联系人电话">
          {getFieldDecorator('contact_phone', {initialValue: currentItem.contact_phone, rules: [{required: true,},],})(<Input placeholder="Please input your nickname"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="备注">
          <Input placeholder="Please input your remarks"/>
        </FormItem>
      </div>
    )
  } else if (resourceName === 'cabinet') {
    return (
      <div>
        <FormItem {...formItemLayout} label="名称">
          {getFieldDecorator('name', {initialValue: currentItem.name, rules: [{required: true,},],})(<Input placeholder="Please input your name"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="所属机房">
          {getFieldDecorator('data_center', {initialValue: currentItem.data_center_id,})(
            <Select style={{width: '100%'}}>
              {select_list.map(function (item) {
                return (<Option key={item.id} value={item.id}>{item.name}</Option>)
              })}
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="备注">
          <Input placeholder="Please input your remarks"/>
        </FormItem>
      </div>
    )
  } else if (resourceName === 'frame') {
    return (
      <div>
        <FormItem {...formItemLayout} label="名称">
          {getFieldDecorator('name', {initialValue: currentItem.name, rules: [{required: true,},],})(<Input placeholder="Please input your name"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="所属机柜">
          {getFieldDecorator('cabinet', {initialValue: currentItem.cabinet_id,})(
            <Select style={{width: '100%'}}>
              {select_list.map(function (item) {
                return (<Option key={item.id} value={item.id}>{item.name}</Option>)
              })}
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="备注">
          {getFieldDecorator('remarks', {initialValue: currentItem.label})(<Input placeholder="Please input your name"/>)}
        </FormItem>
      </div>
    )
  } else if (resourceName === 'scope') {
    return (
      <div>
        <FormItem {...formItemLayout} label="名称">
          {getFieldDecorator('name', {initialValue: currentItem.name, rules: [{required: true,},],})(<Input placeholder="Please input your name"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="标签">
          {getFieldDecorator('label', {initialValue: currentItem.label})(<Input placeholder="Please input your name"/>)}
        </FormItem>
      </div>
    )
  } else if (resourceName === 'pmserver') {
    return (
      <div>
        <FormItem {...formItemLayout} label="名称">
          {getFieldDecorator('name', {initialValue: currentItem.name, rules: [{required: true,},],})(<Input placeholder="Please input your name"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="IP">
          {getFieldDecorator('ip', {initialValue: currentItem.ip, rules: [{required: true,},],})(<Input placeholder="Please input your name"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="Minion名称">
          {getFieldDecorator('minion_name', {initialValue: currentItem.minion_name, rules: [{required: true,},],})(<Input placeholder="Please input your remarks"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="所属机架">
          {getFieldDecorator('frame', {initialValue: currentItem.frame_id,})(
            <Select style={{width: '100%'}}>
              {select_list.frame.map(function (item) {
                return (<Option key={item.frame_id} value={item.frame_id}>{item.frame_name}</Option>)
              })}
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="所属应用">
          {getFieldDecorator('scope', {initialValue: currentItem.scope_id,})(
            <Select mode="multiple" style={{width: '100%'}}>
              {select_list.scope.map(function (item) {
                return (<Option key={item.scope_id} value={item.scope_id}>{item.scope_name}</Option>)
              })}
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="MAC地址">
          {getFieldDecorator('mac', {initialValue: currentItem.mac})(<Input placeholder="Please input your name"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="内存">
          {getFieldDecorator('memory', {initialValue: currentItem.memory})(<Input placeholder="Please input your name"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="CPU">
          {getFieldDecorator('cpu', {initialValue: currentItem.cpu})(<Input placeholder="Please input your name"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="系统">
          {getFieldDecorator('os', {initialValue: currentItem.os})(<Input placeholder="Please input your remarks"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="Minion状态">
          {getFieldDecorator('minion_status', {initialValue: currentItem.minion_status_id,})(
            <Select style={{width: '100%'}}>
              {select_list.minion.map(function (item) {
                return (<Option key={item.id} value={item.id}>{item.name}</Option>)
              })}
            </Select>
          )}
        </FormItem>
      </div>
    )
  } else if (resourceName === 'vmserver') {
    return (
      <div>
        <FormItem {...formItemLayout} label="名称">
          {getFieldDecorator('name', {initialValue: currentItem.name, rules: [{required: true,},],})(<Input placeholder="Please input your name"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="IP">
          {getFieldDecorator('ip', {initialValue: currentItem.ip, rules: [{required: true,},],})(<Input placeholder="Please input your name"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="Minion名称">
          {getFieldDecorator('minion_name', {initialValue: currentItem.minion_name, rules: [{required: true,},],})(<Input placeholder="Please input your remarks"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="所属机架">
          {getFieldDecorator('frame', {initialValue: currentItem.frame_id,})(
            <Select style={{width: '100%'}}>
              {select_list.frame.map(function (item) {
                return (<Option key={item.frame_id} value={item.frame_id}>{item.frame_name}</Option>)
              })}
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="所属应用">
          {getFieldDecorator('scope', {initialValue: currentItem.scope_id,})(
            <Select mode="multiple" style={{width: '100%'}}>
              {select_list.scope.map(function (item) {
                return (<Option key={item.scope_id} value={item.scope_id}>{item.scope_name}</Option>)
              })}
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="MAC地址">
          {getFieldDecorator('mac', {initialValue: currentItem.mac})(<Input placeholder="Please input your name"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="内存">
          {getFieldDecorator('memory', {initialValue: currentItem.memory})(<Input placeholder="Please input your name"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="CPU">
          {getFieldDecorator('cpu', {initialValue: currentItem.cpu})(<Input placeholder="Please input your name"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="系统">
          {getFieldDecorator('os', {initialValue: currentItem.os})(<Input placeholder="Please input your remarks"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="Minion状态">
          {getFieldDecorator('minion_status', {initialValue: currentItem.minion_status_id,})(
            <Select style={{width: '100%'}}>
              {select_list.minion.map(function (item) {
                return (<Option key={item.id} value={item.id}>{item.name}</Option>)
              })}
            </Select>
          )}
        </FormItem>
      </div>
    )
  }

};
export default FormColumns;
