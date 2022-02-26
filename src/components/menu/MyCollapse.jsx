import React from "react";
import { Collapse, Row, Col } from "antd";

import CreateDish from "./CreateDish";
import ListDish from "./dishes/ListDish";

const { Panel } = Collapse;

function MyCollapse({ category }) {
  function callback(key) {
    console.log(key);
  }

  return (
    <>
      <Col span={24}>
        <Collapse defaultActiveKey={["0"]} onChange={callback}>
          {category.map((item, index) => {
            return (
              <Panel header={item.name} key={index}>
                <Row justify="end">
                  <CreateDish />
                </Row>
                <ListDish />
              </Panel>
            );
          })}
        </Collapse>
      </Col>
    </>
  );
}

export default MyCollapse;
