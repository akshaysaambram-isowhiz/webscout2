import { useState } from "react";
import Header, { SearchValues } from "../components/Header";
import Navbar from "../components/Navbar";
import Table, { ColumnConfig } from "../components/Table";

import { Card, cards } from "../data/cards";

export default function Home() {
  const columns: ColumnConfig<Partial<Card>>[] = [
    {
      header: "Collection",
      accessor: "collection",
    },
    {
      header: "SKU",
      accessor: "sku",
    },
    {
      header: "Program Name",
      accessor: "programName",
      sortable: true,
    },
    {
      header: "Type",
      accessor: "type",
    },
    {
      header: "Avg. Price",
      accessor: "price",
      formatter: (value) => `$${value.toFixed(2)}`,
      sortable: true,
    },
  ];

  const [searchValues, setSearchValues] = useState<SearchValues>({
    sport: "",
    programName: "",
    sku: "",
    collection: "",
    website: "",
    productDesc: "",
    date: "",
  });

  return (
    <div className="space-y-4 px-8 py-4">
      <Navbar />

      <div className="space-y-8">
        <Header onSearch={setSearchValues} />

        <div className="space-y-2">
          <h2 className="text-lg font-bold">Searched Parameters</h2>
          {Object.entries(searchValues).map(
            ([key, value]) =>
              value && (
                <div key={key} className="flex items-center space-x-2">
                  <span className="font-bold">{key.toUpperCase()}:</span>

                  <span>
                    {key === "date"
                      ? new Date(value).toLocaleDateString()
                      : value}
                  </span>
                </div>
              )
          )}
        </div>

        <Table
          columns={columns}
          data={cards}
          route="/data"
          routeParam="programName"
          pageSize={10}
          emptyMessage="No cards found"
          actions={true}
          changePercent={true}
        />
      </div>
    </div>
  );
}
