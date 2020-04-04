import React from "react";
import { Form, Input, Button, Select } from "antd";
const { TextArea } = Input;
const { Option } = Select;

const layout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 12
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

function AppealForm({ handleSubmit, handleError }) {
  const onFinish = (values) => {
    handleSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    handleError(errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Appeal"
        name="appeal"
        rules={[
          {
            required: true,
            message: "A brief appeal is required."
          }
        ]}
      >
        <TextArea
          rows={4}
          placeholder={"Please describe your need as precisely as possible"}
        />
      </Form.Item>

      <Form.Item
        name="tags"
        label="Tags"
        //rules={[{ required: false, message: 'Please select', type: 'array' }]}
      >
        <Select mode="tags" placeholder="Please select applcable tags.">
          <Option value="food">Food</Option>
          <Option value="groceries">Groceries</Option>
          <Option value="medicines">Medicines</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AppealForm;
