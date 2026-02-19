import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (
      !body.full_name?.trim() ||
      !body.email?.trim() ||
      !body.subject?.trim() ||
      !body.message?.trim()
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Prepare data for external API - replace empty optional fields with "Not Available"
    const preparedData = {
      full_name: body.full_name?.trim(),
      email: body.email?.trim(),
      phone: body.phone?.trim() || "Not Available",
      company_name: body.company_name?.trim() || "Not Available",
      subject: body.subject?.trim(),
      message: body.message?.trim(),
    };

    // Forward the request to the external API
    const response = await fetch(
      "https://multi-project-form-email-api.vercel.app/api/apex",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(preparedData),
      },
    );

    let data;
    try {
      data = await response.json();
    } catch {
      // If response is not JSON, return a generic error
      return NextResponse.json(
        { error: "Invalid response from email service" },
        { status: 500 },
      );
    }

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error || "Failed to submit form" },
        { status: response.status },
      );
    }

    return NextResponse.json(
      { success: true, message: "Form submitted successfully", ...data },
      { status: 200 },
    );
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 },
    );
  }
}
