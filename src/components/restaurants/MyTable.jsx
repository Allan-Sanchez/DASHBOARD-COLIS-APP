import React from "react";
import { Table, Space, Avatar, Button } from "antd";

const { Column } = Table;

function MyTable({ data }) {
  const handleDelete = (id) => {
    console.log(id);
  };
  return (
    <Table dataSource={data} rowKey={(item) => item.id}>
      <Column title="Nombre" dataIndex="name" key="name" />
      <Column
        responsive={["sm"]}
        title="imagen"
        dataIndex="imgUrl"
        render={(info) => {
          return (
            <Space size="middle">
              <Avatar size={60} src={info} />
            </Space>
          );
        }}
      />
      <Column
        responsive={["sm"]}
        title="Direccion"
        dataIndex="address"
        key="address"
      />
      <Column
        title="Acciones"
        render={(info, render) => {
          return (
            <Button danger onClick={() => handleDelete(render.id)}>
              Eliminar
            </Button>
          );
        }}
      />
    </Table>
  );
}

export default MyTable;
