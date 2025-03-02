import React from "react";

const ContentArea = ({ children, classNames }) => {
  return (
    <div className={`max-w-[1400px] mx-auto ${classNames} px-5`}>
      {children}
    </div>
  );
};

export default ContentArea;
