import React, { useState } from 'react';
import { Row, Col, Image, Typography } from 'antd';

const { Title } = Typography;

export const Perfil = props => {

    const [usuario, setUsuario] = useState({
        nombre: 'Armando',
        edad: 18,
        tipoUsuario: 'Corporativo'
    })

    return(
        <div>
            <Row>
                <Col span={6}>
                    <Image style={{width: '100%'}} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
                    <Title level={3}>{usuario.nombre}</Title>
                </Col>
                <Col span={18}>

                </Col>
            </Row>
        </div>
    );
}