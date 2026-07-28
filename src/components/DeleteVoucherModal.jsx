import deletee from "../assets/delete.png";

function DeleteVoucherModal({ closeModal }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-[360px] rounded-xl bg-white px-6 pb-5 pt-10 text-center">
        <div className="absolute left-1/2 border-4 border-white top-0 flex h-30 w-30 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#EA4334] text-4xl text-white">
          <img src={deletee} alt="delete" className="h-12 w-12" />
        </div>

        <h2 className="text-xl font-bold pt-4 text-black">Delete Voucher</h2>

        <p className="mx-auto mt-2 max-w-[260px] text-sm text-gray-400">
          Are you sure you want to delete this voucher?
        </p>

        <div className="mt-2 border-t border-dashed border-gray-200 pt-4">
          <div className="flex justify-center gap-4">
            <button
              onClick={closeModal}
              className="w-28 rounded-full border border-gray-200 hover:bg-gray-200 bg-white py-3 text-sm text-black"
            >
              Cancel
            </button>

            <button
              onClick={closeModal}
              className="w-28 rounded-full bg-[#EA4334] hover:bg-red-600 py-3 text-sm text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteVoucherModal;
