"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "()/icons/githubIcon.svg";
const EmailValues = z.object({
  email: z.string().email({ message: "Invalid email" }),
  hidden_el: z.string(),
  subject: z
    .string()
    .min(5, { message: "subject should be at least 5 characters" }),
  message: z
    .string()
    .min(5, { message: "message should be at least 5 characters" }),
});

type EmailFormValues = z.infer<typeof EmailValues>;

const stylesForInputs =
  "focus:outline-none border border-[#404040] p-2.5 bg-[#181818] text-white rounded-lg";
const errorStyle = "text-red-500 text-sm font-bold";

const sendEmail = async (data: EmailFormValues) => {
  const response = await fetch("/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      subject: data.subject,
      messageText: data.message,
    }),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
};
const EmailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<EmailFormValues>({ resolver: zodResolver(EmailValues) });

  const onSubmit: SubmitHandler<EmailFormValues> = async (data) => {
    if (data.hidden_el) {
      setError("email", { message: "Are you a robot?" });
    }
    try {
      await sendEmail(data);
      reset();
    } catch (error) {
      setError("root", { message: "Something went wrong" });
    }
  };

  return (
    <section className="grid items-center gap-20 py-24 md:grid-cols-2 md:gap-8">
      <div className="-traslate-x-1/2 -translate-1/2 absolute -left-[150px] -top-[50px] z-0 h-80 w-80 transform rounded-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-700 to-transparent blur-3xl"></div>
      <div className="my-2 flex flex-col gap-4 text-xl font-bold text-white">
        <h5>Contact me</h5>
        <p className="mb-4 max-w-md font-medium text-[#ADB7BE]">
          I am currently looking for new opportunities
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/lendysx16" target="_blank">
            <Image
              className="h-[45px] w-[45px]"
              src={GithubIcon}
              alt="github icon"
            />
          </Link>
        </div>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <span className="font-bold text-white"> Your email</span>
        <input
          type="text"
          {...register("email")}
          placeholder="example@email.com"
          className={`${stylesForInputs} `}
        />
        <input type="text" {...register("hidden_el")} className="hidden" />
        {errors.email && (
          <span className={errorStyle}>{errors.email.message}</span>
        )}
        <span className="font-bold text-white">Subject</span>
        <input
          type="text"
          {...register("subject")}
          placeholder="Email theme"
          className={`${stylesForInputs} `}
        />
        {errors.subject && (
          <span className={errorStyle}>{errors.subject.message}</span>
        )}
        <span className="font-bold text-white">Message</span>
        <textarea
          {...register("message")}
          className={`${stylesForInputs} h-[150px] resize-none`}
          placeholder="Message text"
        ></textarea>
        {errors.message && (
          <span className={errorStyle}>{errors.message.message}</span>
        )}
        {errors.root && (
          <span className={errorStyle}>{errors.root.message}</span>
        )}
        <button
          type="submit"
          className=" w-60 self-center rounded-lg border border-[#404040] bg-[#181818] px-6 py-2 font-bold text-white "
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : errors.root ? "Error" : "Send"}
        </button>
      </form>
    </section>
  );
};

export default EmailForm;
