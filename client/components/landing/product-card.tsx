import { TProduct } from "@/types/product.types";
import Image from "next/image";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import Button from "../common/button";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { useWishlist } from "@/hooks/wishlist.hook";
interface IProps {
  product: TProduct;
}

const ProductCard = ({
  product: { cover_image, name, description, category, brand, price, _id },
}: IProps) => {
  // const { addProductToWishlist, isExists, isLoading, removeProductFromWishlist } = useContext(WishlistContext)
  const {
    addProductToWishlist,
    isExists,
    isLoading,
    removeProductFromWishlist,
  } = useWishlist();

  return (
    <article className="min-w-70 max-w-90 border border-gray-300 p-1.5  rounded-lg relative ">
      {/*add to wishlist */}
      <button
        disabled={isLoading}
        onClick={(e) => {
          e.stopPropagation();
          if (isExists(_id)) {
            removeProductFromWishlist(_id);
          } else {
            addProductToWishlist(_id);
          }
        }}
        title={isExists(_id) ? "remove from wishlist" : "add to wishlist"}
        className="cursor-pointer border border-primary w-fit absolute top-1 right-2 z-100 h-10 aspect-square bg-primary/20 rounded-full flex justify-center items-center"
      >
        {isExists(_id) ? (
          <IoMdHeart size={24} className="text-primary" />
        ) : (
          <FaRegHeart size={22} className="text-gray-800" />
        )}
      </button>
      {/* image: cover image*/}
      <div className="w-full h-45 aspect-video  rounded-md">
        <Image
          src={cover_image.path}
          alt={name + "-" + "cover image"}
          height={800}
          width={800}
          className="w-full h-full rounded-t-md"
        />
      </div>

      <div className="px-1">
        {/* name */}
        <p className="text-lg  font-semibold text-primary mt-2 line-clamp-1">
          {name}
        </p>
        <div className="flex gap-2 my-2">
          {category && (
            <p className=" py-0.5 px-2 rounded-md text-xs font-semibold bg-primary-lighter border border-primary text-gray-600">
              {category.name}
            </p>
          )}
          {brand && (
            <p className=" py-0.5 px-2 rounded-md text-xs font-semibold bg-primary-lighter border border-primary text-gray-600">
              {brand.name}
            </p>
          )}
        </div>
        {/* price */}
        <div className="flex gap-1 items-center mb-1">
          <TbCurrencyRupeeNepalese size={16} />
          <p className="text-primary font-semibold ">{price}</p>
        </div>

        {/* desc  */}

        <p className="line-clamp-3 text-sm leading-4.5 mb-4 text-gray-500">
          {description}
        </p>
      </div>
      {/* button */}
      <Link
        className="w-fit"
        href={`/products/${_id}?q=${name}&d=${description}`}
      >
        <Button label="View Detail" />
      </Link>
    </article>
  );
};

export default ProductCard;
