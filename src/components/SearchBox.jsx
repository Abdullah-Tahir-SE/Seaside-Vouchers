import style from "../assets/style.png";

function SearchBox({onFilterClick}) {
  return (
    <div className="flex h-14 w-full items-center rounded-full bg-white px-4 sm:w-[260px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#10cbbb]">
      <span className="mr-3 text-2xl text-black">⌕</span>

      <input
        type="text"
        placeholder="Search"
        className="flex-1 text-sm outline-none placeholder:text-gray-400 bg-transparent"
      />

      <button 
      onClick={onFilterClick}
      className="ml-3 mr-2 h-10 w-10 flex shrink-0 items-center justify-center rounded-full bg-[#3fd6cc] text-xl text-black">
        <img src={style} alt="Style" className="h-4 w-5" />
      </button>
    </div>
  );
}

export default SearchBox;