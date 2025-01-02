import { useNavigate } from "react-router-dom";
import {
  ChevronUp,
  ChevronDown,
  ArrowUpDown,
  ExternalLink,
} from "lucide-react";
import { useState, useCallback, useMemo } from "react";

// Type for sort direction
type SortDirection = "asc" | "desc" | null;

// Type for column configuration
export type ColumnConfig<T> = {
  header: string;
  accessor: keyof T;
  formatter?: (value: any) => React.ReactNode;
  sortable?: boolean;
  className?: string;
};

type TableProps<T> = {
  route?: string;
  routeParam?: keyof T;
  columns: ColumnConfig<T>[];
  data: T[];
  pageSize?: number;
  onRowClick?: (item: T) => void;
  isLoading?: boolean;
  emptyMessage?: string;
};

export default function Table<T>({
  route = "",
  routeParam,
  columns,
  data,
  pageSize = 10,
  onRowClick,
  isLoading = false,
  emptyMessage = "No data available",
}: TableProps<T>) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T | null;
    direction: SortDirection;
  }>({ key: null, direction: null });

  // Handle sorting
  const handleSort = useCallback((key: keyof T) => {
    setSortConfig((current) => ({
      key,
      direction:
        current.key === key
          ? current.direction === "asc"
            ? "desc"
            : current.direction === "desc"
              ? null
              : "asc"
          : "asc",
    }));
  }, []);

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortConfig.key || !sortConfig.direction) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key!];
      const bValue = b[sortConfig.key!];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortConfig.direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return sortConfig.direction === "asc"
        ? aValue > bValue
          ? 1
          : -1
        : bValue > aValue
          ? 1
          : -1;
    });
  }, [data, sortConfig]);

  // Pagination
  const totalPages = Math.ceil(sortedData.length / pageSize);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleRowClick = (item: T) => {
    if (onRowClick) {
      onRowClick(item);
    } else if (route) {
      if (!routeParam) return;
      navigate(`${route}/${item[routeParam]}`);
    }
  };

  // Loading skeleton
  if (isLoading) {
    return (
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <div className="animate-pulse">
          <div className="h-12 bg-gray-200" />
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-16 border-t border-gray-200 bg-gray-100"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative space-y-4">
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                {columns.map(({ header, accessor, sortable, className }) => (
                  <th
                    key={header}
                    scope="col"
                    className={`whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 ${
                      sortable ? "cursor-pointer hover:bg-gray-100" : ""
                    } ${className || ""}`}
                    onClick={() => sortable && handleSort(accessor)}
                  >
                    <div className="flex items-center space-x-1">
                      <span>{header}</span>
                      {sortable && (
                        <span className="inline-flex items-center">
                          {sortConfig.key === accessor ? (
                            sortConfig.direction === "asc" ? (
                              <ChevronUp size={16} />
                            ) : sortConfig.direction === "desc" ? (
                              <ChevronDown size={16} />
                            ) : (
                              <ArrowUpDown
                                size={16}
                                className="text-gray-400"
                              />
                            )
                          ) : (
                            <ArrowUpDown className="size-4 text-gray-400" />
                          )}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
                <th
                  scope="col"
                  className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                >
                  <div className="flex items-center space-x-1">
                    <span>Action</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {paginatedData.length > 0 ? (
                paginatedData.map((item) => (
                  <tr className="group transition-colors duration-200 hover:bg-yellow-50">
                    {columns.map(({ accessor, formatter, className }) => (
                      <td
                        key={accessor as string}
                        className={`whitespace-nowrap px-6 py-4 text-sm text-gray-900 ${
                          className || ""
                        }`}
                      >
                        {formatter
                          ? formatter(item[accessor])
                          : (item[accessor] as React.ReactNode)}
                      </td>
                    ))}
                    <td className="py-4">
                      <button
                        className="inline-flex items-center space-x-1 rounded-lg px-2 py-1 text-sm text-yellow-600"
                        onClick={() => handleRowClick(item)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleRowClick(item);
                          }
                        }}
                      >
                        <span>View History</span>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-6 py-8 text-center text-sm text-gray-500"
                  >
                    {emptyMessage}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() =>
                setCurrentPage((page) => Math.min(totalPages, page + 1))
              }
              disabled={currentPage === totalPages}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing{" "}
                <span className="font-medium">
                  {(currentPage - 1) * pageSize + 1}
                </span>{" "}
                to{" "}
                <span className="font-medium">
                  {Math.min(currentPage * pageSize, sortedData.length)}
                </span>{" "}
                of <span className="font-medium">{sortedData.length}</span>{" "}
                results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${
                      currentPage === index + 1
                        ? "z-10 bg-yellow-500 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
                        : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    } ${index === 0 ? "rounded-l-md" : ""} ${
                      index === totalPages - 1 ? "rounded-r-md" : ""
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
