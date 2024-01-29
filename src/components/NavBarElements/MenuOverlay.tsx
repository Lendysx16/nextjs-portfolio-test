import React, { ReactNode } from "react";
import NavLink from "@/components/NavBarElements/NavLink";
import { usePathname } from "next/navigation";
import { MenuOverlayProps } from "@/types/types";

const MenuOverlay = ({ links, className }: MenuOverlayProps): ReactNode => {
    const pathname = usePathname();
    return (
        <ul className={className}>
            <>
                {links.map(({ title, path }) => (
                    <li key={title + "Mobile"}>
                        <NavLink href={path} active={pathname === path}>
                            {" "}
                            {title}
                        </NavLink>
                    </li>
                ))}
            </>
        </ul>
    );
};

export default MenuOverlay;
