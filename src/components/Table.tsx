export default function Table() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="table w-full text-left text-sm">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Job
            </th>
            <th scope="col" className="px-6 py-3">
              Favorite Color
            </th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="border-b bg-white transition-colors duration-300 ease-in-out even:bg-yellow-50 hover:bg-yellow-200">
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">Cy Ganderton</td>
            <td className="px-6 py-4">Quality Control Specialist</td>
            <td className="px-6 py-4">Blue</td>
          </tr>
          <tr className="border-b bg-white transition-colors duration-300 ease-in-out even:bg-yellow-50 hover:bg-yellow-200">
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">Cy Ganderton</td>
            <td className="px-6 py-4">Quality Control Specialist</td>
            <td className="px-6 py-4">Blue</td>
          </tr>
          <tr className="border-b bg-white transition-colors duration-300 ease-in-out even:bg-yellow-50 hover:bg-yellow-200">
            <td className="px-6 py-4">3</td>
            <td className="px-6 py-4">Cy Ganderton</td>
            <td className="px-6 py-4">Quality Control Specialist</td>
            <td className="px-6 py-4">Blue</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
