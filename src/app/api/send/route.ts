import EmailTemplate from "@/components/Email/EmailTemplate";
import { EmailTemplateProps } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const props = (await req.json()) as EmailTemplateProps;
        console.log(props);
        const data = await resend.emails.send({
            from: "dev@lendysx16.ru",
            to: ["sarovgleb@gmail.com"],
            subject: props.subject,
            text: props.messageText,
            react: EmailTemplate({ ...props }),
        });
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 400 });
    }
}
