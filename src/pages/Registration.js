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
            name="basic"
            labelCol={{ span: 1 }}
            wrapperCol={{ span: 4 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
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
              label="Password"
              name="password"
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
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 1, span: 4 }}
            ></Form.Item>

            <Form.Item
              wrapperCol={{ offset: 1, span: 4 }}
            ></Form.Item>
          </Form>
        </div>
      </SlidingPane>
    </>
  );
});

export default Registration;
