import React, { CSSProperties } from "react";

export type NavLinkType = {
    title: string;
    path: string;
};

export interface NavLinkProps extends React.ComponentPropsWithoutRef<"a"> {
    href: string;
    active: boolean;
}
export interface MenuOverlayProps {
    links: NavLinkType[];
    className?: string;
}

export interface PropsForAnimation {
    sequence: Array<string | number>;
    speed: any;
    style?: CSSProperties;
}

export interface TabButtonProps {
    isActive: boolean;
    title: string;
    onClick: () => void;
    id: string;
}

export interface TabData {
    title: string;
    content: React.ReactNode;
    id: string;
}

export interface ProjectCardProps {
    title: string;
    description: string;
    imgUrl: string;
    gitUrl: string;
    liveUrl: string;
}
export interface ProjectCardData extends ProjectCardProps {
    id: number;
    tag: string[];
}
