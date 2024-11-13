import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
            >
              <path
                d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                fill="#7C3AED"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl font-bold">TaskEase</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">Last Updated: November 10, 2024</p>
        <div className="prose max-w-none">
          <p>At TaskEase, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information.</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Personal Information:</strong> When you sign up, we collect your name, email, and any additional information you provide.</li>
            <li><strong>Task Data:</strong> As part of using our AI-powered task management service, we collect and store your tasks and subtask information.</li>
            <li><strong>Usage Data:</strong> We may collect information about how you interact with the App, including device information, IP addresses, and usage patterns, to improve our services.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Provide Services:</strong> We use your information to operate, maintain, and provide you with TaskEase's task management services.</li>
            <li><strong>Enhance Experience:</strong> Data is used to personalize and improve the App's features, particularly the AI that breaks tasks into subtasks.</li>
            <li><strong>Communication:</strong> We may use your email to provide you with updates about the service, respond to inquiries, and share information regarding changes to the App or our policies.</li>
            <li><strong>Analytics and Improvement:</strong> We may use analytics and third-party cookies to track usage patterns, understand how users interact with the App, and improve our services.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Cookies and Tracking Technologies</h2>
          <p><strong>Types of Cookies:</strong> TaskEase may use both first-party and third-party cookies to enhance your experience. These cookies include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Essential Cookies required for basic functionality.</li>
            <li>Analytics Cookies to help us understand user behavior and improve our services.</li>
            <li>Third-Party Cookies from service providers who assist us in analytics and advertising.</li>
          </ul>
          <p><strong>Managing Cookies:</strong> You can control your cookie preferences in your browser settings, though disabling cookies may impact your experience. For more information on how we use cookies, please refer to our Cookie Policy.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Data Security</h2>
          <p>We take data security seriously. All data is stored in a secure, protected database, and we employ various security measures to safeguard your data against unauthorized access, alteration, disclosure, or destruction.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Data Retention and Deletion</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Retention:</strong> We retain your data as long as you maintain an account with us.</li>
            <li><strong>Deletion:</strong> You have the right to delete your account at any time from your profile page. Once deleted, your profile and all associated data are removed from our system, except as needed to comply with legal obligations.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">6. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access and review your personal data.</li>
            <li>Request corrections to inaccurate information.</li>
            <li>Request deletion or restrict processing of your data.</li>
            <li>Object to data processing or request data portability.</li>
          </ul>
          <p>To exercise these rights, please contact us at <a href="mailto:hello@gettaskease.com" className="text-violet-600 hover:underline">hello@gettaskease.com</a>.</p>
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
          © 2024 TaskEase. All rights reserved.
        </div>
      </footer>
    </div>
  )
}