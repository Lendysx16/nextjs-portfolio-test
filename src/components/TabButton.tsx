"use client";
import React from "react";
import { TabButtonProps } from "@/types/types";
import { motion } from "framer-motion";
function TabButton({ isActive, title, onClick, id }: TabButtonProps) {
    const buttonClasses = isActive
        ? "text-white"
        : "hover:text-white text-[#fcf4ffb6] ";
    return (
        <button onClick={onClick} id={id}>
            <span
                className={`pb-1 font-semibold transition-all duration-500 relative ${buttonClasses}`}
            >
                {title}
                {isActive && (
                    <motion.span
                        layoutId="underline"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-400"
                    />
                )}
            </span>
        </button>
    );
}

export default TabButton;
