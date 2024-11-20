import React from "react";

const SectionSubTitle = ({
  title,
  bgTitle,
}: {
  title: string;
  bgTitle: string;
}) => {
  return (
    <div className="py-5">
      <h4 className="text-sm text-gray-400" style={{ letterSpacing: "5px" }}>
        {/* */}
        {bgTitle}
      </h4>

      <h2 style={{ letterSpacing: "2px" }} className="text-2xl font-bold">
        {title}
      </h2>
    </div>
  );
};

export default SectionSubTitle;
