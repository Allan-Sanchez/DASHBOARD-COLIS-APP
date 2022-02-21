import React from "react";
import { Button, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import MyTable from "../components/restaurants/MyTable";
import UseRestaurants from "../hooks/UseRestaurants";

function Restaurants() {
  // const [data, setData] = useState();
  const navigate = useNavigate();
  const { restaurants } = UseRestaurants();

  console.log(restaurants);

  const handleNewRestauran = () => {
    navigate("/restaurant/new");
  };
  return (
    <Row>
      <Col span={24} style={{ padding: 10 }}>
        <Row justify="end">
          <Button onClick={() => handleNewRestauran()} type="primary">
            New Restaurant
          </Button>
        </Row>
      </Col>
      <Col span={24}>
        <MyTable data={restaurants} />
      </Col>
    </Row>
  );
}

export default Restaurants;
