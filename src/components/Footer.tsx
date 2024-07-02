"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="p-4 text-center justify-center text-xs text-neutral-500 border-t dark:border-neutral-800 border-neutral-100">
      <span className="font-semibold">{new Date().getFullYear()} </span>
      &#8212; Built with ❤️ by{" "}
      <a
        href="https://github.com/myudak"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-600"
      >
        myudak
      </a>
    </div>
  );
};
