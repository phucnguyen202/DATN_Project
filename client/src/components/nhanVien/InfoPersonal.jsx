import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Info from '../Info';

const InfoPersonal = () => {
  const user = useSelector(state => state?.auth?.currentData?.user)

  return (
    <>
      <Info
        user={user}
      />
    </>
  );
}

export default InfoPersonal