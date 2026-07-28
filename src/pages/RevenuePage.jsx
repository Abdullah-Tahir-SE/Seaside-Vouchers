import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import FilterModal from "../components/FilterModal";

const revenues = [
  {
    name: "Wade Warren",
    email: "michelle.rivera@example.com",
    date: "10/28/12",
    amount: "£450",
  },
  {
    name: "Esther Howard",
    email: "felicia.reid@example.com",
    date: "8/21/15",
    amount: "£360",
  },
  {
    name: "Brooklyn Simmons",
    email: "sara.cruz@example.com",
    date: "10/11/16",
    amount: "£500",
  },
  {
    name: "Jenny Wilson",
    email: "jackson.graham@example.com",
    date: "8/15/17",
    amount: "£150",
  },
];

function RevenuePage() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="min-h-screen bg-[#3fd6cc] px-4 py-6">
      <Navbar />

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="underline  text-3xl text-white">
          Revenue
        </h1>

        <SearchBox onFilterClick={() => setShowFilter(true)} />
      </div>

      <div className="mt-6 overflow-x-auto rounded-3xl bg-white px-6 py-7">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="text-left text-lg font-bold text-black">
              <th className="pb-5">Company Name</th>
              <th className="pb-5">Company Email</th>
              <th className="pb-5">Date</th>
              <th className="pb-5 text-right">Amount Received</th>
            </tr>
          </thead>

          <tbody>
            {revenues.map((item, index) => (
              <tr
                key={index}
                className="border-t border-dashed border-gray-400 text-base"
              >
                <td className="py-2 text-[#20d5c8]">{item.name}</td>
                <td className="py-2 text-black">{item.email}</td>
                <td className="py-2 text-black">{item.date}</td>
                <td className="py-2 text-right text-black">{item.amount}</td>
              </tr>
            ))}

            <tr className="border-t border-dashed border-gray-400">
              <td></td>
              <td></td>
              <td></td>
              <td className="pt-6 text-right text-lg font-bold text-black">
                £1050
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {showFilter && (
        <FilterModal closeModal={() => setShowFilter(false)} />
      )}
    </div>
  );
}

export default RevenuePage;