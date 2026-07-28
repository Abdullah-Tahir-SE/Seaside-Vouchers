import add from "../assets/add.png";

function EditPackageModal({ closeModal }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
      <div className="w-full max-w-[420px] rounded-2xl bg-gray-100 px-6 py-5">
        <h2 className="text-center text-2xl font-bold text-black">
          Edit Packages
        </h2>

        <div className="mt-4 space-y-3">
          <div>
            <label className="mb-1 block text-sm font-semibold text-black">
              Package Name
            </label>
            <input
              placeholder="Enter Name"
              className="h-11 w-full rounded-lg bg-white px-4 text-sm outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-black">
              Package Price
            </label>
            <input
              placeholder="Enter Price"
              className="h-11 w-full rounded-lg bg-white px-4 text-sm outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-black">
              Second Line
            </label>
            <input
              placeholder="Enter Second Line"
              className="h-11 w-full rounded-lg bg-white px-4 text-sm outline-none"
            />
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="text-sm font-semibold text-black">
                Description
              </label>

              <button className="bg-orange-500 text-white px-4 py-2 rounded-xl flex items-center gap-2">
                <img src={add} alt="add" className="w-3 h-3" />
                <span>Add</span>
                </button>
            </div>

            <input
              placeholder="Enter Description ......"
              className="h-11 w-full rounded-lg bg-white px-4 text-sm outline-none"
            />
          </div>

          <input
            placeholder="Enter Description ......"
            className="h-11 w-full rounded-lg bg-white px-4 text-sm outline-none"
          />

          <input
            placeholder="Enter Description ......"
            className="h-11 w-full rounded-lg bg-white px-4 text-sm outline-none"
          />
        </div>

        <div className="mt-5 flex justify-center gap-4">
          <button
            onClick={closeModal}
            className="w-28 rounded-full bg-white py-3 hover:bg-gray-200 text-sm text-black"
          >
            Cancel
          </button>

          <button
            onClick={closeModal}
            className="w-32 rounded-full bg-orange-200 hover:bg-orange-300 py-3 text-sm text-black"
          >
            Add Package
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditPackageModal;