import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import { Affix, Avatar,  Breadcrumb, Layout, Typography, Menu, } from 'antd';
import { UserOutlined, CarFilled, SmileFilled, SignalFilled, ReadFilled, BankFilled,
  BookFilled, FileExcelFilled, FilePdfFilled } from '@ant-design/icons';
  
import './styles/App.css';
  
import { ExportarPdf } from './components/ExportarPdf';
import { Perfil } from "./components/Perfil";

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
const { SubMenu } = Menu;

function App() {

  const[top] = useState(0)

  return (
    <div>
     <Layout  className="containerLayouts">
      <Router>
      <Affix offsetTop={top}>
        <Header className="header">
          <div>
            <Title style={{color:'white', float:'left', margin:0}} level={3}>Sohamu</Title>
          </div>
          <div className="avatarMenu">
            <Title style={{color: 'white', margin:0, paddingRight: 5}} level={5}>Armando</Title>
            <Avatar icon={<UserOutlined />} />
          </div>
        </Header>
      </Affix>
      <Layout>
        <Sider>
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1" icon={<CarFilled />}>Siniestros</Menu.Item>
            <Menu.Item key="2" icon={<BankFilled/>}>Clientes corporativos</Menu.Item>
            <Menu.Item key="3" icon={<SignalFilled/>}>Finanzas</Menu.Item>
            <Menu.Item key="4" icon={<ReadFilled/>}>Historial</Menu.Item>
            <SubMenu key="sub1" title="Exportar" icon={<BookFilled/>}>
              <Menu.Item key="5" icon={<FilePdfFilled/>}><Link to="/exportarPdf">PDF</Link></Menu.Item>
              <Menu.Item key="6" icon={<FileExcelFilled/>}>Excel</Menu.Item>
            </SubMenu>
            <Menu.Item key="perfil" icon={<SmileFilled/>}><Link to="/perfil">Perfil</Link></Menu.Item>
          </Menu>
        </Sider>
      <Layout>
          <Content style={{padding: '4% 4% 0'}}>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/Inicio">Inicio</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/Perfil">Perfil</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            <div className="contenedor">
              <Route exact path="/perfil" component={Perfil}
              ></Route>
              <Route exact path="/exportarPdf" component={ExportarPdf}></Route>
            </div>
          </Content>
        </Layout>
      </Layout>
      <Footer className="footerSohamu">Footer</Footer>
      </Router>
    </Layout>    
    </div>
  );
}

export default App;
