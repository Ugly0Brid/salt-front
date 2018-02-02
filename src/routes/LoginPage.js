import React from 'react';
import {Form, Icon, Input, Button, Row, Col} from 'antd';
import {connect} from 'dva';

const FormItem = Form.Item;
const LoginPage = ({dispatch, login, form: {getFieldDecorator, validateFieldsAndScroll,}}) => {
  const {loading} = login;
  const handleSubmit = () => {
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({type: "login/loginAuth", payload: values});
      }
    });
  };
  return (
    <div>
      <Row style={{paddingTop: '18%'}}>
        <Col offset={15}>
          <div>
            <span style={{paddingLeft: '10%'}}>SaltOps运维平台</span>
            <Form onSubmit={handleSubmit} style={{maxWidth: '300px', minWidth: '300px'}}>
              <FormItem>
                {getFieldDecorator('username', {
                  rules: [{required: true, message: 'Please input your username!'}],
                })(
                  <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{required: true, message: 'Please input your Password!'}],
                })(
                  <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password" placeholder="Password"/>
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" style={{width: '100%'}} loading={loading}> 登录 </Button>
                <a href="">register now!</a>
                <a style={{float: 'right'}} href="">Forgot password</a>
              </FormItem>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

function mapStateToProps({login}) {
  return {login};
}

export default connect(mapStateToProps)(Form.create()(LoginPage));
