import React from "react";
import { Collapse, List } from "antd";
const { Panel } = Collapse;
import { formatDate } from "@components/Utils";

const statusMap = {
  "0": "Disabled",
  "1": "Internal",
  "2": "All"
};

export function RenderList({ data }) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item extra={statusMap[item.status]}>
          <List.Item.Meta title={item.name} description={item.description} />
        </List.Item>
      )}
    />
  );
}

const genExtra = (date) => (
  <span style={{ fontSize: 12, color: "#757575" }}>
    {`Singed Up at:${formatDate(date)}`}
  </span>
);

function SearchResults({ result }) {
  return (
    <div>
      <Collapse bordered={false} defaultActiveKey={[]}>
        {result.map((r) => {
          return (
            <Panel header={r.name} extra={genExtra(r.createdAt)} key={r.id}>
              <RenderList data={r.features} />
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
}

export default SearchResults;
