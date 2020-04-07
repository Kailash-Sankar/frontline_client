import React, { useEffect } from 'react';
import { Form, Input, Row, Col, Button } from 'antd';
import {RegionSelect} from '@components/VolunteerForm/Fields/Select';
const { TextArea } = Input;
import { 
    MobileField,
    AddressField, 
    PinField,
    NameField

} from '@components/VolunteerForm/Fields/Input'

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

    const [form] = Form.useForm();
    const { resetFields } = form;

    useEffect(() => {
        resetFields();
      }, [props.reset]);

    return (
        <div style={{textAlign: "left", paddingLeft: '10px'}}>
            <h2>Request For Help</h2>
            <Form
                form={form}
                {...formItemLayout}
                initialValues={props.initialValues}
                onFinish={props.handleSubmit}>
                
                <NameField/>
                <MobileField/>
                <AddressField/>

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

                <PinField/>

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