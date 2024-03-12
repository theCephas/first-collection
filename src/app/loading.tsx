import React from "react";

const loading = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-orange-600 animate-bounce [animation-delay:.7s]"></div>
          <div className="w-4 h-4 rounded-full bg-orange-600 animate-bounce [animation-delay:.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-orange-600 animate-bounce [animation-delay:.7s]"></div>
        </div>
      </div>
      ;
    </>
  );
};

export default loading;
