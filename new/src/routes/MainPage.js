import React from 'react';
import {Layout, Menu, Breadcrumb,} from 'antd';
import {Route, Switch, Link} from 'dva/router';
import UserPage from '../routes/UserPage';

// const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

const MainPage = ({location}) => {
  const breadcrumbNameMap = {
    'users': '资源管理',
    'users/datacenter': '机房',
    'users/frame': '机架',
    'users/pmserver': '物理机',
    'users/vmserver': '虚拟机',
  };
  const parent = location.pathname.split('/').filter(i => i);
  const children = location.search.split('?').filter(i => i);
  const pathSnippets = parent.concat(children);
  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        {breadcrumbNameMap[url]}
      </Breadcrumb.Item>
    );
  });
  return (
    <Layout>
      <Header className="header">
        <div className="logo"/>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{lineHeight: '64px'}}>
          <Menu.Item key="1"><Link to={`/`}>主页</Link></Menu.Item>
          <Menu.Item key="2"><Link to={`users?datacenter`}>资源管理</Link></Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} style={{background: '#fff'}}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{height: '100%', borderRight: 0}}>
            <Menu.Item key="1"><Link to={`users?datacenter`}>机房</Link></Menu.Item>
            <Menu.Item key="2"><Link to={`users?frame`}>机架</Link></Menu.Item>
            <Menu.Item key="3"><Link to={`users?pmserver`}>物理机</Link></Menu.Item>
            <Menu.Item key="4"><Link to={`users?vmserver`}>虚拟机</Link></Menu.Item>
            {/*<SubMenu key="sub2" title={<span><Icon type="laptop"/>subnav 2</span>}>*/}
            {/*<Menu.Item key="5">option5</Menu.Item>*/}
            {/*<Menu.Item key="6">option6</Menu.Item>*/}
            {/*<Menu.Item key="7">option7</Menu.Item>*/}
            {/*<Menu.Item key="8">option8</Menu.Item>*/}
            {/*</SubMenu>*/}
            {/*<SubMenu key="sub3" title={<span><Icon type="notification"/>subnav 3</span>}>*/}
            {/*<Menu.Item key="9">option9</Menu.Item>*/}
            {/*<Menu.Item key="10">option10</Menu.Item>*/}
            {/*<Menu.Item key="11">option11</Menu.Item>*/}
            {/*<Menu.Item key="12">option12</Menu.Item>*/}
            {/*</SubMenu>*/}
          </Menu>
        </Sider>
        <Layout style={{padding: '0 24px 24px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            {breadcrumbItems}
          </Breadcrumb>
          <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 768,}}>
            <Switch>
              <Route name="users" breadcrumbName="user" path="/users" component={UserPage}/>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
};
export default MainPage
