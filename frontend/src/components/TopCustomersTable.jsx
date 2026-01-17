import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const GET_CUSTOMERS = gql`
  query GetCustomers($storeId: Int, $startDate: String, $endDate: String) {
    getTopCustomers(
      storeId: $storeId
      startDate: $startDate
      endDate: $endDate
    ) {
      customerId
      fullName
      totalRentals
      totalSpent
    }
  }
`;

function TopCustomersTable({ storeId, dateRange }) {
  const { data, loading } = useQuery(GET_CUSTOMERS, {
    variables: {
      storeId: storeId ? Number(storeId) : null,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
    },
  });

  // Skeleton loader
  if (loading) {
    return (
      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
        <div className="h-5 w-40 bg-zinc-200 rounded mb-4 animate-pulse" />
        <div className="space-y-3">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="h-10 bg-zinc-200/60 rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
      <h2 className="font-semibold text-zinc-800 mb-4">
        Top 10 Customers
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-zinc-700">
          <thead className="bg-zinc-100 text-zinc-500 uppercase text-xs">
            <tr>
              <th className="py-3 px-3 text-left">ID</th>
              <th className="py-3 px-3 text-left">Name</th>
              <th className="py-3 px-3 text-right">Rentals</th>
              <th className="py-3 px-3 text-right">Total Spent ($)</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-zinc-200">
            {data.getTopCustomers.map((c) => (
              <tr
                key={c.customerId}
                className="hover:bg-zinc-100/70 transition"
              >
                <td className="py-3 px-3">{c.customerId}</td>
                <td className="py-3 px-3 font-medium text-zinc-800">
                  {c.fullName}
                </td>
                <td className="py-3 px-3 text-right">
                  {c.totalRentals}
                </td>
                <td className="py-3 px-3 text-right font-medium">
                  {c.totalSpent.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopCustomersTable;
