import React, { useContext, useEffect, useState } from "react";
import { List, Avatar, Button } from "antd";
import { FirebaseContext } from "../../../firebase";
import InfoContext from "../../../context/InfoContext";

function ListDish({ categoryData }) {
  const [data, setData] = useState();
  const { firebase } = useContext(FirebaseContext);
  const { restaurant, setCategory } = useContext(InfoContext);
  console.log(categoryData);
  useEffect(async () => {
    try {
      // const test = "test".toUpperCase();
      const response = await firebase.getCollections(
        `menu/${restaurant.id}/${categoryData.categoryId}`
      );
      setData(response);
      setCategory(response);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {data ? (
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item actions={[<Button danger>Eliminar</Button>]}>
              <List.Item.Meta
                avatar={
                  <a href={item.urlImage} target={"_blank"}>
                    <Avatar src={item.urlImage} size={"large"} />
                  </a>
                }
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.description}
              />
              <div>Q. {item.price}</div>
            </List.Item>
          )}
        />
      ) : (
        <h2>Cargando....</h2>
      )}
    </>
  );
}

export default ListDish;
