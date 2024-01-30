import React from "react";
import Link from "next/link";

const notFoundPage = () => {
  const h1Class = "font-bold text-[30px] sm:text-[50px] md:text-[70px]";
  return (
    <>
      <section
        className={
          "relative flex min-h-[88svh] w-full flex-col justify-center bg-[#101014] "
        }
      >
        <div className="mx-auto flex w-1/2 flex-col gap-10 text-slate-100 md:ml-36">
          <h1 className={h1Class}>Sorry.</h1>
          <h1 className={h1Class}>This page does not exists yet.</h1>
          <Link
            href="/"
            className="cursor-pointer self-start text-white underline underline-offset-4"
          >
            Back to homepage
          </Link>
        </div>
      </section>
    </>
  );
};

export default notFoundPage;
