import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const GET_REVENUE = gql`
  query GetRevenue($storeId: Int, $startDate: String, $endDate: String) {
    getRevenueByCategory(
      storeId: $storeId
      startDate: $startDate
      endDate: $endDate
    ) {
      category
      totalRevenue
    }
  }
`;


const COLORS = [
  "#52525b", 
  "#71717a", 
  "#a1a1aa",
  "#3f3f46",
  "#d4d4d8", 
];

function RevenuePieChart({ storeId, dateRange }) {
  const { data, loading } = useQuery(GET_REVENUE, {
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
        <div className="h-5 w-48 bg-zinc-200 rounded mb-4 animate-pulse" />
        <div className="h-[300px] bg-zinc-200/60 rounded animate-pulse" />
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
      <h2 className="font-semibold text-zinc-800 mb-4">
        Revenue Distribution
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data.getRevenueByCategory}
            dataKey="totalRevenue"
            nameKey="category"
            outerRadius={120}
            innerRadius={50}
            paddingAngle={2}
          >
            {data.getRevenueByCategory.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: "#f4f4f5",
              border: "1px solid #d4d4d8",
              borderRadius: "8px",
              fontSize: "13px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenuePieChart;
