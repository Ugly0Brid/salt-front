import React from 'react';
import {Layout, Menu} from 'antd';
import {Link} from 'dva/router';
import {Route, Switch} from 'dva/router';
import HomePage from './ResourcePage';

const {Header, Content} = Layout;
const HeaderPage = () => {
  return (
    <div>
      <Layout>
        <Header>
          <div style={{width: '120px', height: '31px', float: 'left', background: 'rgba(255, 255, 255, .2)', margin: '16px 24px 16px 6px'}}/>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{lineHeight: '64px'}}>
            <Menu.Item key="1"><Link to={`/`}>资源管理</Link></Menu.Item>
            <Menu.Item key="2"><Link to={`deploy`}>业务部署</Link></Menu.Item>
            <Menu.Item key="3"><Link to={`monitor`}>业务监控</Link></Menu.Item>
            <Menu.Item key="4" style={{float: 'right'}}><Link to={`ee`}>zhang feng ju</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{background: '#fff', padding: 0, margin: 0, minHeight: 280}}>
          <Switch>
            <Route name="resource" breadcrumbName="resource" path="/" component={HomePage}/>
            <Route name="deploy" breadcrumbName="deploy" path="/deploy" component={HomePage}/>
            <Route name="monitor" breadcrumbName="monitor" path="/monitor" component={HomePage}/>
          </Switch>
        </Content>
      </Layout>
    </div>
  )
};

export default HeaderPage;
