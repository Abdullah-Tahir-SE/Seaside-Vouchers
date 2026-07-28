import { useState } from "react";
import Navbar from "../components/Navbar";
import CompanyHeader from "../components/CompanyHeader";
import CompanyTabs from "../components/CompanyTabs";
import PlanTabs from "../components/PlanTabs";
import SearchBox from "../components/SearchBox";
import CompanyCard from "../components/CompanyCard";
import AddCompanyModal from "../components/AddCompanyModal";

import im1 from "../assets/im1.png";
import im2 from "../assets/im2.png";
import im3 from "../assets/im3.png";

export const companiesData = [
  {
    id: 1,
    name: "Wintheiser LLC",
    email: "kate452@hotmail.com",
    status: "Approved",
    plan: "Basic Plan",
    image: im3,
  },
  {
    id: 2,
    name: "Barone LLC.",
    email: "kate452@hotmail.com",
    status: "Pending",
    plan: "Basic Plan",
    image: im2,
  },
  {
    id: 3,
    name: "Delta - Delta Corporation",
    email: "kate452@hotmail.com",
    status: "Approved",
    plan: "Standard Plan",
    image: im1,
  },
  {
    id: 4,
    name: "Wintheiser LLC",
    email: "kate452@hotmail.com",
    status: "Pending",
    plan: "Basic Plan",
    image: im3,
  },
  {
    id: 5,
    name: "Barone LLC.",
    email: "kate452@hotmail.com",
    status: "Pending",
    plan: "Premium Plan",
    image: im2,
  },
  {
    id: 6,
    name: "Alpha Tech",
    email: "alpha@example.com",
    status: "Approved",
    plan: "Standard Plan",
    image: im3,
  },
  {
    id: 7,
    name: "Beta Solutions",
    email: "beta@example.com",
    status: "Pending",
    plan: "Premium Plan",
    image: im2,
  },
  {
    id: 8,
    name: "Gamma Enterprises",
    email: "gamma@example.com",
    status: "Approved",
    plan: "Basic Plan",
    image: im1,
  },
  {
    id: 9,
    name: "Omega Corp",
    email: "omega@example.com",
    status: "Approved",
    plan: "Standard Plan",
    image: im3,
  },
  {
    id: 10,
    name: "Zeta Industries",
    email: "zeta@example.com",
    status: "Pending",
    plan: "Premium Plan",
    image: im2,
  },
];

function CompaniesPage() {
  const [activeTab, setActiveTab] = useState("Approved");
  const [activePlan, setActivePlan] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const filteredCompanies = companiesData.filter(
    (company) => 
      (activeTab === "All" || company.status === activeTab) && 
      (activePlan === "All" || company.plan.includes(activePlan))
  );

  return (
    <div className="min-h-screen bg-[#3fd6cc] px-4 py-6">
      <Navbar />

      <CompanyHeader openModal={() => setShowModal(true)} />

      <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <CompanyTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex flex-col gap-3 sm:flex-row">
          <PlanTabs activePlan={activePlan} setActivePlan={setActivePlan} />
          <SearchBox />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {filteredCompanies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>

      {showModal && (
        <AddCompanyModal closeModal={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default CompaniesPage;