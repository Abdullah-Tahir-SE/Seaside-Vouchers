import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import VoucherCard from "../components/VoucherCard";

import voucher1 from "../assets/voucher1.png";
import voucher2 from "../assets/voucher2.png";
import voucher3 from "../assets/voucher3.png";
import logo1 from "../assets/logo1.png";
import dropdownIcon from "../assets/dropdown.png";
import vector from "../assets/Vector.png";
import AddVoucherModal from "../components/AddVoucherModal";

const initialVouchers = [
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
  },
  {
    id: 4,
    image: voucher1,
    logo: logo1,
    companyName: "The Walt Disney Company",
    plan: "Basic Plan",
    offer: "Discounted Tickets",
    address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    url: "http://www.zoomit.com",
    status: "Pending",
    category: "Accommodation",
  },
  {
    id: 5,
    image: voucher2,
    logo: logo1,
    companyName: "The Walt Disney Company",
    plan: "Standard Plan",
    offer: "Up to 20% off hotel stays",
    address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    url: "http://www.zoomit.com",
    status: "Pending",
    category: "Shopping",
  },
  {
    id: 6,
    image: voucher3,
    logo: logo1,
    companyName: "The Walt Disney Company",
    plan: "Premium Plan",
    offer: "5% off all dates",
    address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    url: "http://www.zoomit.com",
    status: "Pending",
    category: "Holiday",
  },
  {
    id: 7,
    image: voucher1,
    logo: logo1,
    companyName: "The Walt Disney Company",
    plan: "Basic Plan",
    offer: "Free Entry",
    address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    url: "http://www.zoomit.com",
    status: "Approved",
    category: "Leisure Home",
  },
  {
    id: 8,
    image: voucher2,
    logo: logo1,
    companyName: "The Walt Disney Company",
    plan: "Standard Plan",
    offer: "Extra 10% off",
    address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    url: "http://www.zoomit.com",
    status: "Pending",
    category: "Days Out",
  },
  {
    id: 9,
    image: voucher3,
    logo: logo1,
    companyName: "The Walt Disney Company",
    plan: "Premium Plan",
    offer: "Buy 1 Get 1",
    address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    url: "http://www.zoomit.com",
    status: "Approved",
    category: "Shopping",
  },
  {
    id: 10,
    image: voucher1,
    logo: logo1,
    companyName: "The Walt Disney Company",
    plan: "Basic Plan",
    offer: "Special Offer",
    address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    url: "http://www.zoomit.com",
    status: "Pending",
    category: "Attraction",
  }
];

function VouchersPage() {
  const [activeTab, setActiveTab] = useState("Approved");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Home");
  const [showAddModal, setShowAddModal] = useState(false);
  const dropdownRef = useRef(null);

  const categories = [
    "Home",
    "Days Out",
    "Attraction",
    "Dining",
    "Accommodation",
    "Shopping",
    "Holiday",
    "Leisure Home",
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredVouchers = initialVouchers.filter((v) =>
    v.status === activeTab && (selectedCategory === "Home" || v.category === selectedCategory)
  );
  const pendingCount = initialVouchers.filter((v) => v.status === "Pending").length;

  return (
    <div className="min-h-screen bg-[#3fd6cc] px-4 py-6 font-sans">
      <Navbar />

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-2">
        <h1 className="text-[28px] text-white underline decoration-1 underline-offset-[12px]">
          {activeTab === "Approved" ? "Approved Vouchers" : "Pending Vouchers"}
        </h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center justify-center gap-2 rounded-xl bg-orange-400 px-7 py-3 text-sm text-white hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_20px_rgba(251,162,53,0.5)] active:scale-95 transition-all duration-300 ease-out shadow-md transition-colors"
        >
          <img src={vector} alt="add" className="h-4 w-4" />
          <span>Add Vouchers</span>
        </button>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 px-2">
        {/* Tabs */}
        <div className="flex w-fit rounded-[2rem] bg-white p-1.5 shadow-sm">
          <button
            onClick={() => setActiveTab("Approved")}
            className={`rounded-full px-8 py-2.5 text-[13px] font-semibold transition-colors ${activeTab === "Approved" ? "bg-[#ff9f2f] text-white" : "text-black"
              }`}
          >
            Approved Vouchers
          </button>

          <button
            onClick={() => setActiveTab("Pending")}
            className={`flex items-center gap-2 rounded-full px-8 py-2.5 text-[13px] font-semibold transition-colors ${activeTab === "Pending" ? "bg-[#ff9f2f] text-white" : "text-black"
              }`}
          >
            Pending Vouchers
            {pendingCount > 0 && (
              <span className={`flex h-4 w-4 items-center justify-center rounded-full text-[9px] ${activeTab === "Pending" ? "bg-white text-[#ff9f2f]" : "bg-red-100 text-red-500"
                }`}>
                {pendingCount}
              </span>
            )}
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex h-[52px] w-[220px] items-center justify-between rounded-[2rem] bg-white px-5 text-sm font-semibold text-black shadow-sm transition-all focus:ring-2 focus:ring-[#10cbbb]"
            >
              {selectedCategory}
              <img src={dropdownIcon} alt="dropdown" className="h-2 w-3 opacity-60" />
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 top-[60px] z-50 w-full rounded-2xl bg-white py-2 shadow-xl">
                {categories.map((cat, idx) => (
                  <div key={cat}>
                    <button
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-5 py-2.5 text-left text-[13px] font-medium text-black hover:bg-gray-50"
                    >
                      {cat}
                    </button>
                    {idx !== categories.length - 1 && (
                      <div className="mx-5 border-t-[1.5px] border-dashed border-gray-100"></div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Search */}
          <SearchBox onFilterClick={() => { }} />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-2">
        {filteredVouchers.map((voucher) => (
          <VoucherCard key={voucher.id} voucher={voucher} />
        ))}
      </div>

      {showAddModal && <AddVoucherModal closeModal={() => setShowAddModal(false)} />}
    </div>
  );
}

export default VouchersPage;
