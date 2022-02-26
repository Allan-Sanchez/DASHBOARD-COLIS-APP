import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Button } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../firebase";
import InfoContext from "../context/InfoContext";

// component
import CardInforRestaurant from "../components/restaurant/CardInforRestaurant";

function Restaurant() {
  const params = useParams();
  const navigate = useNavigate();

  const { firebase } = useContext(FirebaseContext);
  const { setRestaurant, restaurant } = useContext(InfoContext);

  useEffect(async () => {
    const response = await firebase.getOneCollection("restaurants", params.id);
    await setRestaurant(response);
  }, []);

  const handleRedirectToMenu = () => {
    navigate(`/restaurant/${params.id}/menu`);
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Row justify="end">
          <Button onClick={() => handleRedirectToMenu()} type="primary">
            Menu
          </Button>
        </Row>
      </Col>
      <CardInforRestaurant restaurant={restaurant} />
    </Row>
  );
}

export default Restaurant;
