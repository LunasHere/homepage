import React from "react";

interface BadgeProps {
  label: string;
  backgroundColor: string;
  icon: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ label, backgroundColor, icon }) => {
  return (
    <div
      className="max-w-max flex items-center h-[32px] justify-center relative"
    >
      <div
        className="whitespace-nowrap text-white font-bold flex text-[18px] h-[28px] items-center justify-center text-center transition-all duration-200 relative"
        style={{
          background: backgroundColor,
          borderRadius: "40px",
          width: `${label.length * 10 + 60}px`, // Dynamically adjust width
        }}
      >
        <div className="flex items-center justify-center gap-2">
          {icon}
          <p
            className="!bg-clip-text text-transparent"
            style={{
              backgroundColor: "rgb(0, 0, 0)",
              letterSpacing: "0px",
              fontWeight: 700,
            }}
          >
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};
