import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";

interface IProps {
  link?: string;
  heading: string;
  subHeading: string;
}

const SectionHeading = ({ heading, subHeading, link }: IProps) => {
  return (
    <header className="flex justify-between items-center">
      {/* left */}
      <div>
        <h3 className="text-xl font-semibold">{heading}</h3>
        <p className="text-sm text-gray-500">{subHeading}</p>
      </div>

      {/* right */}
      {link && (
        <Link href={link}>
          <div className="flex items-center text-gray-500 font-medium text-[14px] hover:text-primary-hover transition-all duration-300">
            <Link href={"/products"} className="text-[14px]">
              Explore More
            </Link>
            <IoChevronDown size={16} className="mt-0.5" />
          </div>
        </Link>
      )}
    </header>
  );
};

export default SectionHeading;
