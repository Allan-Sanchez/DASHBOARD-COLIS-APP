import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Empty, Tag } from "antd";

import InfoContext from "../context/InfoContext";
import { useParams } from "react-router-dom";
import { FirebaseContext } from "../firebase";

// components
import CreateCategory from "../components/menu/CreateCategory";
import MyCollapse from "../components/menu/MyCollapse";
import useDishes from "../hooks/useDishes";
import CardDish from "../components/menu/dishes/CardDish";
import CreateDish from "../components/menu/CreateDish";

function Menu() {
  const {
    restaurant,
    categories,
    category,
    setRestaurant,
    setCategory,
    getOneCategory,
    cleanCategory,
  } = useContext(InfoContext);
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
        } catch (error) {
          console.log(error);
        }
      });
    }
  };

  const handleFilterByCategory = async (id) => {
    await getOneCategory(id);
    console.log(id);
    // let test = await category;
    // console.log(test);
  };

  const handleAllCategory = () => {
    cleanCategory();
    console.log("limpiar la category");
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
              setCategory={setCategory}
            />
            {categories.length > 0 ? <CreateDish /> : null}
          </Row>
        </Col>

        <Col span={24} style={{ marginBottom: "1rem" }}>
          <Tag onClick={() => handleAllCategory()}>Todo el Menu</Tag>
          {categories?.map((category) => {
            // console.log(category);
            // TODO: enable botton for do not create 2 category whith the same name
            return (
              <Tag
                onClick={() => handleFilterByCategory(category.id)}
                key={category.id}
                style={{ padding: "0 1rem" }}
              >
                {category.name.toUpperCase()}
              </Tag>
            );
          })}
        </Col>
        <Col span={24}>
          <Row justify="center" style={{ marginTop: "1rem" }} gutter={[16, 16]}>
            {category.length === 0 ? (
              <>
                {categories?.map((category) => {
                  return (
                    // <Col>
                    <CardDish
                      key={category.id}
                      categories={category.categories}
                    />
                    // </Col>
                  );
                })}
              </>
            ) : (
              <>
                {category?.map((category) => {
                  return (
                    // <Col>
                    <CardDish
                      key={category.id}
                      categories={category.categories}
                    />
                    // </Col>
                  );
                })}
              </>
            )}
            {/* {categories?.map((category) => {
              return (
                // <Col>
                <CardDish key={category.id} categories={category.categories} />
                // </Col>
              );
            })} */}
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
