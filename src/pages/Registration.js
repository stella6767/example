import { Input } from 'antd';

import React, {
  memo,
  useEffect,
  useState,
} from 'react';

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

  const onJoinFinish = (values) => {
    console.log(values);
  };

  const [register, setRegister] = useState({
    id: '',
    age: '',
    firstName: '',
    height: '',
    lastName: '',
    weight: '',
    gender: '',
    comment: '',
  });

  useEffect(() => {
    console.log('실시간 register', register);
  }, [register]);

  const handleWrite = (e) => {
    e.preventDefault(); // form태그가 하려는 액션을 중지 시켜야 함.
    console.log('가입');
    setRegister(register);
  };

  const handleForm = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    //computed property names 문법(키 값 동적할당)
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    }); //변수 키값을 동적으로 만들어냄...자바에는 없는 문법
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
            name="patient_register"
            onFinish={onJoinFinish}
          >
            <StyldRegisterFormItem>
              <div>ID</div>
              <Input
                type="text"
                value={register.id} //value에 상태값을 주고
                onChange={handleForm} //상태값이 들어옴으로서 input 이 변경이 안 됨 이때 onchange함수가 등장
                name="id"
              />
            </StyldRegisterFormItem>

            <StyldRegisterFormItem>
              <div>name</div>
              <Input
                type="text"
                value={register.firstName} //value에 상태값을 주고
                onChange={handleForm} //상태값이 들어옴으로서 input 이 변경이 안 됨 이때 onchange함수가 등장
                name="firstName"
              />
            </StyldRegisterFormItem>

            <StyldRegisterFormItem>
              <div>password</div>
              <Input
                type="text"
                value={register.age} //value에 상태값을 주고
                onChange={handleForm} //상태값이 들어옴으로서 input 이 변경이 안 됨 이때 onchange함수가 등장
                name="age"
              />
            </StyldRegisterFormItem>

            <button
              type="button"
              onClick={handleWrite}
            >
              글쓰기
            </button>
          </StyledRegisterForm>
        </StyledRegisterFormDiv>
      </SlidingPane>
    </>
  );
});

export default Registration;
