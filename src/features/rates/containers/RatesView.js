import React from 'react';
import { useSelector } from 'react-redux'
import { RatesChart } from '../components';
import { ratesDataSelect } from '../selectors';


export const RatesView = () => {
  const data = useSelector(ratesDataSelect);

  return (
    <>
      <RatesChart data={data} usdKey='usd' eurKey='eur' timeKey='time' />
    </>
  )
}