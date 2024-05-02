import React from "react";

interface Props {
  pageNum: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  paginationNums: number[];
}

const Pagination = ({ pageNum, setPageNum, paginationNums }: Props) => {
  return (
    <div className="justify-start items-center gap-6 flex mt-14 ">
      <button
        onClick={() => (pageNum > 1 ? setPageNum((prev) => prev - 1) : "")}
        className={`text-sm font-normal gilroy leading-tight cursor-pointer ${
          pageNum > 1 ? "text-black font-extrabold" : "text-neutral-400"
        }`}
      >
        Prev
      </button>
      <div className="justify-start items-start gap-2 flex">
        {paginationNums.map((item, i) => (
          <button
            onClick={() => setPageNum(item)}
            key={i + 1}
            className={`${
              pageNum === item ? "text-black" : "text-neutral-400"
            } text-sm font-semibold gilroy leading-tight cursor-pointer`}
          >
            {item}
          </button>
        ))}
      </div>
      <button
        onClick={() =>
          pageNum < paginationNums.length ? setPageNum((prev) => prev + 1) : ""
        }
        className={`text-sm font-normal gilroy leading-tight cursor-pointer ${
          pageNum < paginationNums.length
            ? "text-black font-extrabold"
            : "text-neutral-400"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
