import { X, Eye } from "lucide-react";

function InputField({ label, type, placeholder, icon }) {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm text-white">
        {label}
      </label>

      <div className="group flex h-12 items-center rounded-xl border border-white/70 px-3 transition-all duration-300 hover:border-white focus-within:-translate-y-1 focus-within:border-white focus-within:shadow-lg focus-within:ring-4 focus-within:ring-white/20">
        <span className="mr-3 text-white/80 transition-transform duration-300 group-focus-within:scale-125 group-focus-within:text-white">{icon}</span>

        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-white outline-none placeholder:text-white/80"
        />

        {type === "email" && (
          <X size={18} className="text-white" />
        )}

        {type === "password" && (
          <Eye size={18} className="text-white" />
        )}
      </div>
    </div>
  );
}

export default InputField;