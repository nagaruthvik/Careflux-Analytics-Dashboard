function GlobalFilterBar({ storeId, setStoreId, dateRange, setDateRange }) {
  return (
    <div className="flex flex-wrap items-center gap-4 px-6 py-4 bg-zinc-100/80 backdrop-blur border-b border-zinc-200">

      
      <select
        className="px-3 py-2 rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-700 
                   focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-zinc-400
                   transition"
        value={storeId || ""}
        onChange={(e) => setStoreId(e.target.value || null)}
      >
        <option value="">All Stores</option>
        <option value="1">Store 1</option>
        <option value="2">Store 2</option>
      </select>

      
      <input
        type="date"
        value={dateRange.startDate}
        onChange={(e) =>
          setDateRange({ ...dateRange, startDate: e.target.value })
        }
        className="px-3 py-2 rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-700
                   focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-zinc-400
                   transition"
      />

     
      <input
        type="date"
        value={dateRange.endDate}
        onChange={(e) =>
          setDateRange({ ...dateRange, endDate: e.target.value })
        }
        className="px-3 py-2 rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-700
                   focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-zinc-400
                   transition"
      />
    </div>
  );
}

export default GlobalFilterBar;
