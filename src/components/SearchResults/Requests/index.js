import React from "react";
import { Table, Button, Popconfirm } from "antd";
import Details from "./Details";
import { getPaginationObject } from "../utils";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },

  {
    title: "Region",
    dataIndex: "region",
  },

  {
    title: "Created",
    dataIndex: "createdAt",
  },

  {
    title: "Action",
    dataIndex: "_id",
    render: id => (
      <Popconfirm
        title="Are you sure want to close this request?"
        onConfirm={() => {console.log('yes', id)}}
        onCancel={() => {console.log('no', id)}}
        okText="Yes"
        cancelText="No">
        <Button
        size={"small"}
        type="primary">Close</Button>
      </Popconfirm>
    )
  },
];

const RequestSearchResults = ({
  result,
  pagination,
  onPageChange,
  onShowSizeChange,
}) => {
  return (
    <div>
      <div>
        <Table
          columns={columns}
          dataSource={result}
          rowKey={(r) => r._id}
          expandable={{
            expandedRowRender: (record) => (
              <div>
                <Details record={record} />
              </div>
            ),
            expandRowByClick: false,
          }}
          pagination={getPaginationObject(
            pagination,
            onPageChange,
            onShowSizeChange
          )}
          size="middle"
        />
      </div>
    </div>
  );
};

export default RequestSearchResults;
