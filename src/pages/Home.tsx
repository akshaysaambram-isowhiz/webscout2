import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

import { cards } from "../data/cards";

export default function Home() {
  return (
    <div className="space-y-8 px-8 py-4">
      <Navbar />
      <Header />
      <Table
        headers={["Program Name", "SKU", "Price"]}
        cols={["programName", "sku", "price"]}
        data={cards}
        route="/data"
        routeParam="programName"
      />
    </div>
  );
}
