import React from 'react';
import '../styles/ExportarPdf.css';

import { Col, Row, Typography } from 'antd';
const { Title } = Typography;

export const ExportarPdf = () => {
    
    return(
        <div>
            <Row>
                <Col span={12} className="colsExportarPdf">
                    <Title level={3}>Previa PDF</Title>
                </Col>
                <Col span={12} className="colsExportarPdf">
                    <Title level={3}>Datos de siniestros</Title>
                </Col>
            </Row>
        </div>
    );
}