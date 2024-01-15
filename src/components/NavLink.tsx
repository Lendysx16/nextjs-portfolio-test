import Link from "next/link";
import React, { Children } from "react";
import { NavLinkProps } from "@/types/types";

const NavLink = ({ href, children }: NavLinkProps) => {
    return (
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm-text-xl rounded md:p-0 hover:text-white transition-[color]"
        >
            {children}
        </Link>
    );
};

export default NavLink;
