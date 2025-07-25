import React from "react";
import clsx from "clsx";

export function Badge({ children, className = "" }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800",
        className
      )}
    >
      {children}
    </span>
  );
}
