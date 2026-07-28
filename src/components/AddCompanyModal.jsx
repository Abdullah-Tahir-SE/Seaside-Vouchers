import ModalInput from "./ModalInput";

function AddCompanyModal({ closeModal }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 p-4 flex justify-center items-start backdrop-blur-sm">
      <div className="relative w-full max-w-[560px] rounded-3xl bg-gray-100 px-4 py-5 sm:px-6 my-auto">
        <button
          onClick={closeModal}
          className="absolute left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-[#ff9f2f] text-white shadow-sm transition-transform hover:-translate-x-1 sm:left-6 sm:top-8"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="text-center text-2xl font-bold text-black sm:text-3xl mt-4">
          Add Company
        </h2>

        <div className="mx-auto mt-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-white sm:h-28 sm:w-28">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-400 text-3xl text-white sm:h-11 sm:w-11">
            +
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <ModalInput label="Business Name" placeholder="Enter title" />
          <ModalInput label="Contact Name" placeholder="Enter Contact Name" />
          <ModalInput label="Phone Number" placeholder="Enter date" />
          <ModalInput label="Email Address" placeholder="Enter location..." />
          
          <ModalInput
            label="Location"
            placeholder="4140 Parker Rd. Allentown, New..."
          />

          <div>
            <label className="mb-1 block text-sm font-semibold text-black">
              Payment Type
            </label>

            <select className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-400 outline-none">
              <option>Basic</option>
              <option>Standard</option>
              <option>Premium</option>
            </select>
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <button
            onClick={closeModal}
            className="w-full rounded-full bg-orange-400 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_20px_rgba(251,162,53,0.5)] active:scale-95 transition-all duration-300 ease-out py-3 text-sm font-semibold text-white sm:w-auto sm:px-14"
          >
            Add Company
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCompanyModal;