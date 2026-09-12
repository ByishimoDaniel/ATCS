import { NextResponse } from "next/server";
import { company } from "@/data/company";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  product?: string;
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!payload.name || !payload.phone || !payload.message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const formId = process.env.FORMSPREE_FORM_ID;

  if (formId) {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
        _subject: `ATCS website enquiry from ${payload.name}`,
        _replyto: payload.email || company.email,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, error: "Formspree request failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, mode: "formspree" });
  }

  return NextResponse.json({ ok: true, mode: "unconfigured" });
}
