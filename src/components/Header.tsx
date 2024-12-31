import { useState } from "react";

import Input from "./Input";

export default function Header() {
  const [advancedSearchChecked, setAdvancedSearchChecked] = useState(false);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        <Input name="Search" placeholder="Search" type="text" label="Sport" />
        <Input
          name="Search"
          placeholder="Search"
          type="text"
          label="Project Name"
        />
        <Input name="Search" placeholder="Search" type="text" label="SKU" />
        <Input name="Search" placeholder="Search" type="text" label="Title" />
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="size-4 accent-yellow-500"
          onChange={(e) => setAdvancedSearchChecked(e.target.checked)}
        />
        <label className="text-sm font-medium text-gray-700">
          Advanced Search
        </label>
      </div>
      <div
        className={`grid grid-cols-1 gap-2 transition-all duration-500 ease-in-out md:grid-cols-2 lg:grid-cols-4 ${
          advancedSearchChecked
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        style={{
          maxHeight: advancedSearchChecked ? "100vh" : 0,
        }}
      >
        <Input name="Search" placeholder="Search" type="text" label="Sport" />
        <Input
          name="Search"
          placeholder="Search"
          type="text"
          label="Project Name"
        />
      </div>

      <div className="flex justify-end">
        <button className="rounded bg-yellow-500 px-4 py-2 font-bold text-white transition-all duration-300 ease-in-out hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
          Search
        </button>
      </div>
    </div>
  );
}
