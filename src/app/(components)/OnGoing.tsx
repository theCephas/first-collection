import React from "react";
import Image from "next/image";

interface OnGoingProps {
  imageSrc: string;
  name: string;
  color: string;
  size: number;
  price: number;
  classes: string;
}

const OnGoing: React.FC<OnGoingProps> = ({
  imageSrc,
  name,
  color,
  size,
  price,
  classes,
}) => {
  return (
    <div className={`gilroy ${classes}`}>
      <div className="flex justify-between w-full rounded-[12px] border border-[#f6f6f6] bg-[#fbfbfb] p-[8px] ">
        <div className="flex gap-3">
          <Image src={imageSrc} alt={name} width={0} height={0} />
          <div className="flex flex-col gap-2 text-[#040404]">
            <p className="text-[16px] font-[400] leading-[23.2px]">{name}</p>
            <p className="text-[12px] font-[400] leading-[17.4px] text-[#3a3a3a] ">
              Color: {color}
            </p>
            <p className="text-[12px] font-[400] leading-[17.4px] text-[#3a3a3a] ">
              Size: {size}
            </p>
            <p className="sm:hidden flex text-[14px] font-[500] leading-[20.3px] text-[#040404] ">
              ₦ {price}
            </p>
          </div>
        </div>
        <p className="hidden sm:flex text-[14px] font-[500] leading-[20.3px] text-[#040404] ">
          ₦ {price}
        </p>
      </div>
    </div>
  );
};

export default OnGoing;
