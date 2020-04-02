import React from "react";
import { TreeSelect } from "antd";
const { TreeNode } = TreeSelect;

export const ServiceSelector = ({ service, services, onChange }) => {
  return (
    <TreeSelect
      showSearch
      style={{ minWidth: 300 }}
      value={service}
      dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
      placeholder="Please select"
      allowClear
      multiple
      treeDefaultExpandAll
      onChange={onChange}
    >
      {services.map((s) => (
        <TreeNode key={s.id} value={s.id} title={s.title}>
          {s.options.map((o) => (
            <TreeNode
              key={`${s.id}_@_${o.id}`}
              value={`${s.id}_@_${o.id}`}
              title={o.value}
            />
          ))}
        </TreeNode>
      ))}
    </TreeSelect>
  );
};
