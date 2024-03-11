"use client";

import "@/styles/NavBar.css";
import {
    SyntheticEvent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

//next
import Link from "next/link";
import { usePathname } from "next/navigation";
//types
import { NavLinkType } from "@/types/types";

//components
import MenuOverlay from "@/components/NavBarElements/MenuOverlay";
import NavLink from "@/components/NavBarElements/NavLink";
import { Bars3Icon } from "@heroicons/react/24/solid";

const navLinksArr: NavLinkType[] = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Projects",
        path: "/projects",
    },
    {
        title: "Contact",
        path: "/contact",
    },
];

const NavBar = () => {
    const pathname = usePathname();

    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleScroll = useCallback(() => {
        if (isOpen) {
            setTimeout(() => setIsOpen(false), 250);
        }
    }, [isOpen]);
    const HandleOpen = useCallback((e: SyntheticEvent) => {
        setIsOpen((prev) => !prev);
    }, []);
    const HandleClick = useCallback((e: MouseEvent) => {
        if (
            !menuRef.current?.contains(e.target as Node) &&
            !buttonRef.current?.contains(e.target as Node)
        ) {
            setIsOpen(false);
        }
    }, []);
    useEffect(() => {
        console.log(pathname);
        document.addEventListener("scroll", () => handleScroll());
        document.addEventListener("click", (e) => HandleClick(e));
        return () => {
            document.removeEventListener("scroll", handleScroll);
            document.removeEventListener("click", (e) => HandleClick(e));
        };
    }, [isOpen, handleScroll, HandleClick, pathname]);
    return (
        <nav className=" sticky left-0 right-0 top-0 z-10 bg-[#121212] bg-opacity-[1] ">
            <div className="gradient-border z-10 mx-auto flex min-h-[12vh] flex-wrap items-center justify-between p-6">
                <Link
                    href={"/"}
                    className=" text-xl font-bold text-white md:text-5xl"
                >
                    lendy
                </Link>
                <div className="block md:hidden">
                    <button
                        className=" :hover:border-white flex items-center rounded border border-slate-200 px-2 py-2 text-slate-200 hover:text-white"
                        onClick={(e) => HandleOpen(e)}
                        ref={buttonRef}
                    >
                        <Bars3Icon
                            className={`title h-4 w-4 transition-all duration-700 ${
                                isOpen ? "rotate-[270deg] transform" : ""
                            }`}
                            title="Open Menu"
                        />
                    </button>
                </div>
                <div className="menu hidden md:block md:w-auto">
                    <ul className="flex w-full  flex-col gap-1 md:flex-row md:gap-14 lg:gap-20">
                        {navLinksArr.map(({ title, path }) => (
                            <li key={title}>
                                <NavLink href={path} active={pathname === path}>
                                    {title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div
                className={`mobileMenu relative transition-all duration-700 md:hidden ${
                    isOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
                key="mobileMenu"
                ref={menuRef}
            >
                <MenuOverlay
                    links={navLinksArr}
                    className={
                        "absolute  right-0 top-0 z-[8] flex min-h-[88vh] w-40 flex-col items-center justify-center bg-[#212121] bg-opacity-90 py-4 transition-all duration-700 md:hidden " +
                        `${isOpen ? "" : "translate-x-full"}`
                    }
                />
            </div>
        </nav>
    );
};

export default NavBar;
