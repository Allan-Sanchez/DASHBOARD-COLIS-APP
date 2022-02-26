import React, { useContext } from "react";
import { Collapse, List, Avatar, Row, Col, Button, Empty } from "antd";
import InfoContext from "../context/InfoContext";
import { useParams } from "react-router-dom";

// components
import CreateCategory from "../components/menu/CreateCategory";
import CreateDish from "../components/menu/CreateDish";

const { Panel } = Collapse;

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

function Menu() {
  const { restaurant } = useContext(InfoContext);
  const params = useParams();

  console.log(restaurant);

  function callback(key) {
    console.log(key);
  }

  return (
    <>
      <Row justify="center">
        <Col span={24} style={{ padding: 10 }}>
          <Row justify="end">
            <CreateCategory paramsId={params.id} />
          </Row>
        </Col>
        {restaurant.category ? (
          <Col span={24}>
            <Collapse defaultActiveKey={["1"]} onChange={callback}>
              <Panel header="Bebidas" key="1">
                <Row justify="end">
                  <CreateDish />
                </Row>
                <List
                  itemLayout="horizontal"
                  dataSource={datatable}
                  renderItem={(item) => (
                    <List.Item actions={[<Button danger>Eliminar</Button>]}>
                      <List.Item.Meta
                        avatar={
                          <Avatar src="https://joeschmoe.io/api/v1/random" />
                        }
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      />
                      <div>100.00</div>
                    </List.Item>
                  )}
                />
              </Panel>
            </Collapse>
          </Col>
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
