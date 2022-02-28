import React from "react";
import { List, Avatar, Button } from "antd";

const datatable = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];
function ListDish() {
  console.log("list dish");
  return (
    <List
      itemLayout="horizontal"
      dataSource={datatable}
      renderItem={(item) => (
        <List.Item actions={[<Button danger>Eliminar</Button>]}>
          <List.Item.Meta
            avatar={
              <a href="" target={"_blank"}>
                <Avatar
                  src="https://joeschmoe.io/api/v1/random"
                  size={"large"}
                />
              </a>
            }
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
          <div>100.00</div>
        </List.Item>
      )}
    />
  );
}

export default ListDish;
