import React from "react";
import { Table } from "antd";
import Details from "./Details";
import { getPaginationObject, renderStatus } from "../utils";

/**
 * This function is used to render the Ngo search results on the page.
 * @param {*} param0
 */
function NGOSearchResults({
  result,
  pagination,
  onPageChange,
  onShowSizeChange,
  onResultClose,
}) {
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
      title: "Date",
      dataIndex: "createdAt",
    },
    {
      title: "Contact Person",
      dataIndex: "person",
    },
    {
      title: "Covid-19 Services",
      dataIndex: "covid19",
    },
    {
      title: "Action",
      dataIndex: "_id",
      render: (id, row) => renderStatus(id, row, onResultClose),
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

export default NGOSearchResults;
