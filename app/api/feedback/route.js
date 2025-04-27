import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.json();

    const response = await fetch("https://api.sendinblue.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.SENDINBLUE_API_KEY,
      },
      body: JSON.stringify({
        sender: { email: "mail.officialrt50@gmail.com" }, // Ganti dengan email pengirim
        to: [{ email: "mail.officialrt50@gmail.com" }], // Ganti dengan email penerima
        subject: "Feedback Received",
        htmlContent: `<h3>Feedback from ${formData.name}</h3><p>${formData.message}</p>`,
      }),
    });

    // if (!response.ok) {
    //   throw new Error("Failed to submit form");
    // }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { error: "Failed to submit feedback" },
      { status: 500 }
    );
  }
}
