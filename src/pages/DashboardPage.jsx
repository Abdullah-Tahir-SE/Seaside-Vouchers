import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#3fd6cc] px-4 py-6">
      <Navbar />

      <h1 className="mt-6 text-3xl text-white underline decoration-2 underline-offset-8">
        Dashboard
      </h1>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <StatCard title="Total User" value="20" />
        <StatCard title="Active User" value="12" />
        <StatCard title="Block User" value="08" />
        <StatCard title="Total Companies" value="20" />
        <StatCard title="Approved Companies" value="10" />
        <StatCard title="Pending Companies" value="10" />
        <StatCard title="Total Vouchers" value="12" />
        <StatCard title="Approved Vouchers" value="15" />
        <StatCard title="Pending Vouchers" value="20" />
      </div>
    </div>
  );
}

export default DashboardPage;