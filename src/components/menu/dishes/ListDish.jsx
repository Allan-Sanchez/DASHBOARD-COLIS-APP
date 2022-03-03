import React, { useState, useContext, useEffect } from "react";
import { List, Avatar, Button } from "antd";
import useDishes from "../../../hooks/useDishes";
import InfoContext from "../../../context/InfoContext";

function ListDish({ categoryData }) {
  const { categoryId } = categoryData;
  const [data, setData] = useState();
  const { categoriesList } = useDishes(categoryId);
  const { category, getOneCategory } = useContext(InfoContext);

  useEffect(() => {
    // console.log(categoryId);
    getOneCategory(categoryId);
  }, []);
  // console.log(category);
  // getOneCategory(categoryId);
  // console.log(category);

  return (
    <>
      {data ? (
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => {
            return (
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
            );
          }}
        />
      ) : (
        <h2>Cargando....</h2>
      )}
    </>
  );
}

export default ListDish;

{
  /* <List
          itemLayout="horizontal"
          dataSource={categories}
          renderItem={(item) => {
            return (
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
            );
          }}
        /> */
}
