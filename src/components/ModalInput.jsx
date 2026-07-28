function ModalInput({ label, placeholder, type = "text" }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold text-black">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none placeholder:text-gray-400"
      />
    </div>
  );
}

export default ModalInput;