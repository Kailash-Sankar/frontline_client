import React from "react";
import { Table, Button, Popconfirm } from "antd";
import Details from "./Details";
import { getStringAttr } from "@utils/Parser/strUtils";
import { getPaginationObject } from "../utils";

function SearchResults({ result, pagination, onPageChange, onShowSizeChange, onResultClose }) {
  const columns = [
    {
      title: "Medical",
      dataIndex: "services",
      key: "medical",
      render: (services) => getStringAttr(services.medical),
    },
    {
      title: "Food & Essential",
      dataIndex: "services",
      key: "nonmedical",
      render: (services) => getStringAttr(services.nonmedical),
    },
    {
      title: "Region",
      dataIndex: "region",
    },
    {
      title: "Submitted At",
      dataIndex: "createdAt",
    },

    {
      title: "Action",
      dataIndex: "_id",
      render: (id, row) => row.status == 'open' ?(
        <Popconfirm
          title="Are you sure want to close this request?"
          onConfirm={() => onResultClose(id)}
          onCancel={() => {}}
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
}

export default SearchResults;
