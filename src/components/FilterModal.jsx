function FilterModal({ closeModal }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
      <div className="w-full max-w-[430px] rounded-2xl bg-gray-100 px-8 py-6">
        <h2 className="text-center text-2xl font-bold text-black">
          Filter
        </h2>

        <div className="mt-5">
          <label className="mb-2 block text-sm font-semibold text-black">
            Start date
          </label>
          <input className="h-12 w-full rounded-xl bg-white px-4 outline-none" />
        </div>

        <div className="mt-4">
          <label className="mb-2 block text-sm font-semibold text-black">
            End Date
          </label>
          <input className="h-12 w-full rounded-xl bg-white px-4 outline-none" />
        </div>

        <div className="mt-6 flex justify-center gap-5">
          <button
            onClick={closeModal}
            className="w-28 rounded-full bg-white py-3 hover:bg-gray-200 text-sm text-black"
          >
            Cancel
          </button>

          <button
            onClick={closeModal}
            className="w-28 rounded-full bg-orange-200 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_20px_rgba(253,186,116,0.6)] active:scale-95 transition-all duration-300 ease-out py-3 text-sm text-black"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;