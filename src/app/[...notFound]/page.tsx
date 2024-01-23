import React from "react";
import Link from "next/link";

const notFoundPage = () => {
    const h1Class = "font-bold text-[30px] sm:text-[50px] md:text-[70px]";
    return (
        <>
            <section
                className={
                    "min-h-[88svh] w-full flex relative flex-col bg-[#202020] justify-center "
                }
            >
                <div className="mx-auto md:ml-36 text-slate-100 gap-10 flex flex-col w-1/2">
                    <h1 className={h1Class}>Sorry.</h1>
                    <h1 className={h1Class}>This page does not exists yet.</h1>
                    <Link
                        href="/"
                        className="text-white underline-offset-4 underline cursor-pointer self-start"
                    >
                        Back to homepage
                    </Link>
                </div>
            </section>
        </>
    );
};

export default notFoundPage;
