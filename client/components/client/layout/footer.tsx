"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const solutions = [
    { label: "Marketing", route: "/marketing" },
    { label: "Analytics", route: "/analytics" },
    { label: "Automation", route: "/automation" },
    { label: "Commerce", route: "/commerce" },
    { label: "Insights", route: "/insights" },
  ];
  const support = [
    { label: "Submit ticket", route: "/submit-ticket" },
    { label: "Documentation", route: "/docs" },
    { label: "Guides", route: "/guides" },
  ];
  const company = [
    { label: "About", route: "/about" },
    { label: "Blog", route: "/blog" },
    { label: "Jobs", route: "/jobs" },
    { label: "Press", route: "/press" },
  ];
  const legal = [
    { label: "Terms of service", route: "/terms-of-service" },
    { label: "Privacy policy", route: "/privacy-policy" },
    { label: "License", route: "/license" },
  ];

  return (
    <footer className="flex flex-col gap-7 shrink-0 mt-auto pb-5 bg-[#0F172A] px-30">
      <div className="ml-10 -mb-7 pt-4">
        <Image
          height={500}
          width={500}
          src={"/logo.png"}
          alt="logo"
          className="w-15 cursor-pointer"
        />
      </div>

      {/* footer navigations */}
      <div className="flex justify-around mt-5 ms-10">
        {/* solutions */}
        <div className="flex flex-col gap-2 text-left">
          {/* footer header */}
          <p className="text-sm font-semibold tracking-wide text-primary">
            Solutions
          </p>
          {/* footer links */}
          <div className="flex flex-col gap-2 justify-start">
            {solutions.map((item, index) => (
              <Link
                key={item.route}
                href={item.route}
                className="text-sm cursor-pointer text-white text-left"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* support */}
        <div className="flex flex-col gap-2">
          {/* footer header */}
          <p className="text-sm font-semibold tracking-wide text-primary">
            Support
          </p>
          {/* footer links */}
          <div className="flex flex-col gap-2">
            {support.map((item, index) => (
              <Link
                key={item.route}
                href={item.route}
                className="text-sm cursor-pointer text-white text-left"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* company */}
        <div className="flex flex-col gap-2">
          {/* footer header */}
          <p className="text-sm font-semibold tracking-wide text-primary">
            Company
          </p>
          {/* footer links */}
          <div className="flex flex-col gap-2">
            {company.map((item, index) => (
              <Link
                key={item.route}
                href={item.route}
                className="text-sm cursor-pointer text-white text-left"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* legal */}
        <div className="flex flex-col gap-2">
          {/* footer header */}
          <p className="text-sm font-semibold tracking-wide text-primary">
            Legal
          </p>
          {/* footer links */}
          <div className="flex flex-col gap-2">
            {legal.map((item, index) => (
              <Link
                key={item.route}
                href={item.route}
                className="text-sm cursor-pointer text-white text-left"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <hr className="text-white m-5" />

      <div className="flex justify-between px-5">
        <div>
          <p className="text-sm text-white">
            © {"2024"} Your Company, Inc. All rights reserved
          </p>
        </div>
        <div className="flex gap-4 text-xl">
          <CiFacebook className="cursor-pointer text-white" />
          <CiInstagram className="cursor-pointer text-white" />
          <CiTwitter className="cursor-pointer text-white" />
          <FaGithub className="cursor-pointer text-white" />
          <CiYoutube className="cursor-pointer text-white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
