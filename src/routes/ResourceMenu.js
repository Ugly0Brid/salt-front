import React from 'react';
import {Layout, Menu, Breadcrumb,} from 'antd';
import {Route, Switch, Link} from 'dva/router';
import ResourcePage from '../components/Resource/ResourcePage';


// const {SubMenu} = Menu;
const {Content, Sider} = Layout;

const MainPage = ({location}) => {
  const breadcrumbNameMap = {
    'resource': '资源管理',
    'resource/datacenter': '机房',
    'resource/frame': '机架',
    'resource/pmserver': '物理机',
    'resource/vmserver': '虚拟机',
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
    <div>
      <Layout>
        <Sider width={200} style={{background: '#fff'}}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={location.search.split('?').filter(i => i)} style={{height: '100%', borderRight: 0}}>
            <Menu.Item key="datacenter"><Link to={`resource?datacenter`}>机房</Link></Menu.Item>
            <Menu.Item key="cabinet"><Link to={`resource?cabinet`}>机柜</Link></Menu.Item>
            <Menu.Item key="frame"><Link to={`resource?frame`}>机架</Link></Menu.Item>
            <Menu.Item key="scope"><Link to={`resource?scope`}>应用</Link></Menu.Item>
            <Menu.Item key="pmserver"><Link to={`resource?pmserver`}>物理机</Link></Menu.Item>
            <Menu.Item key="vmserver"><Link to={`resource?vmserver`}>虚拟机</Link></Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{padding: '0 24px 24px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            {breadcrumbItems}
          </Breadcrumb>
          <Content style={{background: '#fff', margin: 0, minHeight: 768,}}>
            <Switch>
              <Route path="/resource" component={ResourcePage}/>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
};

export default MainPage

