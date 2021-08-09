//page별 css

import styled from 'styled-components';

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
