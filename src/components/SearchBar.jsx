import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="relative w-full sm:w-72">
      <input
        type="text"
        placeholder="Searching..."
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 pr-12 text-sm outline-none placeholder:text-gray-400 focus:border-[#ff9f2f]"
      />

      <button
        type="button"
        className="absolute right-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg bg-[#3fd6cc]"
      >
        <Search size={18} className="text-white" />
      </button>
    </div>
  );
}

export default SearchBar;