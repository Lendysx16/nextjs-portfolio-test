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
                <div>
                    I have an experience with react, vue3, TypeScript. In my
                    work I used MySql and Postgresql, both with Prisma orm.
                </div>
                <div>
                    I have an experience with react, vue3, TypeScript. In my
                    work I used MySql and Postgresql, both with Prisma orm.
                </div>
                <div>
                    I have an experience with react, vue3, TypeScript. In my
                    work I used MySql and Postgresql, both with Prisma orm.
                </div>
                <div>
                    I have an experience with react, vue3, TypeScript. In my
                    work I used MySql and Postgresql, both with Prisma orm.
                </div>
            </>
        ),
    },
    {
        id: "experience",
        title: "Experience",
        content: <div>No experience blin</div>,
    },
    {
        id: "education",
        title: "Education",
        content: (
            <ul className="list-decimal">
                <li>Saint Petersburg State University (2021 - 2025)</li>
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
        [startTransition, setTab]
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
        <div className=" flex flex-col gap-8 h-full xl:text-xl lg:text-lg max-w-[350px]">
            <h2 className="text-4xl font-bold text-center">About me</h2>
            <p className=" text-justify text-slate-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat voluptatibus quasi assumenda repellat minus odit,
                praesentium laborum quae aperiam provident in nostrum sequi
                nulla sint eligendi incidunt inventore earum perferendis.
            </p>
            <div className="flex flex-row mt-8 gap-3 justify-between md:justify-start">
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
            <div className=" h-40  scrollbar-none relative">
                <div
                    className="h-32 overflow-y-scroll text-ellipsis text-wrap scrollbar-none"
                    ref={scrollableEl}
                >
                    {TabButtons.find(({ id }) => id === tab)?.content}
                </div>
                <div
                    className=" w-full mt-8 relative pb-8"
                    onClick={() => {
                        scrollableEl.current?.scrollBy({
                            top: 100,
                            behavior: "smooth",
                        });
                    }}
                >
                    <div
                        className="absolute w-full cursor-pointer"
                        id="ifScrollThenShow"
                    >
                        <ArrowDownIcon
                            className=" mx-auto animate-bounce"
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
