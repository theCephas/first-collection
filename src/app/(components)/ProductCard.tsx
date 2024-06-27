import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { Confirm } from "notiflix";
import { Fetch } from "../Helpers/Fetch";
import { getToken } from "../Helpers/Helpers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProductCardProps {
  imageSrc: string;
  name: string;
  price: number;
  classes: string;
  id: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  name,
  price,
  classes,
  id,
}) => {
  const { token } = getToken();
  const router = useRouter();
  const csrfToken =
    "JxQvgGXo8yteepXgJ7HUp5gUNwOHEs3cHdy8S1UgjM5QLFqcXEWuOF2aGd3836fM";

  const handleAddToCart = (id: string) => {
    if (!token) {
      return Confirm.show(
        "Unlock Cart Feature",
        "You have to Login or Register before you can add products to Cart",
        "Login",
        "Cancel",
        () => {
          return router.push("/auth/login");
        },
        () => {
          return;
        },
        {
          titleColor: "#FE833D",
          okButtonBackground: "#FE833D",
        }
      );
    }
    Confirm.show(
      "Confirm Add to Cart",
      "Are you sure you want want to Add this item to your Cart?",
      "Add to Cart",
      "Cancel",
      async () => {
        try {
          const data = await Fetch("cart/create/", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
              "X-CSRFToken": csrfToken,
              Authorization: `Bearer ${token}`,
            },
            body: {
              product_id: id,
            },
          });

          // console.log(data);
          if (data.id) throw new Error(data.id[0]);
          if (data.detail) throw new Error(data.detail);
          if (data.error) throw new Error(data.error);

          toast.success(data.message, {
            position: "top-right",
            autoClose: 5000,
          });
        } catch (err: any) {
          toast.error(err.message, {
            position: "top-right",
            autoClose: 5000,
          });
        }
      },
      () => {
        return;
      },
      {
        titleColor: "#FE833D",
        okButtonBackground: "#FE833D",
      }
    );
  };

  return (
    <div
      className={`gilroy relative rounded-[12px] border border-[#f6f6f6] bg-[#fbfbfb] ${classes}`}
    >
      <div className="p-[14px] w-full">
        <Image
          width={999}
          height={999}
          src={imageSrc || ""}
          alt={name}
          className="m-auto w-full object-cover h-[130px] rounded-[12px]"
        />

        <div className="text-[14px] font-[400] leading-[20.3px]">
          <h3
            onClick={() => router.push(`/products/${id}`)}
            className="text-xs pt-2 hover:underline cursor-pointer"
          >
            {name}
          </h3>

          <p className="text-xs font-[600] py-2">₦ {price}</p>
        </div>
        <div className="text-[#FE833D] focus:text-[#eb8449] flex gap-2">
          <Star className="w-[12px] h-[12px]" />
          <Star className="w-[12px] h-[12px]" />
          <Star className="w-[12px] h-[12px]" />
          <Star className="w-[12px] h-[12px]" />
          <Star className="w-[12px] h-[12px]" />
        </div>
      </div>
      <button
        onClick={() => handleAddToCart(id)}
        className="bg-[#fe833d] absolute bottom-0 right-0 p-2 rounded-br-[8px] rounded-tl-[8px]"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.25 1.66683C1.25 1.20659 1.6231 0.833496 2.08333 0.833496C3.51195 0.833496 4.72412 1.86803 4.9713 3.27306L5.42175 5.8335H13.2512C14.1638 5.83349 14.9033 5.83348 15.4935 5.88516C16.098 5.9381 16.6428 6.05114 17.1246 6.34004C17.8086 6.75015 18.3313 7.37967 18.5969 8.12742C18.7858 8.65933 18.7767 9.21116 18.6937 9.79788C18.6131 10.3681 18.4465 11.0664 18.2425 11.9211L18.2256 11.992C18.0915 12.5543 17.9798 13.0223 17.8574 13.402C17.7291 13.7999 17.5727 14.1561 17.3221 14.4792C16.9591 14.9471 16.4799 15.3138 15.9327 15.5471C15.5575 15.707 15.1708 15.7729 14.7459 15.8038C14.338 15.8335 13.8429 15.8335 13.2424 15.8335H12.832C11.4818 15.8335 10.4099 15.8335 9.54511 15.7522C8.65747 15.6688 7.91088 15.4945 7.23364 15.0987C6.76614 14.8255 6.3443 14.4831 5.98376 14.0832C5.45884 13.5009 5.14977 12.8119 4.9113 11.9745C4.68006 11.1625 4.49716 10.1403 4.26813 8.86023L3.90192 6.81361L3.90149 6.81122L3.32984 3.56183C3.22066 2.94123 2.69035 2.50016 2.08333 2.50016C1.6231 2.50016 1.25 2.12707 1.25 1.66683ZM15.3481 7.54548C14.8393 7.50092 14.173 7.50016 13.2122 7.50016H5.7179L5.90092 8.52298C6.13956 9.85667 6.30866 10.7961 6.51424 11.518C6.71522 12.2238 6.93152 12.6454 7.22168 12.9672C7.46605 13.2383 7.75362 13.4722 8.0746 13.6598C8.45978 13.8849 8.93732 14.0211 9.70108 14.0929C10.4788 14.166 11.4724 14.1668 12.874 14.1668H13.2122C13.8504 14.1668 14.2847 14.1663 14.6249 14.1416C14.955 14.1176 15.139 14.0736 15.2791 14.0139C15.57 13.8899 15.8193 13.6973 16.0052 13.4576C16.0921 13.3456 16.1746 13.19 16.2711 12.8906C16.3713 12.58 16.4684 12.1754 16.6118 11.5745C16.8276 10.6698 16.9751 10.0479 17.0435 9.56441C17.1108 9.08855 17.0843 8.84844 17.0264 8.68525C16.8934 8.31093 16.628 7.98556 16.2676 7.76946C16.1024 7.67043 15.851 7.58952 15.3481 7.54548Z"
            fill="#FEFEFE"
          />
          <path
            d="M7.70833 18.3335C8.28363 18.3335 8.75 17.8671 8.75 17.2918C8.75 16.7165 8.28363 16.2502 7.70833 16.2502C7.13304 16.2502 6.66667 16.7165 6.66667 17.2918C6.66667 17.8671 7.13304 18.3335 7.70833 18.3335Z"
            fill="#FEFEFE"
          />
          <path
            d="M16.25 17.2918C16.25 17.8671 15.7836 18.3335 15.2083 18.3335C14.633 18.3335 14.1667 17.8671 14.1667 17.2918C14.1667 16.7165 14.633 16.2502 15.2083 16.2502C15.7836 16.2502 16.25 16.7165 16.25 17.2918Z"
            fill="#FEFEFE"
          />
          <path
            d="M17.5 1.66683C17.5 1.20659 17.1269 0.833496 16.6667 0.833496C16.2064 0.833496 15.8333 1.20659 15.8333 1.66683V2.50016H15C14.5398 2.50016 14.1667 2.87326 14.1667 3.3335C14.1667 3.79373 14.5398 4.16683 15 4.16683H15.8333V5.00016C15.8333 5.4604 16.2064 5.8335 16.6667 5.8335C17.1269 5.8335 17.5 5.4604 17.5 5.00016V4.16683H18.3333C18.7936 4.16683 19.1667 3.79373 19.1667 3.3335C19.1667 2.87326 18.7936 2.50016 18.3333 2.50016H17.5V1.66683Z"
            fill="#FEFEFE"
          />
        </svg>
      </button>
    </div>
  );
};

export default ProductCard;
