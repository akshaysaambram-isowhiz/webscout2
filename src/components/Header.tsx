import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

import Input from "./Input";
import DatePicker from "./DatePicker";

export type SearchValues = {
  sport: string;
  programName: string;
  sku: string;
  collection: string;
  website: string;
  productDesc: string;
  date: string;
};

type HeaderProps = {
  onSearch: (values: SearchValues) => void;
};

export default function Header({ onSearch }: HeaderProps) {
  const [advancedSearchChecked, setAdvancedSearchChecked] = useState(false);
  const [searchValues, setSearchValues] = useState<SearchValues>({
    sport: "",
    programName: "",
    sku: "",
    collection: "",
    website: "",
    productDesc: "",
    date: "",
  });

  const handleInputChange = (field: keyof SearchValues, value: string) => {
    const newValues = { ...searchValues, [field]: value };
    setSearchValues(newValues);
    onSearch(newValues);
  };

  const handleClear = (field: keyof SearchValues) => {
    handleInputChange(field, "");
  };

  const handleReset = () => {
    setSearchValues({
      sport: "",
      programName: "",
      sku: "",
      collection: "",
      website: "",
      productDesc: "",
      date: "",
    });
    onSearch({
      sport: "",
      programName: "",
      sku: "",
      collection: "",
      website: "",
      productDesc: "",
      date: "",
    });
    setAdvancedSearchChecked(false);
  };

  const handleSearch = () => {
    console.log("Search values:", searchValues);
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-medium text-gray-900">
            Search Program Names
          </h4>
          {Object.values(searchValues).some(Boolean) && (
            <button
              onClick={handleReset}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Reset all filters
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Input
            name="collection"
            placeholder="Collection"
            value={searchValues.collection}
            onChange={(value) => handleInputChange("collection", value)}
            onClear={() => handleClear("collection")}
          />
          <Input
            name="sku"
            placeholder="SKU"
            value={searchValues.sku}
            onChange={(value) => handleInputChange("sku", value)}
            onClear={() => handleClear("sku")}
          />
          <Input
            name="programName"
            placeholder="Program Name"
            value={searchValues.programName}
            onChange={(value) => handleInputChange("programName", value)}
            onClear={() => handleClear("programName")}
          />
          <Input
            name="sport"
            placeholder="Sport"
            value={searchValues.sport}
            onChange={(value) => handleInputChange("sport", value)}
            onClear={() => handleClear("sport")}
          />
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setAdvancedSearchChecked(!advancedSearchChecked)}
            className="group inline-flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            <ChevronDown
              className={`size-4 transition-transform duration-200 ${
                advancedSearchChecked ? "rotate-180" : ""
              }`}
            />
            <span>Advanced Search</span>
          </button>
        </div>

        <div
          className={`grid grid-cols-1 gap-4 transition-all duration-300 ease-in-out md:grid-cols-2 lg:grid-cols-4 ${
            advancedSearchChecked
              ? "visible opacity-100"
              : "invisible h-0 opacity-0"
          }`}
        >
          <Input
            name="website"
            type="text"
            placeholder="Website"
            value={searchValues.website}
            onChange={(value) => handleInputChange("website", value)}
            onClear={() => handleClear("website")}
          />
          <Input
            name="productDesc"
            type="text"
            placeholder="Product Description"
            value={searchValues.productDesc}
            onChange={(value) => handleInputChange("productDesc", value)}
            onClear={() => handleClear("productDesc")}
          />
        </div>

        <div className="flex justify-end space-x-3">
          <div className="">
            <DatePicker
              onChange={(value) =>
                handleInputChange("date", value.toISOString())
              }
            />
          </div>
          <button
            onClick={handleSearch}
            className="inline-flex items-center space-x-2 rounded-lg bg-yellow-500 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            <Search className="size-4" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}
