import { Card } from 'antd';
import React, { memo } from 'react';

const PatientInfo = memo((props) => {
  const { content } = props;

  return (
    <>
      <Card
        title="Default size card"
        extra={<a href="#">More</a>}
        style={{ width: 600 }}
      >
        <p>{content}</p>
        <p>Card content</p>
      </Card>
    </>
  );
});

export default PatientInfo;
