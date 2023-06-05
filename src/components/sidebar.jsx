import React from "react";
const sidebar = () => {
  const menuItems = [
    "Existing Inventory",
    "Used Inventory",
    "Trade-In",
    "Demo Drive",
    "Insurance",
    "Fleet",
    "Cybertruck",
    "Roadster",
    "Semi",
    "Charging",
    "Commercial Energy",
    "Utilities",
    "Carrers",
    "Find Us",
    "Events",
    "Support",
    "Investor Relations",
  ];
  const closeSidebar = () => {
    const sidebar = document.querySelector(".Sidebar");
    sidebar.classList.toggle("translate-x-full");
  };
  return (
    <div className="Sidebar w-80 h-screen absolute bg-white top-0 right-0 translate-x-full transition ease-in-out delay-300 px-8 py-5 overflow-y-auto">
      <div className="close-sidebar mb-6 fixed right-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-9 h-9 hover:backdrop-sepia-0  hover:bg-black/10 rounded-sm duration-500 p-2 cursor-pointer"
          onClick={closeSidebar}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="Sidebar-Menu flex flex-col px-2 mt-16 mb-6">
        <ul className="">
          {menuItems.map((item) => {
            return (
              <li className="px-2 py-2 mb-2 font-semibold text-sm hover:bg-black/10 rounded-sm duration-500 cursor-pointer
              ">
                {item}
              </li>
            );
          })}
        </ul>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
        </div>
        <div>
          <p>United States</p>
          <p>English</p>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
