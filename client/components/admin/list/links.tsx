"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = ({ label, href, logo: Icon }: any) => {
  const pathname = usePathname();

  const fullPath = href === "/" ? "/admin" : `/admin${href}`;

  const isActive = pathname === fullPath;

  return (
    <Link
      className={`flex items-center gap-2 font-medium tracking-widex transition-all p-2 rounded-lg ${
        isActive
          ? "text-[#3a7d60] bg-[#111917] mr-3"
          : "text-[#5c6260] hover:text-white"
      }`}
      href={fullPath}
    >
      <Icon className="text-lg" />
      <span className="text-sm">{label}</span>
    </Link>
  );
};

export default Links;
