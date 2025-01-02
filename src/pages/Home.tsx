import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Table, { ColumnConfig } from "../components/Table";

import { Card, cards } from "../data/cards";

export default function Home() {
  const columns: ColumnConfig<Partial<Card>>[] = [
    {
      header: "Program Name",
      accessor: "programName",
      sortable: true,
    },
    {
      header: "SKU",
      accessor: "sku",
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

      <div className="space-y-8">
        <Header />
        <Table
          columns={columns}
          data={cards}
          route="/data"
          routeParam="programName"
          pageSize={10}
          emptyMessage="No cards found"
        />
      </div>
    </div>
  );
}
