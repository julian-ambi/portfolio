import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_HcBc6vcC_AkPRPqLQzz5Wk9Acaf2fAu9X");

export const POST = async (request: NextRequest) => {
  try {
    const payload = await request.text();

    // Verify webhook signature
    const event = resend.webhooks.verify({
      payload,
      headers: {
        id: request.headers.get("svix-id") ?? "",
        timestamp: request.headers.get("svix-timestamp") ?? "",
        signature: request.headers.get("svix-signature") ?? "",
      },
      webhookSecret: "whsec_1HpcKG6Lb29f5j+Tj/d5mKNHShLQri/1",
    });

    if (event.type === "email.received") {
      // Webhook contains metadata only, fetch the full email
      const { data: email } = await resend.emails.receiving.get(
        event.data.email_id
      );

      if (email) {
        // Forward the received email
        await resend.emails.send({
          from: "System <contact@hxopii.resend.app>",
          to: ["julian.mok.ambition@gmail.com"],
          subject: `Fwd: ${email.subject}`,
          html: email.html || email.text || "",
        });
      }

      return NextResponse.json({ received: true });
    }

    return NextResponse.json({});
  } catch {
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
};
