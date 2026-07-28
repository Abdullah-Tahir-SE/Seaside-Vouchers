import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dots from "../assets/dots.png";
import edit from "../assets/edit.png";
import dlete from "../assets/dlete.png";
import lei from "../assets/lei.png";

function CompanyCard({ company }) {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setOpenMenu(!openMenu);
  };

  const handleActionClick = (e) => {
    e.stopPropagation();
    setOpenMenu(false);
  };

  return (
    <div 
      onClick={() => navigate(`/company/${company.id}`)}
      className="group cursor-pointer rounded-2xl bg-white p-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative">
        <img
          src={company.image}
          alt={company.name}
          className="h-45 w-full rounded-xl object-cover"
        />

        <span
          className={`absolute left-2 top-2 rounded-full px-3 py-1 text-[10px] ${
            company.status === "Approved"
              ? "bg-lime-100 text-green-600 border border-lime-500"
              : "bg-red-100 text-red-500 border border-red-500"
          }`}
        >
          {company.status === "Approved" ? "Approved" : "Disapproved"}
        </span>

        <button 
        type="button"
        onClick={handleMenuClick}
        className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-lg shadow">
          <img src={dots} alt="dots"></img>
          </button>
          {openMenu &&(
            <div className="absolute right-2 top-10 z-50 w-56 rounded-3xl bg-white py-2 shadow-2xl">
              <button onClick={handleActionClick} className="flex w-full items-center gap-4 px-6 py-3 text-left text-[17px] font-bold text-black hover:bg-gray-100">
                <img src={edit} alt="edit" className="h-5 w-5"></img>
                Edit
              </button>

              <div className="border-t-[1.5px] border-dashed border-gray-200 mx-6"></div>

               <button onClick={handleActionClick} className="flex w-full items-center gap-4 px-6 py-3 text-left text-[17px] font-bold text-black hover:bg-gray-100">
              <img src={dlete} alt="dlete" className="h-5 w-5"></img>
              Delete
            </button>
            
            <div className="border-t-[1.5px] border-dashed border-gray-200 mx-6"></div>

            <button onClick={handleActionClick} className="flex w-full items-center gap-4 px-6 py-3 text-left text-[17px] font-bold text-black hover:bg-gray-100">
              <img src={lei} alt="lei" className="h-5 w-5"></img>
              Add Leisure Home
            </button>
          </div>
          )}
        <span className="absolute bottom-2 right-2 rounded-full bg-black/70 px-4 py-1 text-[10px] text-white">
          {company.plan}
        </span>
      </div>

      <div className="px-1 py-2">
        <h2 className="text-sm font-bold text-black">{company.name}</h2>
        <p className="text-xs text-gray-500">{company.email}</p>
      </div>
    </div>
  );
}

export default CompanyCard;