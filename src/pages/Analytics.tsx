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
import Table, { ColumnConfig } from "../components/Table";

import { analytics, Card } from "../data/cards";
import {
  ArrowDownRight,
  ArrowUpRight,
  Calendar,
  RefreshCw,
  TrendingUp,
  Users,
} from "lucide-react";

export default function Analytics() {
  const columns: ColumnConfig<Partial<Card>>[] = [
    {
      header: "Date",
      accessor: "date",
      sortable: true,
    },
    {
      header: "Price",
      accessor: "price",
      formatter: (value) => `$${value.toFixed(2)}`,
      sortable: true,
    },
  ];

  return (
    <div className="space-y-4 px-8 py-4">
      <Navbar />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <StatCard
          title="Current Price"
          value="28.4K"
          icon={TrendingUp}
          change="+14.2%"
          changeType="increase"
        />
        <StatCard
          title="Average Price"
          value="4.28%"
          icon={TrendingUp}
          change="-2.1%"
          changeType="decrease"
        />
      </div>

      <div className="space-y-8">
        <div className="space-y-4 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Analytics Dashboard
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Track your key metrics and performance indicators
              </p>
            </div>
            <ChartControls onRefresh={() => {}} />
          </div>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={analytics}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff2" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#ff2" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  className="stroke-gray-200"
                />
                <XAxis
                  dataKey="date"
                  stroke="#6b7280"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#6b7280"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.5rem",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="price"
                  stroke="#ff0"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-4">
          <div className="mb-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Performance Overview
                </h2>
                <p className="text-sm text-gray-500">
                  Monitor your site's performance metrics
                </p>
              </div>
            </div>
          </div>
          <Table
            columns={columns}
            data={analytics}
            pageSize={10}
            emptyMessage="No cards found"
          />
        </div>
      </div>
    </div>
  );
}

const StatCard = ({ title, value, icon: Icon, change, changeType }) => (
  <div className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
      <div className="rounded-lg bg-blue-50 p-3">
        <Icon className="h-6 w-6 text-blue-500" />
      </div>
    </div>
    <div className="mt-4 flex items-center space-x-2">
      {changeType === "increase" ? (
        <ArrowUpRight className="h-4 w-4 text-green-500" />
      ) : (
        <ArrowDownRight className="h-4 w-4 text-red-500" />
      )}
      <span
        className={`text-sm ${changeType === "increase" ? "text-green-500" : "text-red-500"}`}
      >
        {change}
      </span>
    </div>
  </div>
);

const ChartControls = ({ onRefresh }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-4">
      <select className="rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none">
        <option>Last 7 days</option>
        <option>Last 30 days</option>
        <option>Last 90 days</option>
      </select>
      <button
        onClick={onRefresh}
        className="flex items-center space-x-2 rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50"
      >
        <RefreshCw className="h-4 w-4" />
        <span>Refresh</span>
      </button>
    </div>
  </div>
);
