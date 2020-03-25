import React from "react";
import { useSelector } from "react-redux";
import { RatesChart, RatesTable } from "../components";
import { ratesDataSelect, ratesDataLimitedSelect } from "../selectors";

export const RatesView: React.FC = () => {
  const data = useSelector(ratesDataSelect);
  const rows = useSelector(ratesDataLimitedSelect);

  return (
    <>
      <RatesChart data={data} usdKey="usd" eurKey="eur" timeKey="time" />
      <RatesTable data={rows} />
    </>
  );
};
