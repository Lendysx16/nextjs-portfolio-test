"use client";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { TabData } from "@/types/types";

const TabButtons: TabData[] = [
    {
        id: "skills",
        title: "Skills",
        content: (
            <div>
                I have an experience with react, vue3, TypeScript. In my work I
                used MySql and Postgresql, both with Prisma orm.
            </div>
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
    const [tab, setTab] = useState<string>("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id: string) => {
        startTransition(() => setTab(id));
    };
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
            <div className=" h-32 overflow-y-clip">
                {TabButtons.find(({ id }) => id === tab)?.content}
            </div>
        </div>
    );
};

export default AboutSectionInfo;
