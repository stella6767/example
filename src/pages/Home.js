import React, { memo } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import PatientInfo from '../components/PatientInfo';
import { loadPatientsAction } from '../reducers/patient';
import { testAction } from '../reducers/test';
import { Global } from '../style';
import { StyledMainDiv } from './style';

const Home = memo(() => {
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

  const getConnect = () => {
    dispatch(testAction());
  };

  return (
    <>
      <Global />
      <AppLayout>
        <button onClick={getConnect}>
          Test 통신
        </button>
        <StyledMainDiv>
          {patientsPosts.map((c) => (
            <PatientInfo
              key={c.id}
              content={c.content}
            />
          ))}
        </StyledMainDiv>
      </AppLayout>
    </>
  );
});

export default Home;
