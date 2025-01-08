import React from 'react'
import { useSelector } from 'react-redux';
import Info from '../Info';
const InfoSupplier = () => {
  const user = useSelector(state => state?.auth?.currentData?.user)
  return (
    <>
      <Info
        user={user}
      />
    </>
  )
}

export default InfoSupplier