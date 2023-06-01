import React from "react";

function SideBarButton({
  children,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="hover:bg-accent1 w-12 h-12 flex items-center justify-center rounded-xl hover:shadow-md duration-150">
      <div className="text-2xl text-gray-700">{children}</div>
    </button>
  );
}

export default SideBarButton;
