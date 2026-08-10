"use client";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const pathname = usePathname();
  const activeTab = pathname.split("/")[1];
  const router = useRouter();
  console.log();
  const user = {
    src: "",
    alt: "",
  };
  return (
    <nav className="flex flex-none justify-between bg-primary px-5">
      <div className="flex items-center gap-10">
        <img
          onClick={() => router.push("/")}
          src="/logo.png"
          alt=""
          className="w-15 cursor-pointer"
        />
        <div className="flex gap-7">
          <Link
            href={"/products"}
            className={`text-white font-medium p-2 cursor-pointer ${activeTab === "products" ? "bg-gray-800 rounded-lg transition-colors " : ""}`}
          >
            Products
          </Link>
          <Link
            href={"/category"}
            className={`text-white font-medium p-2 cursor-pointer ${activeTab === "category" ? "bg-gray-800 rounded-lg transition-colors " : ""}`}
          >
            Category
          </Link>
          <Link
            href={"/brands"}
            className={`text-white font-medium p-2 cursor-pointer ${activeTab === "brands" ? "bg-gray-800 rounded-lg transition-colors " : ""}`}
          >
            Brands
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <IoIosNotificationsOutline className="text-2xl cursor-pointer" />
        <CiShoppingCart
          onClick={() => {
            router.push("/cart");
          }}
          className="text-2xl cursor-pointer"
        />
        <Image
          src={user.src || "/profile.png"}
          alt=""
          onClick={() => router.push("/profile")}
          className="w-10 cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Nav;
