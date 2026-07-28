import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import ActiveUsers from "./pages/ActiveUsers";
import BlockUsers from "./pages/BlockUsers";
import CompaniesPage from "./pages/CompaniesPage";
import PackagesPage from "./pages/PackagesPage";
import RevenuePage from "./pages/RevenuePage";
import VouchersPage from "./pages/VouchersPage";
import CompanyDetailPage from "./pages/CompanyDetailPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/active" element={<ActiveUsers />} />
      <Route path="/users/block" element={<BlockUsers />} />
      <Route path="/company" element={<CompaniesPage />} />
      <Route path="/company/:id" element={<CompanyDetailPage />} />
      <Route path="/settings" element={<PackagesPage />} />
      <Route path="/revenue" element={<RevenuePage />} />
      <Route path="/vouchers" element={<VouchersPage />} />
    </Routes>
  );
}

export default App;