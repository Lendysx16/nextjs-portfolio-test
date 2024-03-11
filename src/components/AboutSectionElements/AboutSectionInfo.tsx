"use client";
import { useState, useTransition, useRef, useEffect, useCallback } from "react";
import TabButton from "./TabButton";
import { TabData } from "@/types/types";
import { ArrowDownIcon } from "@heroicons/react/20/solid";
const TabButtons: TabData[] = [
    {
        id: "skills",
        title: "Skills",
        content: (
            <>
                <ul className="grid grid-cols-3">
                    <li>C++ </li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                    <li>NextJS</li>
                    <li>Git</li>
                    <li>GitHub</li>
                </ul>
            </>
        ),
    },
    {
        id: "experience",
        title: "Experience",
        content: (
            <div className="text-sm">
                I had an experience with JQuery, Express + handlebars, sequilize
                and typeorm while working on{" "}
                <a
                    href="https://vergomusic.com"
                    target="_blank"
                    className="font-medium text-blue-200"
                >
                    vergomusic
                </a>
                <br />
                For databases I used MySql and PostgreSql. Also for deployment i
                used Nginx and docker-compose.
            </div>
        ),
    },
    {
        id: "education",
        title: "Education",
        content: (
            <ul className="text-sm">
                <li>
                    Saint Petersburg State University 2021 - 2025. Faculty of
                    Applied Mathematics and Control Processes.
                </li>
            </ul>
        ),
    },
];

const AboutSectionInfo = () => {
    const scrollableEl = useRef<HTMLDivElement>(null);
    const [tab, setTab] = useState<string>("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = useCallback(
        (id: string) => {
            startTransition(() => setTab(id));
        },
        [startTransition, setTab],
    );

    const HandleScroll = useCallback(() => {
        if (scrollableEl.current) {
            const elementToShow = document.querySelector("#ifScrollThenShow");
            if (
                scrollableEl.current.scrollTop + 128 <
                scrollableEl.current.scrollHeight
            ) {
                if (elementToShow) {
                    elementToShow.classList.remove("hidden");
                }
            } else {
                if (elementToShow) {
                    elementToShow.classList.add("hidden");
                }
            }
        }
    }, []);
    useEffect(() => {
        HandleScroll();
        scrollableEl.current?.addEventListener("scroll", () => HandleScroll());
        const copy = scrollableEl;
        return () => {
            copy.current?.removeEventListener("scroll", () => HandleScroll());
        };
    }, [tab, HandleScroll]);
    return (
        <div className=" flex h-full max-w-[600px] flex-col gap-8 lg:text-lg xl:text-xl">
            <h2 className="text-center text-4xl font-bold">About me</h2>
            <p className=" text-justify text-slate-400">
                Hello! I'm a passionate web developer. My journey in the tech
                world is driven by a curiosity to explore and master new
                technologies, which has led me to delve into the realms of React
                and Express. Beyond the web, my technical toolkit includes a
                strong foundation in C++ and Python.
            </p>
            <div className="mt-8 flex w-full flex-row  justify-between md:justify-around">
                {TabButtons.map(({ title, id }) => (
                    <TabButton
                        key={id}
                        id={id}
                        title={title}
                        isActive={tab === id}
                        onClick={() => handleTabChange(id)}
                    />
                ))}
            </div>
            <div className=" scrollbar-none  relative h-40">
                <div
                    className="scrollbar-none h-32 overflow-y-scroll text-ellipsis text-wrap"
                    ref={scrollableEl}
                >
                    {TabButtons.find(({ id }) => id === tab)?.content}
                </div>
                <div className=" relative mt-8 w-full pb-8">
                    <div className="absolute w-full " id="ifScrollThenShow">
                        <ArrowDownIcon
                            onClick={() => {
                                scrollableEl.current?.scrollBy({
                                    top: 100,
                                    behavior: "smooth",
                                });
                            }}
                            className=" mx-auto animate-bounce cursor-pointer"
                            height={25}
                            width={25}
                            color={"#777"}
                        ></ArrowDownIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSectionInfo;
