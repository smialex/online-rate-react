import React from "react";
import format from "date-fns/format";
import "./RatesTable.scss";

type RatesTableProps = {
  data?: ReadonlyArray<{
    time: number;
    usd: number;
    eur: number;
  }>;
};

export const RatesTable: React.FC<RatesTableProps> = ({ data }) => {
  const hasData = data && data.length > 0;

  return (
    <table className="rates-table">
      <thead>
        <tr>
          <th>Время</th>
          <th>USD</th>
          <th>EUR</th>
        </tr>
      </thead>
      <tbody>
        {hasData &&
          data?.map(({ time, usd, eur }) => (
            <tr key={time}>
              <td>{format(time, "HH:mm:ss")}</td>
              <td>{Number(usd).toFixed(3)}</td>
              <td>{Number(eur).toFixed(3)}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
