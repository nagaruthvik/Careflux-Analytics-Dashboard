import GlobalFilterBar from "../components/GlobalFilterBar";
import TopFilmsChart from "../components/TopFilmsChart";
import RevenuePieChart from "../components/RevenuePieChart";
import TopCustomersTable from "../components/TopCustomersTable";
import KPICards from "../components/KPICards";
import RecentTransactions from "../components/RecentTransactions";

function Dashboard({ storeId, setStoreId, dateRange, setDateRange }) {
  return (
    <div className="min-h-screen bg-zinc-100">

     
      <div className="sticky top-0 z-20 bg-zinc-100/80 backdrop-blur border-b border-zinc-200">
        <GlobalFilterBar
          storeId={storeId}
          setStoreId={setStoreId}
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
      </div>

     
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <KPICards storeId={storeId} dateRange={dateRange} />

        <div className="grid lg:grid-cols-2 gap-8">
          <TopFilmsChart storeId={storeId} dateRange={dateRange} />
          <RevenuePieChart storeId={storeId} dateRange={dateRange} />
        </div>

        <TopCustomersTable storeId={storeId} dateRange={dateRange} />

        <RecentTransactions storeId={storeId} dateRange={dateRange} />
      </div>
    </div>
  );
}

export default Dashboard;
