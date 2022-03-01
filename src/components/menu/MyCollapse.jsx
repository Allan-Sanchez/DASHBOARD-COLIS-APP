import React from "react";
import { Collapse, Col, Row } from "antd";

const { Panel } = Collapse;
import CreateDish from "../menu/CreateDish";
import ListDish from "../menu/dishes/ListDish";
function MyCollapse({ category }) {
  function callback(key) {
    // console.log(key);
  }

  return (
    <>
      <Col span={24}>
        <Collapse defaultActiveKey={["0"]} onChange={callback}>
          {category.map((item, index) => {
            return (
              <Panel header={item.name} key={index}>
                <Row justify="end">
                  <CreateDish categoryData={item} index={index} />
                </Row>

                <ListDish categoryData={item} />
              </Panel>
            );
          })}
        </Collapse>
      </Col>
    </>
  );
}

export default MyCollapse;
