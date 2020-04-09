import React from "react";
import { Table, Button, Popconfirm } from "antd";
import Details from "./Details";
import { getPaginationObject } from "../utils";

const RequestSearchResults = ({
  result,
  pagination,
  onPageChange,
  onShowSizeChange,
  onResultClose
}) => {

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
      render: (id, row) => row.status == 'open' ?(
        <Popconfirm
          title="Are you sure want to close this request?"
          onConfirm={() => onResultClose(id)}
          onCancel={() => {console.log(row)}}
          okText="Yes"
          cancelText="No">
          <Button
          size={"small"}
            type="primary">Close</Button>
        </Popconfirm>
      ): (<span style={{color: 'red'}}>{row.status}</span>)
    },
  ];

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
