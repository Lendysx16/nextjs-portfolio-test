export type  NavLinkType = {
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