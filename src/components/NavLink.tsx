import Link from "next/link";
import React from "react";
import { NavLinkProps } from "@/types/types";

const NavLink = ({ href, children, active }: NavLinkProps) => {
    return (
        <Link
            href={href}
            className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm-text-xl rounded md:p-0 hover:text-white transition-[color] ${
                active ? "text-white " : ""
            }`}
        >
            {children}
        </Link>
    );
};

export default NavLink;
