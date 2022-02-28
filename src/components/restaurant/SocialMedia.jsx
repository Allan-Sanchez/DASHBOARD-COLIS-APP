import React from "react";
import { Row, Button } from "antd";

function SocialMedia({ data }) {
  return (
    <>
      {data?.map((item) => {
        return (
          <div key={item.url}>
            <Row justify="center">
              <Button type="link" href={item.url} target="_blank">
                {item.name}
              </Button>
            </Row>
          </div>
        );
      })}
    </>
  );
}

export default SocialMedia;
