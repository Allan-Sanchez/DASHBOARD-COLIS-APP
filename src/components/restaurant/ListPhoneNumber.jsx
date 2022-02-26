import React from "react";
import { Row, Typography } from "antd";

const { Text } = Typography;

function ListPhoneNumber({ data }) {
  return (
    <>
      {data?.map((item) => {
        return (
          <div key={item.number}>
            <Row justify="center">
              <Text strong style={{ paddingRight: "1rem" }}>
                {item.type}
              </Text>
              <Text>{item.number}</Text>
            </Row>
          </div>
        );
      })}
    </>
  );
}

export default ListPhoneNumber;
