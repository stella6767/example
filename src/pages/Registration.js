import { Checkbox, Form, Input } from 'antd';
import { Button } from 'antd/lib/radio';
import React, { memo, useState } from 'react';

import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

const Registration = memo(() => {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
    isPaneOpenBottom: false,
  });

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div>
        <button
          onClick={() =>
            setState({ isPaneOpenBottom: true })
          }
        >
          fsdsdfa
        </button>
      </div>

      <SlidingPane
        closeIcon={<div>close</div>}
        isOpen={state.isPaneOpenBottom}
        title="회원가입"
        from="bottom"
        width="100%"
        onRequestClose={() =>
          setState({ isPaneOpenBottom: false })
        }
      >
        <div className="registerForm">
          <Form
            name="register"
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 12 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="ID"
              name="ID"
              rules={[
                {
                  required: true,
                  message:
                    'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="AGE"
              name="AGE"
              rules={[
                {
                  required: true,
                  message:
                    'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="First Name"
              name="First Name"
              rules={[
                {
                  required: true,
                  message:
                    'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Height"
              name="Height"
              rules={[
                {
                  required: true,
                  message:
                    'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="LAST NAME"
              name="LAST NAME"
              rules={[
                {
                  required: true,
                  message:
                    'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Weight"
              name="Weight"
              rules={[
                {
                  required: true,
                  message:
                    'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="GENDER"
              name="GENDER"
              rules={[
                {
                  required: true,
                  message:
                    'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Comment"
              name="Comment"
              rules={[
                {
                  required: true,
                  message:
                    'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Form>
        </div>
      </SlidingPane>
    </>
  );
});

export default Registration;
