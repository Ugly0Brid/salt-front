import React from 'react';
import {Layout, Menu,} from 'antd';
import {Route, Switch, Link} from 'dva/router';
import IndexPage from './IndexPage'
import MainPage from './Resource';
// import loginImage from '../../login.png';

const {Header, Content} = Layout;

const HomePage = ({location}) => {

  return (
    <div>
      <Layout>
        <Header>
          {/*<div style={{width: 120, height: 31, marginLeft: '-38px', float: 'left'}}>*/}
          {/*<img alt="" src={loginImage} style={{width: 200, height: 60, marginLeft: '-13px'}}/>*/}
          {/*</div>*/}
          <div style={{width: 120, height: 31, margin: '16px 28px 16px 0', float: 'left', background: 'rgba(255, 255, 255, .2)'}}/>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={location.pathname.split('/').filter(i => i)} style={{lineHeight: '64px'}}>
            <Menu.Item key="index"><Link to={`index`}>主页</Link></Menu.Item>
            <Menu.Item key="resource"><Link to={`resource?datacenter`}>资源</Link></Menu.Item>
            <Menu.Item key="deploy">部署</Menu.Item>
            <Menu.Item key="monitor">监控</Menu.Item>
            <Menu.Item key="tool">工具</Menu.Item>
          </Menu>
        </Header>
        <Content style={{background: '#fff', margin: 0, minHeight: 768,}}>
          <Switch>
            <Route path="/index" component={IndexPage}/>
            <Route path="/resource" component={MainPage}/>
          </Switch>
        </Content>
      </Layout>
    </div>
  )
};
export default HomePage

