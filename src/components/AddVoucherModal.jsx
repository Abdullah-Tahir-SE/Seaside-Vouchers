import { useState } from 'react';
import { Plus, ChevronDown } from 'lucide-react';

function AddVoucherModal({ closeModal }) {
  const [form, setForm] = useState({
    companyId: '',
    name: '',
    location: '',
    date: '',
    url: '',
    from: '',
    to: '',
    offer: '',
    description: '',
    status: 'active',
  });

  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  
  // Dummy companies to make the dropdown work since we don't have AppContext
  const dummyCompanies = [
    { id: 1, name: "The Walt Disney Company" },
    { id: 2, name: "Equinox" },
    { id: 3, name: "IKEA" },
  ];
  
  const selectedCompany = dummyCompanies.find(c => c.id === form.companyId);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submit
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 p-4 flex justify-center items-start">
      <div className="max-w-[800px] w-full bg-[#F8F9FA] rounded-[32px] shadow-2xl relative my-auto flex flex-col">
        
        {/* Modal Header */}
        <div className="pt-8 pb-4 text-center text-3xl font-bold text-gray-900 flex-shrink-0 relative">
          <button
            onClick={closeModal}
            className="absolute left-4 top-8 flex h-8 w-8 items-center justify-center rounded-full bg-[#ff9f2f] text-white shadow-sm transition-transform hover:-translate-x-1 sm:left-10"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2>Add Vouchers</h2>
        </div>

        {/* Modal Body */}
        <div className="px-10 pb-8 flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 pt-2">
            
            {/* Image Upload Row */}
            <div className="flex items-end justify-center gap-6">
              {/* Company image upload */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-32 h-28 bg-white border border-gray-100 rounded-[10px] shadow-sm flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 bg-[#FBA235] rounded-full flex items-center justify-center text-white shadow-sm">
                    <Plus size={20} strokeWidth={2.5} />
                  </div>
                </div>
                <span className="text-xs text-gray-400 font-medium">Company image</span>
              </div>

              {/* Voucher image upload */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-32 h-28 bg-white border border-gray-100 rounded-[10px] shadow-sm flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 bg-[#FBA235] rounded-full flex items-center justify-center text-white shadow-sm">
                    <Plus size={20} strokeWidth={2.5} />
                  </div>
                </div>
                <span className="text-xs text-gray-400 font-medium">Voucher image</span>
              </div>
            </div>

            {/* Grid Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mt-2">
              {/* Company Dropdown */}
              <div className="relative">
                <label className="block text-sm font-bold text-gray-900 mb-2">Company *</label>
                <div
                  onClick={() => setCompanyDropdownOpen(o => !o)}
                  className="w-full px-4 py-3 bg-white border border-gray-100 shadow-sm rounded-[10px] text-sm cursor-pointer flex justify-between items-center"
                >
                  <span className={selectedCompany ? 'text-gray-800' : 'text-gray-400'}>
                    {selectedCompany ? selectedCompany.name : 'Select a company...'}
                  </span>
                  <ChevronDown size={16} className={`text-gray-400 transition-transform ${companyDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
                {companyDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-100 shadow-xl rounded-[10px] z-20 py-1 max-h-48 overflow-y-auto">
                    {dummyCompanies.map((company, i) => (
                      <div
                        key={company.id}
                        onClick={() => { setForm(f => ({ ...f, companyId: company.id })); setCompanyDropdownOpen(false); }}
                        className={`px-5 py-2.5 text-sm cursor-pointer hover:bg-gray-50 transition-colors
                          ${i !== 0 ? 'border-t border-dashed border-gray-100' : ''}
                          ${form.companyId === company.id ? 'text-[#3ECFC4] font-semibold' : 'text-gray-700'}`}
                      >
                        {company.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Title</label>
                <input
                  name="name" value={form.name} onChange={handleChange} required
                  placeholder="Enter title"
                  className="w-full px-4 py-3 bg-white border border-gray-100 shadow-sm rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-[#3ECFC4]"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Location</label>
                <input
                  name="location" value={form.location} onChange={handleChange}
                  placeholder="4140 Parker Rd. Allentown, New..."
                  className="w-full px-4 py-3 bg-white border border-gray-100 shadow-sm rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-[#3ECFC4]"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Date</label>
                <input
                  name="date" type="date" value={form.date} onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-100 shadow-sm rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-[#3ECFC4]"
                />
              </div>

              {/* URL */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">URL</label>
                <input
                  name="url" value={form.url} onChange={handleChange}
                  placeholder="Enter URL"
                  className="w-full px-4 py-3 bg-white border border-gray-100 shadow-sm rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-[#3ECFC4]"
                />
              </div>

              {/* From */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">From</label>
                <input
                  name="from" type="date" value={form.from} onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-100 shadow-sm rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-[#3ECFC4]"
                />
              </div>

              {/* To */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">To</label>
                <input
                  name="to" type="date" value={form.to} onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-100 shadow-sm rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-[#3ECFC4]"
                />
              </div>

              {/* Offer - full width */}
              <div className="col-span-full">
                <label className="block text-sm font-bold text-gray-900 mb-2">Offer</label>
                <input
                  name="offer" value={form.offer} onChange={handleChange}
                  placeholder="e.g. Discounted Tickets"
                  className="w-full px-4 py-3 bg-white border border-gray-100 shadow-sm rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-[#3ECFC4]"
                />
              </div>

              {/* Description - full width */}
              <div className="col-span-full">
                <label className="block text-sm font-bold text-gray-900 mb-2">Description</label>
                <textarea
                  name="description" value={form.description} onChange={handleChange} rows={4}
                  placeholder="Enter description..."
                  className="w-full px-4 py-3 bg-white border border-gray-100 shadow-sm rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-[#3ECFC4] resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-[#FBA235] hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all duration-300 text-white font-bold py-3.5 px-12 rounded-full shadow-md text-sm w-full sm:w-auto min-w-[200px] cursor-pointer"
              >
                Add Voucher
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddVoucherModal;
