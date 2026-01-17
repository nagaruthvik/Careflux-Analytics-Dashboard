import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const GET_KPIS = gql`
  query GetKPIs($storeId: Int, $startDate: String, $endDate: String) {
    getKeyMetrics(storeId: $storeId, startDate: $startDate, endDate: $endDate) {
      totalRevenue
      activeRentals
    }
  }
`;

function KPICards({ storeId, dateRange }) {
  const { data, loading } = useQuery(GET_KPIS, {
    variables: {
      storeId: storeId ? Number(storeId) : null,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
    },
  });

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 gap-6">
        {[1,2].map(i => (
          <div key={i} className="h-24 rounded-xl bg-zinc-200/60 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      
     
      <div className="rounded-xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-zinc-100 p-6">
        <h3 className="text-zinc-500 text-sm uppercase tracking-wide">
          Total Revenue
        </h3>
        <p className="text-4xl font-semibold text-zinc-800 mt-2">
          ${data.getKeyMetrics.totalRevenue.toFixed(2)}
        </p>
      </div>

      
      <div className="rounded-xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-zinc-100 p-6">
        <h3 className="text-zinc-500 text-sm uppercase tracking-wide">
          Active Rentals
        </h3>
        <p className="text-4xl font-semibold text-zinc-800 mt-2">
          {data.getKeyMetrics.activeRentals}
        </p>
      </div>

    </div>
  );
}

export default KPICards;
