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
  padding-left: 5rem;
  padding-right: 5rem;
`;

export const StyledRegisterForm = styled(Form)`
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
  width: 50%;
  display: flex;
`;

export const Global = createGlobalStyle`


.ant-input{
  border-radius: 0.5rem;
}





`;
