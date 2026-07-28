function EditVoucherModal({ closeModal }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
      <div className="w-full max-w-[420px] rounded-2xl bg-gray-100 px-6 py-5">
        <h2 className="text-center text-2xl font-bold text-black">
          Edit Voucher
        </h2>

        <div className="mt-4 space-y-3">
          <div>
            <label className="mb-1 block text-sm font-semibold text-black">
              Company Name
            </label>
            <input
              placeholder="Enter Company Name"
              className="h-11 w-full rounded-lg bg-white px-4 text-sm outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-black">
              Plan
            </label>
            <input
              placeholder="Enter Plan (e.g., Basic Plan)"
              className="h-11 w-full rounded-lg bg-white px-4 text-sm outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-black">
              Offer / Discount
            </label>
            <input
              placeholder="Enter Offer (e.g., Up to 50% off)"
              className="h-11 w-full rounded-lg bg-white px-4 text-sm outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-black">
              URL
            </label>
            <input
              placeholder="Enter URL"
              className="h-11 w-full rounded-lg bg-white px-4 text-sm outline-none"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={closeModal}
            className="w-28 rounded-full bg-white py-3 hover:bg-gray-200 text-sm text-black"
          >
            Cancel
          </button>

          <button
            onClick={closeModal}
            className="w-32 rounded-full bg-[#ff9f2f] hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_20px_rgba(251,162,53,0.5)] active:scale-95 transition-all duration-300 ease-out py-3 text-sm font-semibold text-white shadow-sm"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditVoucherModal;
