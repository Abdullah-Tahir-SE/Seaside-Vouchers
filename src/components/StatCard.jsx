function StatCard({ title, value }) {
  return (
    <div className="group cursor-pointer rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <h2 className="text-xl text-gray-600 transition-colors duration-300 group-hover:text-[#10cbbb]">
        {title}
      </h2>

      <p className="mt-2 text-3xl font-bold transition-transform duration-300 origin-left group-hover:scale-[1.02]">
        {value}
      </p>
    </div>
  );
}

export default StatCard;