"use server"

import { writeFile, readFile, mkdir } from "fs/promises"
import { join } from "path"
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

  try {
    // Store submissions locally until an email service is configured
    const dir = join(process.cwd(), "data")
    const file = join(dir, "contact-submissions.json")

    await mkdir(dir, { recursive: true })

    let submissions: typeof submission[] = []
    try {
      const existing = await readFile(file, "utf-8")
      submissions = JSON.parse(existing)
    } catch {
      // File doesn't exist yet
    }

    submissions.push(submission)
    await writeFile(file, JSON.stringify(submissions, null, 2))
  } catch (err) {
    console.error("Failed to save contact submission:", err)
    return {
      success: false,
      error: "Something went wrong. Please try again or email us directly.",
    }
  }

  // TODO: Wire to email service (Resend, SendGrid, etc.) when credentials are available
  // e.g. await resend.emails.send({ from, to: 'hello@waylightpm.com.au', subject, text })

  return { success: true }
}
