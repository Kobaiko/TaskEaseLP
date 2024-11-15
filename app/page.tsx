import { LandingPageComponent } from "@/components/landing-page"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "TaskEase - Transform Big Projects into Manageable Steps",
  description: "TaskEase uses AI to break down your complex tasks into simple, actionable subtasks. Get more done with less stress.",
  icons: {
    icon: "/images/favicon.ico",
  },
}

export default function Page() {
  return <LandingPageComponent />
}