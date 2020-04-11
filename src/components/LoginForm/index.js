import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import {
  formItemLayout,
  tailFormItemLayout,
} from "@components/VolunteerForm/layout";

function LoginForm({ handleSubmit, handleError }) {
  const onFinish = (values) => {
    handleSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    handleError(errorInfo);
  };

  return (
    <Form
      {...formItemLayout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
          {
            type: "email",
            message: "Input is not a valid E-mail!",
          },
        ]}
      >
        <Row>
          <Col span={20}>
            <Input />
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Row>
          <Col span={20}>
            <Input.Password />
          </Col>
        </Row>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
