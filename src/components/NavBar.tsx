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

//types
import { NavLinkType } from "@/types/types";

//components
import MenuOverlay from "@/components/MenuOverlay";
import NavLink from "@/components/NavLink";
import { Bars3Icon } from "@heroicons/react/24/solid";

const navLinksArr: NavLinkType[] = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];
const NavBar = () => {
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
        document.addEventListener("scroll", () => handleScroll());
        document.addEventListener("click", (e) => HandleClick(e));
        return () => {
            document.removeEventListener("scroll", handleScroll);
            document.removeEventListener("click", (e) => HandleClick(e));
        };
    }, [isOpen, handleScroll, HandleClick]);
    return (
        <nav className=" sticky top-0 left-0 right-0 z-10 bg-[#202020] bg-opacity-[1] ">
            <div className="flex flex-wrap items-center justify-between mx-auto p-6 min-h-[12vh] z-10 gradient-border">
                <Link
                    href={"/"}
                    className="text-xl md:text-5xl text-white font-bold"
                >
                    LOGO
                </Link>
                <div className="block md:hidden">
                    <button
                        className=" flex items-center px-2 py-2 border rounded border-slate-200 text-slate-200 hover:text-white :hover:border-white"
                        onClick={(e) => HandleOpen(e)}
                        ref={buttonRef}
                    >
                        <Bars3Icon
                            className={`h-4 w-4 title transition-all duration-700 ${
                                isOpen ? "transform rotate-[270deg]" : ""
                            }`}
                            title="Open Menu"
                        />
                    </button>
                </div>
                <div className="menu hidden md:block md:w-auto">
                    <ul className="flex w-full  gap-1 md:gap-20 md:flex-row flex-col">
                        {navLinksArr.map(({ title, path }) => (
                            <li key={title}>
                                <NavLink href={path}>{title}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div
                className={`md:hidden relative mobileMenu duration-700 transition-all ${
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                key="mobileMenu"
                ref={menuRef}
            >
                <MenuOverlay
                    links={navLinksArr}
                    className={
                        "min-h-[88vh]  transition-all duration-700 flex flex-col py-4 items-center absolute right-0 top-0 w-40 md:hidden justify-center bg-[#212121] bg-opacity-90 z-[8] " +
                        `${isOpen ? "" : "translate-x-full"}`
                    }
                />
            </div>
        </nav>
    );
};

export default NavBar;
