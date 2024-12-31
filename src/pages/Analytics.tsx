import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import Navbar from "../components/Navbar";
import Table from "../components/Table";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Analytics() {
  return (
    <div className="space-y-8 px-8 py-4">
      <Navbar />

      <div className="space-y-4 rounded-lg p-6 shadow-md">
        <div className="space-y-2">
          <h4 className="text-lg font-bold">Analytics</h4>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            dolores sit, minima in officiis distinctio id sunt debitis.
          </p>
        </div>
        <div className="h-72 w-full space-y-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#fff200"
                fill="#fff20055"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-base font-bold lg:text-lg">Data</h4>
        <Table />
      </div>
    </div>
  );
}
