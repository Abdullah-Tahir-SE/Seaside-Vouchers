import { useState } from "react";
import EditVoucherModal from "./EditVoucherModal";
import DeleteVoucherModal from "./DeleteVoucherModal";
import dots from "../assets/dots.png";
import edit from "../assets/edit.png";
import dlete from "../assets/dlete.png";

function VoucherCard({ voucher }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <div className="group relative rounded-[2rem] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden p-2">
        <div className="relative">
          <img
            src={voucher.image}
            alt={voucher.companyName}
            className="h-[220px] w-full rounded-[1.5rem] object-cover"
          />

          {/* Company Logo Top Left */}
          <div className="absolute left-4 top-4 h-12 w-12 rounded-full bg-white flex items-center justify-center p-1 shadow-md">
            <img
              src={voucher.logo}
              alt="Logo"
              className="h-full w-full rounded-full object-contain"
            />
          </div>

          {/* 3 dots menu Top Right */}
          <button
            type="button"
            onClick={() => setOpenMenu(!openMenu)}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md text-lg"
          >
            <img src={dots} alt="dots" className="h-4 w-4" />
          </button>

          {openMenu && (
            <div className="absolute right-4 top-14 z-50 w-36 rounded-2xl bg-white py-2 shadow-2xl">
              <button
                onClick={() => {
                  setShowEditModal(true);
                  setOpenMenu(false);
                }}
                className="flex w-full items-center gap-3 px-4 py-2 text-left text-sm font-semibold text-black hover:bg-gray-100"
              >
                <img src={edit} alt="edit" className="h-4 w-4" />
                Edit
              </button>
              <div className="mx-4 my-1 border-t-[1.5px] border-dashed border-gray-200"></div>
              <button
                onClick={() => {
                  setShowDeleteModal(true);
                  setOpenMenu(false);
                }}
                className="flex w-full items-center gap-3 px-4 py-2 text-left text-sm font-semibold text-black hover:bg-gray-100"
              >
                <img src={dlete} alt="dlete" className="h-4 w-4" />
                Delete
              </button>
            </div>
          )}

          {/* Plan pill bottom left */}
          <span className="absolute bottom-4 left-4 rounded-full bg-black/70 px-4 py-1.5 text-[10px] text-white backdrop-blur-sm">
            {voucher.plan}
          </span>

          {/* Offer pill bottom right */}
          <span className="absolute bottom-4 right-4 rounded-full bg-[#ff9f2f] px-4 py-1.5 text-[10px] font-bold text-black shadow-sm">
            {voucher.offer}
          </span>
        </div>

        <div className="px-4 py-4">
          <h2 className="text-base font-bold text-black">{voucher.companyName}</h2>
          <p className="mt-1 flex items-center text-[10px] text-gray-500">
            <span className="mr-1 text-sm">®</span> {voucher.address}
          </p>
          <p className="mt-1 text-[10px] text-gray-400">
            URL: <a href={voucher.url} className="text-[#0057ff] font-medium hover:underline" target="_blank" rel="noreferrer">{voucher.url}</a>
          </p>
        </div>
      </div>

      {showEditModal && (
        <EditVoucherModal closeModal={() => setShowEditModal(false)} />
      )}
      {showDeleteModal && (
        <DeleteVoucherModal closeModal={() => setShowDeleteModal(false)} />
      )}
    </>
  );
}

export default VoucherCard;
