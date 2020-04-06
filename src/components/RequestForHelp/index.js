import React from 'react';
import { Form, Input, Row, Col, Button } from 'antd';
import {RegionSelect} from '@components/VolunteerForm/Fields/Select';
const { TextArea } = Input;

const RequestForHelpForm = props => {
    
    const formItemLayout = {
        labelCol: {
          xs: { span: 4 },
          sm: { span: 4 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      };

    const buttonLayout = {
        wrapperCol: {
            xs: {
            span: 2,
            offset: 0
            },
            sm: {
            span: 4,
            offset: 2
            }
        }
    };

    return (
        <div style={{textAlign: "left", paddingLeft: '10px'}}>
            <h2>Request For Help</h2>
            <Form
                {...formItemLayout}
                initialValues={props.initialValues}
                onFinish={props.handleSubmit}>
                <Form.Item label="Name" name="name"
                    rules={[
                        {
                            required: true,
                            message: "Name is required.",
                        },
                    ]}>
                    <Row gutter={8}>
                        <Col span={8}>
                            <Input placeholder="Enter your Name" />
                        </Col>
                    </Row>
                </Form.Item>

                <Form.Item label="Mobile Number" name="mobile"
                    rules={[
                        {
                            required: true,
                            message: "Mobile number is required.",
                        },
                        {
                        len: 10,
                        message: "Mobile number must be 10 digits.",
                        },
                    ]}>
                    <Row gutter={8}>
                        <Col span={8}>
                            <Input placeholder="Enter your Mobile Number" />
                        </Col>
                    </Row>
                </Form.Item>

                <Form.Item label="Address" name="address"
                    rules={[
                        {
                            required: true,
                            message: "Address Field is required.",
                        },
                    ]}>
                    <Row gutter={8}>
                        <Col span={12}>
                            <TextArea
                            maxLength={100}
                            type="textarea"
                            rows={4}
                            placeholder="Enter your address"
                            />
                        </Col>
                    </Row>
                </Form.Item>

                <Form.Item label="Area" name="area"
                    rules={[
                        {
                            required: true,
                            message: "Area is required.",
                        },
                    ]}>
                    <Row gutter={8}>
                        <Col span={8}>
                            <Input placeholder="Enter area/locality" />
                        </Col>
                    </Row>
                </Form.Item>

                <RegionSelect options={props.options}/>

                <Form.Item label="Pin" name="pin"
                    rules={[
                        {
                            required: true,
                            message: "Pin is required",
                        },

                        {
                            len: 6,
                            message: "Pin must be 6 digits.",
                        },
                    ]}>
                    <Row gutter={8}>
                        <Col span={8}>
                            <Input placeholder="Enter pin code." />
                        </Col>
                    </Row>
                </Form.Item>

                <Form.Item label="Description" name="desc"
                    rules={[
                        {
                            required: true,
                            message: "Description is required.",
                        },
                    ]}>
                    <Row gutter={8}>
                        <Col span={12}>
                            <TextArea
                            type="textarea"
                            rows={4}
                            placeholder="Please enter description."
                            />
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item {...buttonLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default RequestForHelpForm;