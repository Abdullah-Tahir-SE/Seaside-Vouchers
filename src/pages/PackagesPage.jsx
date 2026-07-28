import Navbar from "../components/Navbar";
import PackageCard from "../components/PackageCard";

const packages = [
  {
    name: "Basic Plan",
    price: "£30 + vat",
    note: "(Based on 12m contract)",
    features: ["Unlimited Support", "5GB Server Space", "2 Users per Project"],
  },
  {
    name: "Standard Plan",
    price: "£70 + vat",
    note: "(Based on 12m contract)",
    features: [
      "Unlimited Support",
      "10GB Server Space",
      "5 Users per Project",
      "Email Integration",
    ],
  },
  {
    name: "Premium Plan",
    price: "£150 + vat",
    note: "(Based on 12m contract)",
    features: [
      "Unlimited Support",
      "25GB Server Space",
      "10 Users per Project",
      "Email Integration",
      "Unlimited Download",
    ],
  },
];

function PackagesPage() {
  return (
    <div className="min-h-screen bg-[#3fd6cc] px-4 py-6">
      <Navbar />

      <h1 className="mt-6 inline-block text-3xl text-white underline">
        Packages
      </h1>

      <div className="mt-20 grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((item, index) => (
          <PackageCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default PackagesPage;