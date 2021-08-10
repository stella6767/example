import { Input } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import Radio, { Button } from 'antd/lib/radio';

import React, {
  memo,
  useEffect,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';

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

  const { register, handleSubmit } = useForm();

  //const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);

    //dispatch(~~ACtion(data)); //요렇게 호출하세요.
  };

  const [value, setValue] = React.useState(null);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
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
        title="Patient Registration"
        from="bottom"
        width="100%"
        onRequestClose={() =>
          setState({ isPaneOpenBottom: false })
        }
      >
        <StyledRegisterFormDiv>
          <StyledRegisterForm name="patient_register">
            <StyldRegisterFormItem>
              <div>ID</div>
              <Input {...register('ID')} />
            </StyldRegisterFormItem>

            <StyldRegisterFormItem>
              <div>Age</div>
              <Input {...register('Age')} />
            </StyldRegisterFormItem>

            <StyldRegisterFormItem>
              <div>First Name</div>
              <Input
                {...register('First Name')}
              />
            </StyldRegisterFormItem>

            <StyldRegisterFormItem>
              <div>Height</div>
              <Input {...register('Height')} />
            </StyldRegisterFormItem>

            <StyldRegisterFormItem>
              <div>Last Name</div>
              <Input {...register('Last Name')} />
            </StyldRegisterFormItem>

            <StyldRegisterFormItem>
              <div>Weight</div>
              <Input {...register('Weight')} />
            </StyldRegisterFormItem>

            <StyldRegisterFormItem>
              <div>Gender</div>
              <input
                {...register('gender')}
                type="radio"
                name="gender"
                value="male"
                id="male"
              />
              Male
              <input
                {...register('gender')}
                type="radio"
                name="gender"
                value="female"
                id="female"
              />
              Female
            </StyldRegisterFormItem>

            <StyldRegisterFormItem>
              <div>Comment</div>
              <Input {...register('Comment')} />
            </StyldRegisterFormItem>
          </StyledRegisterForm>

          <div className="register-form-button-box">
            <Button
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              ok
            </Button>

            <Button
              onClick={() => {
                console.log('취소');
              }}
            >
              cancel
            </Button>
          </div>
        </StyledRegisterFormDiv>
      </SlidingPane>
    </>
  );
});

export default Registration;
