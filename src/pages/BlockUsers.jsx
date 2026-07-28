import Navbar from "../components/Navbar";
import UserTable from "../components/UserTable";
import equinox from "../assets/equinox.png";
import ventana from "../assets/ventana.png";
import zakkanoya from "../assets/zakkanoya.png";
import ikea from "../assets/ikea.png";
import SearchBar from "../components/SearchBar";

function BlockUsers() {
  const users = [
    {
      logo: equinox,
      businessName: "Equinox",
      email: "guyhawkins2@gmail.com",
      contactName: "Esther Howard",
      phone: "(219) 555-0114",
      status: "Block",
    },
    {
      logo: ventana,
      businessName: "Ventana Culinaria",
      email: "guyhawkins2@gmail.com",
      contactName: "Cameron Williamson",
      phone: "(303) 555-0105",
      status: "Block",
    },
    {
      logo: zakkanoya,
      businessName: "zakkanoya",
      email: "guyhawkins2@gmail.com",
      contactName: "Jenny Wilson",
      phone: "(225) 555-0118",
      status: "Block",
    },
    {
      logo: ikea,
      businessName: "IKEA",
      email: "guyhawkins2@gmail.com",
      contactName: "Floyd Miles",
      phone: "(270) 555-0117",
      status: "Block",
    },
  ];

  return (
    <main className="min-h-screen bg-[#3fd6cc] px-4 py-6">
      <Navbar />

      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <h1 className="text-3xl text-white underline">
        Block Users
      </h1>

      <SearchBar/>
      </div>
      <UserTable users={users} />
    </main>
  );
}

export default BlockUsers;