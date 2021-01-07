import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div>
     <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider style={{background:'red'}}>Sider</Sider>
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
