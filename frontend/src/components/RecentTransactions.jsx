import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const GET_TX = gql`
  query GetTransactions($storeId: Int, $startDate: String, $endDate: String) {
    getRecentTransactions(
      storeId: $storeId
      startDate: $startDate
      endDate: $endDate
    ) {
      name
      title
      amount
      date
    }
  }
`;

function RecentTransactions({ storeId, dateRange }) {
  const { data, loading } = useQuery(GET_TX, {
    variables: {
      storeId: storeId ? Number(storeId) : null,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
    },
  });

  if (loading) {
    return (
      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
        <div className="h-5 w-40 bg-zinc-200 rounded mb-4 animate-pulse" />
        <div className="space-y-3">
          {[1,2,3,4].map(i => (
            <div key={i} className="h-14 bg-zinc-200/60 rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
      <h2 className="font-semibold text-zinc-800 mb-4">
        Recent Transactions
      </h2>

      <ul className="divide-y divide-zinc-200">
        {data.getRecentTransactions.map((t, i) => (
          <li
            key={i}
            className="py-3 px-2 rounded-lg hover:bg-zinc-100 transition"
          >
            <div className="text-sm text-zinc-800">
              <span className="font-medium">{t.name}</span>
              {" rented "}
              <span className="italic text-zinc-600">{t.title}</span>
              {" for "}
              <span className="font-semibold">${t.amount}</span>
            </div>

            <div className="text-xs text-zinc-500 mt-1">
              {new Date(t.date).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentTransactions;
