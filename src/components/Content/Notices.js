import React from "react";
import Wrapper from "./Wrapper";

import { Table } from 'antd';

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    sorter: (a, b) => new Date(a.date) - new Date(b.date),
    defaultSortOrder: 'descend',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Document',
    dataIndex: 'document',
    key: 'document',
    render: text => <a href={text} target="_new">View</a>,
  },
];

const data = [
  {
    date: '04-Jun-2020',
    description: 'Donations made by all organizations',
    document: "https://drive.google.com/file/d/1keNkLiGJxQ-ahd03mU4_WOMONBQpSkWt/view?usp=drivesdk",
  },
];

const Notices = () => (
  <Wrapper>
    <Table columns={columns} dataSource={data} />
  </Wrapper>
);

export default Notices;
