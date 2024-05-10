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
    description: string | null;
    imgUrl: string | null;
    gitUrl: string | null;
    liveUrl: string | null;
}

export interface ProjectCardProperties extends ProjectCardProps {
    id: number;
}
export interface ProjectCardData {
    [key: string]: ProjectCardProperties[];
}

export type NotionResponseType = {
    id: {
        id: string;
        type: "unique_id";
        unique_id: {
            prefix: string;
            number: number;
        };
    };
    Description: {
        id: string;
        type: string;
        rich_text: any;
    };
    imgUrl: {
        id: string;
        type: "url";
        url: string;
    };
    gitUrl: {
        id: string;
        type: "url";
        url: string;
    };
    liveUrl: {
        id: string;
        type: "url";
        url: string;
    };
    tags: {
        id: string;
        type: "multi_select";
        multi_select: { id: string; name: string; color: string }[];
    };
    Title: {
        id: string;
        type: "title";
        title: {
            type: string;
            text: {
                content: string;
                link: null | string;
            };
            annotations: any;
            plain_text: string;
            href: null | string;
        }[];
    };
};

export interface EmailTemplateProps {
    email: string;
    subject: string;
    messageText: string;
}
