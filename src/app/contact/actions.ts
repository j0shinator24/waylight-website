"use server"

import { writeFile, readFile, mkdir } from "fs/promises"
import { join } from "path"

export async function submitContactForm(formData: FormData) {
  const submission = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: (formData.get("phone") as string) || "",
    role: (formData.get("role") as string) || "",
    enquiry: formData.get("enquiry") as string,
    submittedAt: new Date().toISOString(),
  }

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

  // TODO: Wire to email service (Resend, SendGrid, etc.) when credentials are available
  // e.g. await resend.emails.send({ from, to: 'hello@waylightpm.com.au', subject, text })

  return { success: true }
}
