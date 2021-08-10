import { Select, Table } from 'antd';
import React, { memo } from 'react';
import styled from 'styled-components';

const StyledManageDiv = styled.div`
  display: flex;
`;

const StyledSelectorBox = styled(Select)``;

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const Patientlist = memo(() => {
  return (
    <>
      <div>
        <div>Patient Manager</div>
        <StyledManageDiv>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </StyledManageDiv>

        <div>
          <Table
            dataSource={dataSource}
            columns={columns}
          />
          ;
        </div>
      </div>
    </>
  );
});

export default Patientlist;
