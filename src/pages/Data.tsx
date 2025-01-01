import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Table from "../components/Table";

import { data } from "../data/cards";

export default function Data() {
  const { programName } = useParams();

  return (
    <div className="space-y-8 px-8 py-4">
      <Navbar />

      <div className="space-y-4">
        <div className="divide-y divide-gray-200 rounded-lg p-2 shadow-md">
          <div className="p-2">
            <h4 className="text-lg font-bold lg:text-xl">Program Name</h4>
            <p className="text-sm text-gray-400 lg:text-base">{programName}</p>
          </div>
          <div className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-2 lg:divide-x">
            <div className="p-2">
              <h5 className="text-sm font-bold">SKU</h5>
              <p className="text-sm text-gray-400">234364</p>
            </div>
            <div className="p-2">
              <h5 className="text-sm font-bold">Average Price</h5>
              <p className="text-sm text-gray-400">$ 294.45</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-base font-bold lg:text-lg">
          Price History grouped by website
        </h4>
        <Table
          headers={["Website", "Average Price", "Price"]}
          cols={["website", "avgPrice", "price"]}
          data={data}
          route={`/data/${programName}/analytics`}
          routeParam="website"
        />
      </div>
    </div>
  );
}
