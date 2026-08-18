"use client";
import Image from "next/image";
import Links from "../list/links";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { TbCategoryPlus } from "react-icons/tb";
import { IoCartOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

const overview = [
  {
    href: "/",
    label: "Dashboard",
    logo: LuLayoutDashboard,
  },
  {
    href: "/brands",
    label: "Brands",
    logo: IoCartOutline,
  },
  {
    href: "/categories",
    label: "Categories",
    logo: TbCategoryPlus,
  },
  {
    href: "/users",
    label: "Users",
    logo: LuUsers,
  },
];

const SideBar = () => {
  return (
    <div className="flex flex-col gap-2 h-full bg-black">
      <div className="flex gap-3 px-2 items-center pb-1.25 border-b border-gray-300 ">
        <Image height={50} width={50} alt="E-commerce" src={"/logo.png"} />
        <div className="flex flex-col text-xs">
          <p className="text-white">Admin</p>
          <p className="text-[#5c6260] text-xs font-bold tracking-wide">
            DASHBOARD
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between h-full ">
        <div>
          {/* MAIN */}
          <div className="pl-2 mt-2">
            <p className="text-xs tracking-wider font-bold text-[#5c6260]">
              MAIN
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {overview.map((item) => (
                <li key={item.href}>
                  <Links href={item.href} label={item.label} logo={item.logo} />
                </li>
              ))}
            </ul>
          </div>

          {/* system settings */}
          <div className="pl-2 mt-5">
            <p className="text-xs tracking-wider font-bold text-[#5c6260]">
              SYSTEM
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <Links
                  href={"/settings"}
                  label={"Settings"}
                  logo={CiSettings}
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center pr-5">
          <div className="flex gap-2 items-center">
            <Image
              width={50}
              height={50}
              src="/profile.png"
              alt="profile"
              className="rounded-full"
            />
            <div className="text-sm">
              <p className="text-[#5c6260]">name</p>
              <p className="text-[#5c6260]">Admin</p>
            </div>
          </div>
          <IoExitOutline className="text-xl text-[#5c6260]" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
