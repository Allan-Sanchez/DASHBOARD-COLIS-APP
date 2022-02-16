import React from "react";
import { Button, Col, Row, Table } from "antd";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    title: "Name (all screens)",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age (medium screen or bigger)",
    dataIndex: "age",
    key: "age",
    responsive: ["md"],
  },
  {
    title: "Address (large screen or bigger)",
    dataIndex: "address",
    key: "address",
    responsive: ["lg"],
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "3",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
];
function Restaurants() {
  const navigate = useNavigate();

  const handleNewRestauran = () => {
    navigate("/restaurant/new");
  };
  return (
    <Row>
      <Col span={24} style={{ padding: 10 }}>
        <Row justify="end">
          <Button onClick={() => handleNewRestauran()} type="primary">
            New Restaurant
          </Button>
        </Row>
      </Col>
      <Col span={24}>
        <Table columns={columns} dataSource={data} />
      </Col>
    </Row>
  );
}

export default Restaurants;
