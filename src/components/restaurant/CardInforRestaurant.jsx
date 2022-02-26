import React from "react";
import { Typography, Row, Card, Avatar, Tag, Empty, Button } from "antd";

const { Title, Text } = Typography;
// components
import SocialMedia from "./SocialMedia";
import ListPhoneNumber from "./ListPhoneNumber";

function CardInforRestaurant({ restaurant }) {
  return (
    <>
      {restaurant ? (
        <Card
          title="Restaurante"
          style={{ width: 900 }}
          headStyle={{ textAlign: "center" }}
        >
          <Row justify="center">
            <Avatar size={100} src={restaurant.urlImage} />
          </Row>
          <Row justify="center" style={{ marginTop: "1rem" }}>
            <Title level={3}>{restaurant.name}</Title>
          </Row>
          <Row justify="center" style={{ marginTop: "1rem" }}>
            <Text strong style={{ paddingRight: "1rem" }}>
              Direccion:
            </Text>
            <Text>{restaurant.address}</Text>
          </Row>
          <Row justify="center">
            <Text strong style={{ paddingRight: "1rem" }}>
              Descripcion:
            </Text>
            <Text>{restaurant.description}</Text>
          </Row>
          <Row justify="center" style={{ marginTop: "1rem" }}>
            <Tag color="green">{`Abrimos ${restaurant.hourOpen}`}</Tag>
            <div>
              <Tag color="red">{`Cerramos ${restaurant.hourClose}`}</Tag>
            </div>
          </Row>
          <Row justify="center" style={{ marginTop: "1rem" }}>
            <Text strong style={{ paddingRight: "1rem" }}>
              Telefonos
            </Text>
          </Row>
          {restaurant.phone ? (
            <ListPhoneNumber data={restaurant.phone} />
          ) : (
            <Empty
              imageStyle={{
                height: 40,
              }}
              description={<span>No hay telefonos</span>}
            />
          )}
          <Row justify="center" style={{ marginTop: "1rem" }}>
            <Text strong style={{ paddingRight: "1rem" }}>
              Redes Sociales
            </Text>
          </Row>
          {restaurant.socialMedia ? (
            <SocialMedia data={restaurant.socialMedia} />
          ) : (
            <Empty
              imageStyle={{
                height: 40,
              }}
              description={<span>No tiene redes sociales</span>}
            />
          )}
          <Row justify="end">
            <Button className="button-edit">Editar</Button>
          </Row>
        </Card>
      ) : (
        <Empty />
      )}
    </>
  );
}

export default CardInforRestaurant;
