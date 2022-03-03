import React, { useContext, useEffect } from "react";
import { Row, Col, Empty, Tag } from "antd";

import InfoContext from "../context/InfoContext";
import { useParams } from "react-router-dom";
import { FirebaseContext } from "../firebase";

// components
import CreateCategory from "../components/menu/CreateCategory";
import MyCollapse from "../components/menu/MyCollapse";
import useDishes from "../hooks/useDishes";
import CardDish from "../components/menu/dishes/CardDish";

function Menu() {
  const { restaurant, setRestaurant, setCategory, categories } =
    useContext(InfoContext);
  const { firebase } = useContext(FirebaseContext);
  const params = useParams();

  useEffect(async () => {
    if (restaurant.length === 0) {
      console.log("peticines");
      const response = await firebase.getOneCollection(
        "restaurants",
        params.id
      );

      await setRestaurant(response);
    }
    getCategoryFirebase();
  }, [restaurant]);

  // console.log("aqui tengo que save category array");
  const getCategoryFirebase = () => {
    if (!restaurant.category) return;
    if (
      restaurant.length !== 0 &&
      categories.length <= restaurant.category.length
    ) {
      restaurant.category.map(async (item) => {
        try {
          const response = await firebase.getCollections(
            `menu/${restaurant.id}/${item.categoryId}`
          );
          // create object
          let data = {
            id: item.categoryId,
            name: item.name,
            categories: response,
          };
          setCategory(data);
          // setData(categories.categories);
        } catch (error) {
          console.log(error);
        }
      });
    }
  };

  const handleFilterByCategory = (id) => {
    console.log(id);
  };
  // TODO:: create un custom hook con esta info
  // agregar la funcionalidad de los tag de la cagegory
  // esto lo vamos hacer agregando un state y pasarlo aqui por componentes
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

        <Col span={24} style={{ marginBottom: "1rem" }}>
          <Tag>Todo el Menu</Tag>
          {categories?.map((category) => {
            return (
              <Tag
                onClick={() => handleFilterByCategory(category.id)}
                key={category.id}
                style={{ padding: "0 1rem" }}
              >
                {category.name}
              </Tag>
            );
          })}
        </Col>
        <Col span={24}>
          <Row style={{ marginTop: "1rem" }} gutter={[16, 16]}>
            {categories?.map((category) => {
              return (
                // <Col>
                <CardDish key={category.id} categories={category.categories} />
                // </Col>
              );
            })}
          </Row>
        </Col>
        {/* {restaurant.category ? (
          <MyCollapse category={restaurant.category} />
        ) : (
          <Empty
            description={<span>El restaurant no tiene menu todavia</span>}
          />
        )} */}
      </Row>
    </>
  );
}

export default Menu;
