import React from "react";
import { Card, Row, Col } from "antd";

const { Meta } = Card;

function Home() {
  return (
    <Row>
      <Col span={8}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Restaurants" description="www.instagram.com" />
        </Card>
      </Col>

      <Col span={8}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Menu" description="www.instagram.com" />
        </Card>
      </Col>

      <Col span={8}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Users" description="www.instagram.com" />
        </Card>
      </Col>
    </Row>
  );
}

export default Home;
