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

import { analytics } from "../data/cards";

export default function Analytics() {
  return (
    <div className="space-y-4 px-8 py-4">
      <Navbar />

      <div className="space-y-8">
        <div className="space-y-4 rounded-lg p-6 shadow-md">
          <div className="space-y-2">
            <h4 className="text-lg font-bold">Analytics</h4>
            <p className="text-sm text-gray-400">
              This page shows the price history for the selected program.
            </p>
          </div>
          <div className="h-72 w-full space-y-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={400}
                data={analytics}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="price"
                  stroke="#fff200"
                  fill="#fff20055"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-base font-bold lg:text-lg">
            Price History grouped by date
          </h4>
          <Table
            headers={["Date", "Price"]}
            cols={["date", "price"]}
            data={analytics}
          />
        </div>
      </div>
    </div>
  );
}
