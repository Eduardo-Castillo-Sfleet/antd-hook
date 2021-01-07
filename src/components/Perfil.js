import React, { useState } from 'react';
import { Button, Row, Col, Image, Typography } from 'antd';

import { EditOutlined } from '@ant-design/icons';

import "../styles/Perfil.css";

const { Title } = Typography;

export const Perfil = props => {

    const [usuario, setUsuario] = useState({
        nombre: 'Armando Castillo',
        edad: 18,
        tipoUsuario: 'Corporativo'
    })

    const cambiarDatos = () => {
        setUsuario({
            nombre: 'Eduardo'
        })
    }

    return(
        <div>
            <Row>
                <Col span={6}>
                    <Image style={{width: '100%'}} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
                    <Title level={3}>{usuario.nombre}</Title>
                    <Title level={5}>Edad: {usuario.edad}</Title>
                    <Button type="primary" size='large' icon={<EditOutlined/>} onClick={cambiarDatos}>
                    Cambiar
                    </Button>
                </Col>
                <Col span={9} className="colsPerfil">
                    <Title level={3}>Mis autos</Title>
                </Col>
                <Col span={9} className="colsPerfil">
                    <Title level={3}>Mis siniestros</Title>
                </Col>
            </Row>
        </div>
    );
}