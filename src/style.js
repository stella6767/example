// 전역 스타일

import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

 .ant-layout-content {
  padding-top: 5rem;
} 


.slide-pane__overlay {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0);
}

.slide-pane_from_bottom {
  height: 90vh;
  margin-top: 40vh;
  transform: translateY(100%);
}

`;
