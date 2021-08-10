import { Table } from 'antd';
import React, { memo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ReactSlidingPane from 'react-sliding-pane';
import { loadPatientsAction } from '../reducers/patient';
import { Global } from '../style';

const PatientList = memo(() => {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
    isPaneOpenBottom: false,
  });

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Last Session',
      dataIndex: 'lastSession',
      key: 'lastSession',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Height(cm)',
      dataIndex: 'height',
      key: 'height',
    },
    {
      title: 'Weight(kg)',
      dataIndex: 'weight',
      key: 'weight',
    },
  ];

  const { patientsPosts } = useSelector(
    ({ patient }) => ({
      patientsPosts: patient.patientsPosts,
    }),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPatientsAction());
    console.log('더미데이터 최초 한번 받아옴');
    dispatch(loadPatientsAction(10));
  }, []);

  return (
    <>
      <Global />
      <div>
        <button
          onClick={() =>
            setState({ isPaneOpenBottom: true })
          }
        >
          Manage division view
        </button>
      </div>
      <ReactSlidingPane
        closeIcon={<div>close</div>}
        isOpen={state.isPaneOpenBottom}
        title="Patient Manager"
        from="bottom"
        width="100%"
        onRequestClose={() =>
          setState({ isPaneOpenBottom: false })
        }
      >
        <Table
          columns={columns}
          dataSource={patientsPosts}
        />
      </ReactSlidingPane>
    </>
  );
});

export default PatientList;
