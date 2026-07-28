import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import UserTable from "../components/UserTable";
import ppl1 from "../assets/equinox.png";
import ppl2 from "../assets/ventana.png";
import ppl3 from "../assets/zakkanoya.png";
import ppl4 from "../assets/ikea.png";

const usersData = [
    {
        id: 1,
        businessName: "Equinox",
        email: "guyhawkins2@gmail.com",
        contactName : "Esther Howard",
        phone: "(219) 555-0224",
        status: "Active",
        logo: ppl1,
    },
    {
        id: 2,
        businessName: "Ventana Culinaria",
        email: "guyhawkins2@gmail.com",
        contactName : "Cameron Williamson",
        phone: "(303) 555-0105",
        status: "Block",
        logo: ppl2,
    },
    {
        id: 3,
        businessName: "zakkanoya",
        email: "guyhawkins2@gmail.com",
        contactName : "Jenny Wilson",
        phone: "(225) 555-0118",
        status: "Active",
        logo: ppl3,
    },
    {
        id: 4,
        businessName: "IKEA",
        email: "guyhawkins2@gmail.com",
        contactName : "Floyd Miles",
        phone: "(270) 555-0117",
        status: "Block",
        logo: ppl4,
    },

];
function UserPage(){
    return(
        <div className= "min-h-screen bg-[#3fd6cc] px-4 py-6">
            <Navbar/>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className= "text-3xl text-white underline">
                All Users 
            </h1>
            <SearchBar/>
            </div>
            <div className="mt-6">
                <UserTable users={usersData}/>
            </div>
        </div>
    );
}
export default UserPage;