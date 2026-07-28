import { useState } from "react";
import EditPackageModal from "./EditPackageModal";
import DeletePackageModal from "./DeletePackageModal";
import dots from "../assets/dots.png";
import edit from "../assets/edit.png";
import dlete from "../assets/dlete.png";


function PackageCard({ item }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <>
      <div className="group cursor-pointer relative rounded-xl bg-white px-8 pb-12 pt-20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="absolute left-1/2 top-0 w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#ff9f2f] px-2 py-3 text-center text-white">
          <p className="text-sm">{item.name}</p>
          <h2 className="text-2xl font-bold">{item.price}</h2>
          <p className="text-sm">Per Month</p>
          <p className="text-[8px]">{item.note}</p>
        </div>

        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="absolute right-5 top-5 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-sm"
        >
          <img src={dots} alt="dots"></img>
        </button>

        {openMenu && (
          <div className="absolute right-2 top-10 z-40 w-36 rounded-xl bg-white py-2 shadow-2xl">
            <button
              onClick={() => {
                setShowEditModal(true);
                setOpenMenu(false);
              }}
              className="flex w-full items-center gap-3 px-5 py-3 text-left text-sm font-semibold text-black hover:bg-gray-100"
            >
              <img src={edit} alt="edit" className="h-4 w-4"></img>
              Edit
            </button>

            <div className="border-t border-dashed border-gray-300"></div>

            <button
            onClick={() => {
              setShowDeleteModal(true);
              setOpenMenu(false);
            }}
            className="flex w-full items-center gap-3 px-5 py-3 text-left text-sm font-semibold text-black hover:bg-gray-100"
            >
              <img src={dlete} alt="dlete" className="h-4 w-4"></img>
              Delete
              </button>
          </div>
        )}

        <ul className="space-y-2 text-gray-500">
          {item.features.map((feature, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-black">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {showEditModal && (
        <EditPackageModal closeModal={() => setShowEditModal(false)} />
      )}
      {showDeleteModal && (
        <DeletePackageModal closeModal={() => setShowDeleteModal(false)} />
      )}
    </>
  );
}

export default PackageCard;