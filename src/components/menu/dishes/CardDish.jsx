import React from "react";
import { Card, Avatar, Col, Button, Tag } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

function CardDish({ categories }) {
  return (
    <>
      {categories.map((category) => {
        return (
          <Col key={category.id} sm={12} lg={6}>
            <Card
              style={{ width: 200 }}
              cover={
                <>
                  <a
                    href={category.urlImage}
                    target="_blank"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      alt="example"
                      src={category.urlImage}
                      style={{ height: 100, objectFit: "contain" }}
                    />
                  </a>
                </>
              }
              actions={[<Button danger>Elimar</Button>]}
            >
              <Meta
                // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={category.name}
                description={category.description}
              />
              <div style={{ margin: "1rem 0" }}>
                <Tag color={"green"}>Precio: {category.price}</Tag>
              </div>
            </Card>
          </Col>
        );
      })}
    </>
  );
}

export default CardDish;
