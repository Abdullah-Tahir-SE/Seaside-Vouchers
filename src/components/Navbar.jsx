import { useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";



import logoFull from "../assets/logo1.png";

import text from "../assets/text.png";

import dashboard from "../assets/dash.png";

import user from "../assets/users.png";

import company from "../assets/comp.png";

import vouchers from "../assets/vouch.png";

import settings from "../assets/sett.png";

import LogoutModal from "./LogoutModal";

import dropdown from "../assets/dropdown.png";



import packageIcon from "../assets/package.png";

import revenueIcon from "../assets/revenue.png";

import logoutIcon from "../assets/logoutt.png";



import activeIcon from "../assets/active.png";

import blockIcon from "../assets/block.png";



const navItems = [

  { label: "Dashboard", icon: dashboard, path: "/dashboard" },

  { label: "Users", icon: user, path: "/users" },

  { label: "Company", icon: company, path: "/company" },

  { label: "Vouchers", icon: vouchers, path: "/vouchers" },

  { label: "Settings", icon: settings, path: "/settings" },

];



function Navbar() {

  const path = window.location.pathname;



  const [active, setActive] = useState(

    path.includes("users")

      ? "Users"

      : path.includes("company")

        ? "Company"

        : path.includes("vouchers")

          ? "Vouchers"

          : path.includes("settings") || path.includes("revenue")

            ? "Settings"

            : "Dashboard"

  );



  const [openUsers, setOpenUsers] = useState(false);

  const [openSettings, setOpenSettings] = useState(false);

  const [showLogoutModal, setShowLogoutModal] = useState(false);



  const navigate = useNavigate();

  const location = useLocation();



  useEffect(() => {

    if (location.pathname.startsWith("/users")) {

      setActive("Users");

      return;

    }



    if (

      location.pathname.startsWith("/settings") ||

      location.pathname.startsWith("/revenue")

    ) {

      setActive("Settings");

      return;

    }



    const currentItem = navItems.find((item) => item.path === location.pathname);



    if (currentItem) {

      setActive(currentItem.label);

    }

  }, [location.pathname]);



  function handleNavClick(label, path) {

    setActive(label);

    setOpenUsers(false);

    setOpenSettings(false);

    navigate(path);

  }



  function handleUserOption(path) {

    setActive("Users");

    setOpenUsers(false);

    setOpenSettings(false);

    navigate(path);

  }



  function handleSettingsOption(path) {

    setActive("Settings");

    setOpenUsers(false);

    setOpenSettings(false);

    navigate(path);

  }



  return (

    <>

      <nav className="flex flex-col gap-4 rounded-lg border-2 border-[#fcd21c] bg-[#ff9f2f] pl-5 pr-24 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex shrink-0 items-center gap-2">

          <img

            src={logoFull}

            alt="Seaside logo"

            className="w-[50px] object-contain sm:w-[58px]"

          />



          <img

            src={text}

            alt="Seaside Vouchers"

            className="w-[110px] object-contain sm:w-[135px]"

          />

        </div>



        <div className="flex flex-wrap items-center gap-3 sm:justify-end md:gap-7">

          {navItems.map((item) => {

            const isActive = active === item.label;



            if (item.label === "Users") {

              return (

                <div key={item.label} className="relative">

                  <div

                    className={`flex items-center rounded-xl transition ${isActive

                      ? "bg-white text-black"

                      : "text-white hover:bg-white/15"

                      }`}

                  >

                    <button

                      type="button"

                      onClick={() => handleNavClick("Users", "/users")}

                      className="flex items-center gap-2 px-4 py-2.5 text-sm"

                    >

                      <img

                        src={user}

                        alt=""

                        className={`h-4 w-4 object-contain ${isActive ? "brightness-0" : "brightness-0 invert"

                          }`}

                      />

                      <span>Users</span>

                    </button>



                    <button

                      type="button"

                      onClick={() => {

                        setOpenUsers(!openUsers);

                        setOpenSettings(false);

                      }}

                      className="px-3 py-2.5"

                    >

                      <img src={dropdown}

                        alt=""

                        className={`w-2 h-2 object-contain ${isActive ? "brightness-0" : "brightness-0 invert"}`} />



                    </button>

                  </div>



                  {openUsers && (

                    <div className="absolute left-0 top-12 z-50 w-32 rounded-b-xl bg-white text-sm shadow-lg">

                      <button

                        type="button"

                        onClick={() => handleUserOption("/users/active")}

                        className="flex w-full items-center gap-2 px-4 py-3 text-left text-black hover:bg-gray-100"

                      >

                        <img src={activeIcon} alt="" className="h-4 w-4" />

                        Active

                      </button>



                      <button

                        type="button"

                        onClick={() => handleUserOption("/users/block")}

                        className="flex w-full items-center gap-2 px-4 py-3 text-left text-gray-500 hover:bg-gray-100"

                      >

                        <img src={blockIcon} alt="" className="h-4 w-4" />

                        Block

                      </button>

                    </div>

                  )}

                </div>

              );

            }



            if (item.label === "Settings") {

              return (

                <div key={item.label} className="relative">

                  <button

                    type="button"

                    onClick={() => {

                      setActive("Settings");

                      setOpenUsers(false);

                      setOpenSettings(!openSettings);

                      if (

                        !location.pathname.startsWith("/settings") &&

                        !location.pathname.startsWith("/revenue")

                      ) {

                        navigate("/settings");

                      }

                    }}

                    className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm transition ${isActive

                      ? "bg-[#3fd6cc] text-black"

                      : "text-white hover:bg-white/15"

                      }`}

                  >

                    <img

                      src={settings}

                      alt=""

                      className={`h-4 w-4 object-contain ${isActive ? "brightness-0" : "brightness-0 invert"

                        }`}

                    />

                    <span>Settings</span>

                  </button>



                  {openSettings && (

                    <div className="absolute left-0 top-12 z-50 w-36 rounded-b-xl bg-white text-sm shadow-lg">

                      <button

                        type="button"

                        onClick={() => handleSettingsOption("/settings")}

                        className="flex w-full items-center gap-2 px-4 py-3 text-left text-black hover:bg-gray-100"

                      >

                        <img src={packageIcon} alt="" className="h-4 w-4" />

                        Packages

                      </button>



                      <button

                        type="button"

                        onClick={() => handleSettingsOption("/revenue")}

                        className="flex w-full items-center gap-2 px-4 py-3 text-left text-gray-500 hover:bg-gray-100"

                      >

                        <img src={revenueIcon} alt="" className="h-4 w-4" />

                        Revenue

                      </button>



                      <button

                        type="button"

                        onClick={() => {

                          setOpenSettings(false);

                          setShowLogoutModal(true);

                        }}

                        className="flex w-full items-center gap-2 px-4 py-3 text-left text-gray-500 hover:bg-gray-100"

                      >

                        <img src={logoutIcon} alt="" className="h-4 w-4" />

                        Logout

                      </button>

                    </div>

                  )}

                </div>

              );

            }



            return (

              <button

                key={item.label}

                type="button"

                onClick={() => handleNavClick(item.label, item.path)}

                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm transition ${isActive

                  ? "bg-white text-black"

                  : "text-white hover:bg-white/15"

                  }`}

              >

                <img

                  src={item.icon}

                  alt=""

                  className={`h-4 w-4 object-contain ${isActive ? "brightness-0" : "brightness-0 invert"

                    }`}

                />



                <span>{item.label}</span>

              </button>

            );

          })}

        </div>

      </nav>



      {showLogoutModal && (

        <LogoutModal

          closeModal={() => setShowLogoutModal(false)}

          logout={() => navigate("/")}

        />

      )}

    </>

  );

}



export default Navbar;