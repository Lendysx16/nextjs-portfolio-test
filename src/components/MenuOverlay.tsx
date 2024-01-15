import React, { ReactNode } from "react";
import NavLink from "@/components/NavLink";
import { MenuOverlayProps } from "@/types/types";

const MenuOverlay = ({ links, className }: MenuOverlayProps): ReactNode => {
    return (
        <ul className={className}>
            <>
                {links.map(({ title, path }) => (
                    <li key={title + "Mobile"}>
                        <NavLink href={path}> {title}</NavLink>
                    </li>
                ))}
            </>
        </ul>
    );
};

export default MenuOverlay;
