import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, phone, email, matter, message } = body;

    if (!name || !phone || !email || !matter || !message) {
      return NextResponse.json(
        { error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Shiraz Legal Website <onboarding@resend.dev>",
      to: ["shirazlegalassociates@gmail.com"],
      subject: `New Legal Inquiry - ${matter}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Legal Matter:</strong> ${matter}</p>

          <h3>Message</h3>
          <p>${message}</p>

          <hr />

          <p>
            Sent from Shiraz Legal Associates website.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);

      return NextResponse.json(
        { error: "Unable to send email." },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}