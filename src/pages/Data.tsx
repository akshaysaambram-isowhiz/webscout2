import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Table, { ColumnConfig } from "../components/Table";

import { Card, data } from "../data/cards";
import {
  AlertCircle,
  Bookmark,
  ChartNoAxesCombined,
  DollarSign,
  Download,
  RefreshCw,
  Share2,
} from "lucide-react";

export default function Data() {
  const { programName } = useParams();

  const columns: ColumnConfig<Partial<Card>>[] = [
    {
      header: "Website",
      accessor: "website",
      sortable: true,
    },
    {
      header: "Current Price",
      accessor: "price",
      formatter: (value) => `$${value.toFixed(2)}`,
      sortable: true,
    },
    {
      header: "Avg. Price",
      accessor: "avgPrice",
      formatter: (value) => `$${value.toFixed(2)}`,
      sortable: true,
    },
  ];

  return (
    <div className="space-y-4 px-8 py-4">
      <Navbar />

      <div className="space-y-8">
        <div className="space-y-4">
          <div className="divide-y divide-gray-200 rounded-lg p-2 shadow-md">
            <div className="p-2">
              <h4 className="text-base">Program Name</h4>
              <p className="text-sm font-bold lg:text-xl">{programName}</p>
            </div>
            <div className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x">
              <div className="p-2">
                <h5 className="text-sm">SKU</h5>
                <p className="text-lg font-bold">234364</p>
              </div>
              <div className="p-2">
                <h5 className="text-sm">Sport</h5>
                <p className="text-lg font-bold">Football</p>
              </div>
              <div className="p-2">
                <h5 className="text-sm">Type</h5>
                <p className="text-lg font-bold">Case</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <PriceCard price={121.45} title="Average Price" />
          <PriceCard
            price={123.45}
            title="Lowest Price (12/26/2024 in Da Card World)"
          />
        </div>

        {/* <div className="flex space-x-4">
          <ActionButton
            icon={<Bookmark className="h-4 w-4" />}
            label="Save"
            onClick={() => {}}
          />
          <ActionButton
            icon={<Share2 className="h-4 w-4" />}
            label="Share"
            onClick={() => {}}
          />
          <ActionButton
            icon={<RefreshCw className="h-4 w-4" />}
            label="Refresh"
            onClick={() => {}}
          />
        </div> */}

        <div className="space-y-4">
          <div className="flex justify-between">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Price Comparison
              </h2>
              <p className="text-sm text-gray-500">
                Compare prices across different retailers
              </p>
            </div>
            <div>
              <ActionButton
                icon={<Download className="h-4 w-4" />}
                label="Export to CSV"
                onClick={() => {}}
              />
            </div>
          </div>
          <Table
            columns={columns}
            data={data}
            route={`/data/${programName}/analytics`}
            routeParam="website"
            pageSize={10}
            actions={true}
            emptyMessage="No cards found"
          />
        </div>
      </div>
    </div>
  );
}

function PriceCard({ price, title }: { price: number; title: string }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="mt-1 text-2xl font-bold">${price}</p>
        </div>
        <div className="rounded-full bg-blue-50 p-3">
          <ChartNoAxesCombined className="h-6 w-6 text-yellow-500" />
        </div>
      </div>
    </div>
  );
}

function ActionButton({
  icon,
  label,
  onClick,
}: {
  icon: any;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
