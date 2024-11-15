import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function TermsOfUse() {
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
        <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
        <p className="text-sm text-gray-500 mb-6">Last Updated: November 10, 2024</p>
        <div className="prose max-w-none">
          <p>Welcome to TaskEase! By accessing or using https://gettaskease.com (the &ldquo;Website&rdquo;) or the TaskEase application (the &ldquo;App&rdquo;), you agree to these Terms of Use (the &ldquo;Terms&rdquo;). If you do not agree, please refrain from using our services.</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
          <p>By creating an account or using our services, you agree to these Terms, and they govern your relationship with TaskEase (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We may update these Terms periodically. You will be notified of significant changes, but it is your responsibility to review the Terms regularly.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Account and Security</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Eligibility:</strong> You must be at least 18 years old or have the permission of a guardian to use our services.</li>
            <li><strong>Account Creation:</strong> You agree to provide accurate information when creating your account and to keep this information updated.</li>
            <li><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account details and any activities conducted under your account.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Use of Services</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>License Grant:</strong> We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the App for personal task management.</li>
            <li><strong>Prohibited Use:</strong> You agree not to misuse our services, including but not limited to:
              <ul className="list-disc pl-6 mt-2">
                <li>Accessing the service through unauthorized means.</li>
                <li>Interfering with or disrupting our systems or networks.</li>
                <li>Using automated tools (e.g., bots) without our consent.</li>
              </ul>
            </li>
            <li><strong>Intellectual Property:</strong> All content and intellectual property rights in the App and Website belong to TaskEase. You may not reproduce or distribute any part of the service without our permission.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. AI-Powered Features</h2>
          <p>Our App uses artificial intelligence to break tasks into subtasks for your convenience. While we strive for high accuracy, these breakdowns may not be perfect, and you are encouraged to review and adjust them as needed.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Privacy Policy</h2>
          <p>Your use of TaskEase is also governed by our Privacy Policy, which outlines how we collect, use, and protect your data. By using our services, you agree to the terms outlined in the Privacy Policy.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">6. User Data</h2>
          <p>Your tasks and any information you provide are stored in a protected database. You retain the right to delete your profile and data at any time via your profile page. Upon deletion, all associated data will be removed from our system in accordance with our data retention policies.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">7. Disclaimer of Warranties</h2>
          <p>Our services are provided &quot;as is&quot; and &quot;as available.&quot; TaskEase disclaims any warranties, including but not limited to fitness for a particular purpose and non-infringement. We do not guarantee that the App will be free from errors or interruptions.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">8. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, TaskEase shall not be liable for any indirect, incidental, or consequential damages resulting from your use of our services. Our total liability shall not exceed the amount you have paid, if any, to use the App.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">9. Termination</h2>
          <p>We reserve the right to suspend or terminate your access to the App for any &ldquo;reason,&rdquo; including but not limited to &ldquo;violation&rdquo; of these &ldquo;Terms.&rdquo;</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">10. Governing Law and Dispute Resolution</h2>
          <p>These Terms are governed by the laws of the state of Israel. Any disputes arising from these Terms will be resolved exclusively in the courts of the state of Israel.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">11. Contact Us</h2>
          <p>If you have any questions or concerns about these Terms, please contact us at <a href="mailto:hello@gettaskease.com" className="text-violet-600 hover:underline">hello@gettaskease.com</a>.</p>
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
          &copy; 2024 TaskEase. All rights reserved.
        </div>
      </footer>
    </div>
  )
}