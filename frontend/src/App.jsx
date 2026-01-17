import { useState } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  const [storeId, setStoreId] = useState(null);
  const [dateRange, setDateRange] = useState({
    startDate: "2005-01-01",
    endDate: "2006-12-31",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-100 text-zinc-900 antialiased">

      <Dashboard 
        storeId={storeId}
        setStoreId={setStoreId}
        dateRange={dateRange}
        setDateRange={setDateRange}
      />
    </div>
  );
}

export default App;
