"use server"

import { z } from "zod"

const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(200, "Name must be 200 characters or fewer"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z.string().optional().default(""),
  role: z.string().optional().default(""),
  enquiry: z
    .string()
    .min(1, "Please tell us how we can help")
    .max(5000, "Enquiry must be 5,000 characters or fewer"),
  website: z.string().optional().default(""),
})

export async function submitContactForm(
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  const raw = {
    name: formData.get("name") ?? "",
    email: formData.get("email") ?? "",
    phone: formData.get("phone") ?? "",
    role: formData.get("role") ?? "",
    enquiry: formData.get("enquiry") ?? "",
    website: formData.get("website") ?? "",
  }

  const result = contactFormSchema.safeParse(raw)

  if (!result.success) {
    const firstError = result.error.issues[0]?.message ?? "Invalid form data"
    return { success: false, error: firstError }
  }

  const { website, ...fields } = result.data

  // Honeypot field - bots fill hidden fields, real users do not
  if (website) {
    return { success: true }
  }

  const submission = {
    ...fields,
    submittedAt: new Date().toISOString(),
  }

  // Visible to operator via `wrangler tail` until a real email/store is wired up.
  // Tagged so it's grep-able in Cloudflare's log stream.
  console.log("CONTACT_SUBMISSION", JSON.stringify(submission))

  // TODO: Wire to email service (Resend) and/or Cloudflare KV for persistence.
  // Until then, console output is the only record - read live via:
  //   wrangler tail waylight-website --format pretty | grep CONTACT_SUBMISSION

  return { success: true }
}
