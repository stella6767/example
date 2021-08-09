import React, { memo } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import PatientInfo from '../components/PatientInfo';
import { loadPostsAction } from '../reducers/patient';
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
    dispatch(loadPostsAction());
    console.log('더미데이터 최초 한번 받아옴');
    dispatch(loadPostsAction(10));
  }, []);

  return (
    <>
      <Global />
      <AppLayout>
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
