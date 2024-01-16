import { CSSProperties } from "react";

export type NavLinkType = {
    title: string;
    path: string;
};

export interface NavLinkProps extends React.ComponentPropsWithoutRef<"a"> {
    href: string;
}
export interface MenuOverlayProps { 
    links: NavLinkType[]
    className?: string
}

export interface PropsForAnimation {
    sequence: Array<string | number>;
    speed: any;
    style?: CSSProperties;
}