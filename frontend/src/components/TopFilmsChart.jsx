import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const GET_TOP_FILMS = gql`
  query GetTopFilms($storeId: Int, $startDate: String, $endDate: String) {
    getTopRentedFilms(
      storeId: $storeId
      startDate: $startDate
      endDate: $endDate
    ) {
      title
      rentalCount
    }
  }
`;

function TopFilmsChart({ storeId, dateRange }) {
  const { data, loading } = useQuery(GET_TOP_FILMS, {
    variables: {
      storeId: storeId ? Number(storeId) : null,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
    },
  });

 
  if (loading) {
    return (
      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
        <div className="h-5 w-52 bg-zinc-200 rounded mb-4 animate-pulse" />
        <div className="h-[300px] bg-zinc-200/60 rounded animate-pulse" />
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
      <h2 className="font-semibold text-zinc-800 mb-4">
        Top 5 Rented Films
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data.getTopRentedFilms}>
          
          <XAxis 
            dataKey="title"
            tick={{ fill: "#71717a", fontSize: 12 }}
            axisLine={{ stroke: "#d4d4d8" }}
            tickLine={false}
          />
          
          <YAxis 
            tick={{ fill: "#71717a", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#f4f4f5",
              border: "1px solid #d4d4d8",
              borderRadius: "8px",
              fontSize: "13px",
            }}
          />

          <Bar 
            dataKey="rentalCount" 
            fill="#52525b"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TopFilmsChart;
