import React from "react";
import { Table } from "antd";
import Details from "./Details";

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

  ];

const RequestSearchResults = ({result}) => {
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
            expandRowByClick: true,
          }}
        />
      </div>
    </div>
      );
}

export default RequestSearchResults;