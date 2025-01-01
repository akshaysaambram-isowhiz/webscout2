import { useNavigate } from "react-router-dom";

import { Card } from "../data/cards";

type TableProps = {
  className?: string;
  route?: string;
  routeParam?: keyof Card;
  headers: string[];
  cols: (keyof Card)[];
  data: Partial<Card>[];
};

export default function Table({
  className,
  route,
  routeParam,
  headers,
  cols,
  data,
}: TableProps) {
  const navigate = useNavigate();

  return (
    <div
      className={`relative overflow-x-auto shadow-md sm:rounded-lg ${className}`}
    >
      <table className="table w-full text-left text-sm">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
          <tr>
            {headers.map((header) => (
              <th scope="col" className="px-6 py-3" key={header}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((card) => {
            return (
              <tr
                className="transition-colors duration-300 ease-in-out even:bg-yellow-50 hover:bg-yellow-200"
                onClick={() =>
                  routeParam && navigate(`${route}/${card[routeParam]}`)
                }
                key={card.programName}
              >
                {cols.map((col) => (
                  <td className="px-6 py-4" key={col}>
                    {["avgPrice", "price"].includes(col)
                      ? `$ ${card[col]}`
                      : card[col]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
