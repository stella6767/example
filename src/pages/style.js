//page별 css

import { Form } from 'antd';
import styled, {
  createGlobalStyle,
} from 'styled-components';

export const StyledMainDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(800px, 1fr)
  );
  row-gap: 2rem;
  column-gap: 2rem;
  margin-bottom: 100px;
`;

export const StyledRegisterFormDiv = styled.div`
  padding-left: 10rem;
  padding-right: 10rem;
  padding-top: 5rem;

  .register-form-button-box {
    display: flex;
    justify-content: center;
    margin-top: 3rem;

    .ant-radio-button-wrapper {
      position: relative;
      display: inline-block;
      height: 50px;
      width: 300px;
      margin: 0 15px;
      padding: 5px 0px;
      text-align: center;
      color: rgba(0, 0, 0, 0.85);

      font-size: 20px;
      line-height: 30px;
      background: #fff;
      border: 1px solid #d9d9d9;
      border-top-width: 1.02px;
      border-left-width: 0;
      cursor: pointer;
      transition: color 0.3s, background 0.3s,
        border-color 0.3s, box-shadow 0.3s;
    }
  }
`;

export const StyledRegisterForm = styled.form`
  //flex-wrap: nowrap;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(800px, 1fr)
  );
  row-gap: 2rem;
  column-gap: 2rem;
`;

export const StyldRegisterFormItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  div {
    text-align: center;
    width: 30%;
  }

  .ant-input {
    border-radius: 0.5rem;
    margin-left: 1rem;
    width: 70%;
  }
`;

export const Global = createGlobalStyle`








`;
