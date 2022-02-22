import React, { useContext, useEffect, useState } from "react";
import { Collapse, List, Avatar, Row, Col, Button } from "antd";
import { useParams } from "react-router-dom";
import { FirebaseContext } from "../firebase";

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
  const [data, setData] = useState({});
  const params = useParams();
  const { firebase } = useContext(FirebaseContext);

  useEffect(async () => {
    const response = await firebase.getOneCollection("restaurants", params.id);
    setData(response);
  }, []);

  function callback(key) {
    console.log(key);
  }

  const handleNewRestauran = () => {
    console.log(test);
  };

  return (
    <Row>
      <Col span={24} style={{ padding: 10 }}>
        <Row justify="end">
          <CreateCategory />
        </Row>
      </Col>
      <Col span={24}>
        <Collapse defaultActiveKey={["1"]} onChange={callback}>
          <Panel header="Nombre de la categoria" key="1">
            <Row justify="end">
              <CreateDish />
            </Row>
            <List
              itemLayout="horizontal"
              dataSource={datatable}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                  <Button danger>Danger Default</Button>
                </List.Item>
              )}
            />
          </Panel>
          <Panel header="Bebidas Frias" key="2">
            <p>
              familiar layers freedom upon home shop early root merely time
              stronger faster chamber wood hurry dig pet sent basket observe
              repeat image warm pleasant
            </p>
          </Panel>
          <Panel header="Bebidas Calientes" key="3">
            <p>
              lady laugh why torn seed entire west human forward yes writer
              heart locate judge perfectly age thou national serve wall spite
              chamber specific something
            </p>
          </Panel>
        </Collapse>
      </Col>
    </Row>
  );
}

export default Menu;
