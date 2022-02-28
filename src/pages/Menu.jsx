import React, { useContext, useEffect } from "react";
import { Row, Col, Empty } from "antd";
import InfoContext from "../context/InfoContext";
import { useParams } from "react-router-dom";
import { FirebaseContext } from "../firebase";

// components
import CreateCategory from "../components/menu/CreateCategory";
import MyCollapse from "../components/menu/MyCollapse";

function Menu() {
  const { restaurant, setRestaurant, categories } = useContext(InfoContext);
  const { firebase } = useContext(FirebaseContext);
  const params = useParams();

  useEffect(async () => {
    if (restaurant.length === 0) {
      const response = await firebase.getOneCollection(
        "restaurants",
        params.id
      );
      // const responseCategory = await firebase.getCollections(
      //   `dishes/${response.id}`
      // );
      // console.log(` data: ${responseCategory}`);
      console.log("temp");
      await setRestaurant(response);
    }
  }, [restaurant]);

  return (
    <>
      <Row justify="center">
        <Col span={24} style={{ padding: 10 }}>
          <Row justify="end">
            <CreateCategory
              restaurant={restaurant}
              paramsId={params.id}
              setRestaurant={setRestaurant}
            />
          </Row>
        </Col>
        {restaurant.category ? (
          <MyCollapse category={restaurant.category} />
        ) : (
          <Empty
            description={<span>El restaurant no tiene menu todavia</span>}
          />
        )}
      </Row>
    </>
  );
}

export default Menu;
