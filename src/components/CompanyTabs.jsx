function CompanyTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex w-fit rounded-full bg-white p-1">
      <button
        onClick={() => setActiveTab("Approved")}
        className={`rounded-full px-8 py-3 text-xs ${
          activeTab === "Approved" ? "bg-gray-100 text-black" : "text-black"
        }`}
      >
        Approved Companies
      </button>

      <button
        onClick={() => setActiveTab("Pending")}
        className={`rounded-full px-8 py-3 text-xs ${
          activeTab === "Pending" ? "bg-gray-100 text-black" : "text-black"
        }`}
      >
        Pending Companies
        <span className="ml-2 rounded-full bg-red-200 px-1 text-[10px] text-red-500">2</span>
      </button>
    </div>
  );
}

export default CompanyTabs;