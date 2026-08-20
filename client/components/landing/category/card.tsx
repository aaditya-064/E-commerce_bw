import { TCategory } from "@/types/category.types";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  category: TCategory;
}

const CategoryCard = ({ category: { name, logo, description } }: IProps) => {
  return (
    <Link href={`/products/category/${encodeURIComponent(name)}`}>
      <div className="cursor-pointer flex border border-primary max-w-80 h-fit gap-2 items-center p-1.5 rounded-md hover:-translate-y-1 hover:bg-primary-lighter/60 transition-all duration-300">
        {/* image */}
        <div className="h-16 w-16 rounded-sm overflow-clip shrink-0">
          <Image
            src={(logo as { path: string }).path}
            alt={name + "-" + "image"}
            className="h-full w-full"
            height={800}
            width={800}
          />
        </div>
        {/* name & desc  */}
        <div className="flex flex-col gap-0.5">
          <p className="text-md font-semibold text-gray-700">{name}</p>
          <p className="line-clamp-2 text-sm text-gray-500 leading-4 text-wrap">
            {description ?? "-"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
