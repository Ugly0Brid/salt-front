import React from 'react';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import {Link} from 'dva/router';
import {Route, Switch, Redirect} from 'dva/router';
import DataCenterPage from '../components/resource/DataCenterPage';

const {Content, Sider} = Layout;
const {SubMenu} = Menu;
const HomePage = () => {
  return (
    <div>
      <Layout style={{minHeight: '90vh'}}>
        <Sider width={200} style={{background: '#fff'}}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{height: '100%', borderRight: 0}}>
            <SubMenu key="sub1" title={<span><Icon type="profile"/>资源管理</span>}>
              <Menu.Item key="1"><Link to={`/datacenter`}>机房</Link></Menu.Item>
              <Menu.Item key="2"><Link to={`/c`}>机柜</Link></Menu.Item>
              <Menu.Item key="3">机架</Menu.Item>
              <Menu.Item key="4">领域</Menu.Item>
              <Menu.Item key="5">物理机</Menu.Item>
              <Menu.Item key="6">虚拟机</Menu.Item>
              <Menu.Item key="7">服务</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{padding: '0 10px 10px'}}>
          <Breadcrumb style={{margin: '5px 0'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{background: '#fff', padding: 10, margin: 0, minHeight: 280}}>
            aaa
            <div>
              <Switch>
                <Route name="datacenter" breadcrumbName="datacenter" path="/datacenter" component={DataCenterPage}/>
                <Route name="datacenter" breadcrumbName="datacenter" path="/c" component={DataCenterPage}/>
                <Route name="resource" breadcrumbName="resource" excat path="/" component={() => <Redirect to="/datacenter" component={DataCenterPage}/>}/>

              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
};

export default HomePage;
