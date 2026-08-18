"use client";
import { IoMdHeart } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi2";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AuthSection from "@/components/common/authSection";
import { useAuth } from "@/hooks/auth.hook";

const NavLinks = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/about-us",
    label: "About Us",
  },
  {
    route: "/contact-us",
    label: "Contact Us",
  },
  {
    route: "/products",
    label: "Products",
  },
];

const Nav = () => {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <nav className="flex flex-none justify-between items-center bg-[#0F172A] px-30 h-18">
      <div>
        <Image
          onClick={() => router.push("/")}
          src="/logo.png"
          alt=""
          height={500}
          width={500}
          className="w-15 cursor-pointer"
        />
      </div>

      <div className="flex gap-7 h-fit">
        {NavLinks.map((link) => {
          return <NavItem key={link.route} item={link} />;
        })}
      </div>
      <div className="flex items-center gap-4">
        <Link href={"/wishlist"}>
          <IoMdHeart
            title="wishlist"
            size={26}
            className="mt-0.5 cursor-pointer text-primary"
          />
        </Link>
        <Link href={"/cart"}>
          <HiShoppingBag
            title="cart"
            size={26}
            className="cursor-pointer text-primary"
          />
        </Link>
        {/* <Image
                    src={user.src || "/profile.png"}
                    alt="user profile"
                    height={500}
                    width={500}
                    onClick={() => router.push("/profile")}
                    className="w-10 cursor-pointer text-primary "

                /> */}
        <AuthSection />
      </div>
    </nav>
  );
};

export default Nav;

const NavItem = ({
  item: { route, label },
}: {
  item: { route: string; label: string };
}) => {
  const pathname = usePathname();
  // const activeTab = pathname.split("/")[1];
  return (
    <Link
      href={route}
      className={` border-b-2 border-[#0F172A] min-w-30 text-center tracking-wider font-semibold text-primary  p-2 cursor-pointer transition-colors  duration-300 ${pathname === route ? " border-primary   text-white" : ""}`}
    >
      {label}
    </Link>
  );
};
