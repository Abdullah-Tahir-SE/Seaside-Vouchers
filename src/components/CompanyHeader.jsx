import vector from "../assets/Vector.png";

function CompanyHeader({openModal}) {
  return (
    <div className="mt-6 flex items-center justify-between">
      <h1 className="text-3xl text-white underline">
        Companies
      </h1>

      <button 
      onClick={openModal}
      className="flex items-center justify-center gap-2 rounded-xl bg-orange-400 px-7 py-3 text-sm text-white hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_20px_rgba(251,162,53,0.5)] active:scale-95 transition-all duration-300 ease-out">
        <img src={vector} alt = "vector" className="h-4 w-4"/>
        <span> Add Company </span>
      </button>
    </div>
  );
}

export default CompanyHeader;