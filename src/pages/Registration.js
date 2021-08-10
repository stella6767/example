import { Form, Input } from 'antd';
import { Button } from 'antd/lib/radio';
import React, { memo, useState } from 'react';

import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import {
  Global,
  StyldRegisterFormItem,
  StyledRegisterForm,
  StyledRegisterFormDiv,
} from './style';

const Registration = memo(() => {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
    isPaneOpenBottom: false,
  });

  const [registerForm] = Form.useForm();

  const onJoinFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <Global />
      <div>
        <button
          onClick={() =>
            setState({ isPaneOpenBottom: true })
          }
        >
          회원가입 division view
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
        <StyledRegisterFormDiv>
          <StyledRegisterForm
            form={registerForm}
            name="patient_register"
            onFinish={onJoinFinish}
          >
            <Form.Item
              label="ID"
              name="id"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </StyledRegisterForm>
        </StyledRegisterFormDiv>
      </SlidingPane>
    </>
  );
});

export default Registration;
