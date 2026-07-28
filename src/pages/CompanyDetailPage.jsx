import { useParams, useNavigate } from "react-router-dom";
import { companiesData } from "./CompaniesPage";
import Navbar from "../components/Navbar";
import VoucherCard from "../components/VoucherCard";

import im1 from "../assets/im1.png";
import voucher1 from "../assets/voucher1.png";
import voucher2 from "../assets/voucher2.png";
import voucher3 from "../assets/voucher3.png";
import logo1 from "../assets/logo1.png";

const companyVouchers = [
  {
    id: 1,
    image: voucher1,
    logo: logo1,
    companyName: "The Walt Disney Company",
    plan: "Basic Plan",
    offer: "Up to 50% off",
    address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    url: "http://www.zoomit.com",
    status: "Approved",
    category: "Attraction",
  },
  {
    id: 2,
    image: voucher2,
    logo: logo1,
    companyName: "The Walt Disney Company",
    plan: "Standard Plan",
    offer: "Off web price",
    address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    url: "http://www.zoomit.com",
    status: "Approved",
    category: "Days Out",
  },
  {
    id: 3,
    image: voucher3,
    logo: logo1,
    companyName: "The Walt Disney Company",
    plan: "Premium Plan",
    offer: "Off web price",
    address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    url: "http://www.zoomit.com",
    status: "Approved",
    category: "Dining",
  }
];

function CompanyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const company = companiesData.find((c) => c.id === parseInt(id));

  if (!company) {
    return (
      <div className="min-h-screen bg-[#3fd6cc] px-4 py-6 flex items-center justify-center text-white text-xl font-bold">
        Company not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#3fd6cc] px-4 py-6 font-sans pb-20">
      <Navbar />

      <h1 className="mt-8 text-[28px] text-white underline decoration-1 underline-offset-[12px] px-2">
        Company Detail
      </h1>

      <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-sm">
        {/* Top Info Section */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <img 
              src={company.image || im1} 
              alt={company.name} 
              className="h-[140px] w-[140px] rounded-[1.5rem] object-cover shadow-sm" 
            />
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-black">{company.name}</h2>
                <span className="rounded-full bg-[#3fd6cc] px-4 py-1 text-xs font-semibold text-white shadow-sm">
                  {company.status === "Approved" ? "Renewal Due" : "Pending Approval"}
                </span>
              </div>
              
              <div className="flex flex-col gap-2 mt-2 text-sm text-gray-400 font-medium">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span>{company.email}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path></svg>
                    <span>+1 (800) 453-4703</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span>4140 Parker Rd. Allentown, New Mexico 31134</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex shrink-0">
            <div className="rounded-[2rem] bg-[#ff9f2f] p-4 px-6 text-white shadow-md flex items-center justify-between gap-8 h-[72px]">
              <div className="flex flex-col text-[11px] font-medium leading-relaxed">
                <span>Start date : 10/08/2024</span>
                <span>End Date : 10/09/2024</span>
              </div>
              <div className="flex flex-col text-right text-sm font-bold">
                <span>{company.plan}</span>
                <span className="text-[10px] font-medium">Monthly</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vouchers Section */}
        <h2 className="mt-10 text-[22px] font-bold text-black px-2">Vouchers</h2>
        
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {companyVouchers.map((voucher) => (
            <VoucherCard key={voucher.id} voucher={voucher} />
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="mt-12 flex items-center justify-center gap-8 mb-4">
          <button className="rounded-[2rem] border-[1.5px] border-green-500 bg-green-50 px-12 py-3 text-[17px] font-semibold text-green-600 hover:bg-green-100 transition-colors">
            Approve
          </button>
          <button className="rounded-[2rem] border-[1.5px] border-red-500 bg-red-50 px-12 py-3 text-[17px] font-semibold text-red-500 hover:bg-red-100 transition-colors">
            Disapproved
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetailPage;
