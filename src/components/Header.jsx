import { useNavigate } from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import React, { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("Home");

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  const handleMenuClick = (menuItem) => {
    setActive(menuItem.name);
    navigate(menuItem.link);
  };

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="h-[48px]">
      <div className="fixed top-4 w-full m-auto z-[1200]">
        <div className=" h-[48px] bg-[black]  shadow-lg flex items-center w-[96%] rounded-lg m-auto justify-between px-3 lg:px-[90px] sticky">
          <button
            onClick={() => navigate("/")}
            className={`text-[20px] font-bold text-white`}
          >
            Yash Lathiya
          </button>
          <div className="hidden lg:flex gap-10 font-semibold">
            {menuItems?.map((item, index) => (
              <button
                key={index}
                className={`${
                  active === item.name ? "text-blue-400" : "text-white"
                }`}
                onClick={() => handleMenuClick(item)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button className="lg:hidden">
            <MenuIcon onClick={toggleDrawer(true)} style={{ color: "white" }} />
          </button>
          <Drawer
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
            PaperProps={{
              style: {
                // backgroundColor: 'rgba(0, 0, 0, 0.9)', // Dark background color
              },
            }}
          >
            <div className="w-[100vw] md:w-[250px] flex flex-col gap-7 items-center justify-between text-[18px]">
              <div className="w-full flex justify-end p-2">
                <CloseIcon
                  className="cursor-pointer "
                  onClick={toggleDrawer(false)}
                />
              </div>

              {menuItems?.map((item, index) => (
                <button
                  key={index}
                  className={`${
                    active === item.name ? "text-blue-400" : "text-black"
                  }`}
                  onClick={() => {
                    handleMenuClick(item);
                    setOpen(false);
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Header;
