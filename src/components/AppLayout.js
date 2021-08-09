import { Col, Row } from 'antd';
import Layout, {
  Content,
} from 'antd/lib/layout/layout';
import React, { memo } from 'react';
import { Global } from './style';

const AppLayout = memo((props) => {
  return (
    <>
      <Layout>
        <Global />
        <Content>
          <Row>
            <Col
              xs={1}
              sm={1}
              md={2}
              lg={2}
              xl={3}
            ></Col>
            <Col
              xs={22}
              sm={22}
              md={20}
              lg={20}
              xl={18}
            >
              {props.children}
            </Col>
            <Col
              xs={1}
              sm={1}
              md={2}
              lg={2}
              xl={3}
            ></Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
});

export default AppLayout;
