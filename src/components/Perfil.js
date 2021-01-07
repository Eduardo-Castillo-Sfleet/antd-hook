import React, { useState } from 'react';
import { Row, Col, Image, Typography } from 'antd';
import "../styles/Perfil.css";

const { Title } = Typography;

export const Perfil = props => {

    const [usuario, setUsuario] = useState({
        nombre: 'Armando Castillo',
        edad: 18,
        tipoUsuario: 'Corporativo'
    })

    return(
        <div>
            <Row>
                <Col span={6}>
                    <Image style={{width: '100%'}} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
                    <Title level={3}>{usuario.nombre}</Title>
                    <Title level={5}>Edad: {usuario.edad}</Title>
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