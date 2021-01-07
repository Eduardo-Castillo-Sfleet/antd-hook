import React from 'react';
import { Layout, Typography, Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './styles/App.css'

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
const { SubMenu } = Menu;

function App() {
  return (
    <div>
     <Layout>
      <Header className="header">
        <div>
          <Title style={{color:'white', float:'left', margin:0}} level={3}>Sfleet</Title>
        </div>
        <div className="avatarMenu">
          <Title style={{color: 'white', margin:0, paddingRight: 5}} level={5}>Armando</Title>
          <Avatar icon={<UserOutlined />} />
        </div>
      </Header>
      <Layout>
        <Sider>
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1">Siniestros</Menu.Item>
            <Menu.Item key="2">Clientes corporativos</Menu.Item>
            <Menu.Item key="3">Finanzas</Menu.Item>
            <Menu.Item key="4">Historial</Menu.Item>
            <SubMenu key="sub1" title="Exportar">
              <Menu.Item key="5">PDF</Menu.Item>
              <Menu.Item key="6">Excel</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>    
    </div>
  );
}

export default App;
