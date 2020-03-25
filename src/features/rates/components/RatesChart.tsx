import React from "react";
import format from "date-fns/format";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from "recharts";

type RatesChartProps = {
  data?: ReadonlyArray<object> | null | undefined;
  usdKey: string;
  eurKey: string;
  timeKey: string;
};

export const RatesChart: React.FC<RatesChartProps> = ({
  data,
  usdKey,
  eurKey,
  timeKey
}) => {
  if (!data || data.length === 0) return null;

  return (
    <LineChart
      width={730}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey={timeKey}
        tickFormatter={unixTime => format(unixTime, "HH:mm:ss")}
        domain={["dataMin", "dataMax"]}
        type="number"
      />
      <YAxis />
      <Tooltip labelFormatter={unixTime => format(+unixTime, "HH:mm:ss")} />
      <Legend />
      <Line type="monotone" dataKey={usdKey} stroke="#8884d8" />
      <Line type="monotone" dataKey={eurKey} stroke="#82ca9d" />
    </LineChart>
  );
};
