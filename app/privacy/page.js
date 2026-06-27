import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 flex flex-col">
      {/* Navigation Header */}
      <header className="backdrop-blur-xl bg-gradient-to-b from-[#0f0c1e]/85 to-black/50 border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.6),inset_0_-1px_0_rgba(255,255,255,0.03)] w-full">
        <div className="max-w-3xl mx-auto px-8 py-4 flex justify-between items-center flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-3 text-white">
            <Image 
              src="/social-agent.png" 
              alt="Social Agent Logo" 
              width={36} 
              height={36} 
              priority
              className="rounded-lg block"
            />
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Social Agent
            </span>
          </div>
          <nav className="flex gap-6">
            <Link 
              href="/" 
              className="text-sm text-zinc-400 hover:text-white transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-gradient-to-r after:from-violet-500 after:to-fuchsia-500 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
            >
              Back to Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-3xl mx-auto px-8 py-12 w-full z-10 relative">
        <article className="backdrop-blur-md bg-zinc-900/60 border border-white/5 p-8 md:p-12 rounded-xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Privacy Policy</h1>
          <p className="text-sm text-zinc-500 mb-10">Effective Date: June 27, 2026</p>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">1. Introduction</h2>
            <p className="text-sm leading-relaxed text-zinc-300 mb-4">
              Welcome to **Social Agent**. We are committed to protecting your privacy. Social Agent is designed as a **local-first command-line application** and helper script environment to automate posting and media uploads to social media networks.
            </p>
            <p className="text-sm leading-relaxed text-zinc-300 mb-4">
              This Privacy Policy explains how Social Agent handles your credentials, API tokens, media assets, and personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">2. Local-First Data Storage</h2>
            <p className="text-sm leading-relaxed text-zinc-300 mb-4">
              Social Agent values your security above all else. **We do not host or operate database servers or cloud databases for your credentials.**
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li className="text-sm leading-relaxed text-zinc-300">
                <strong>API Keys and App Credentials:</strong> All credentials (such as Client IDs, Client Secrets, Page Tokens, and Access Tokens) are stored directly on your personal computer in a local configuration file named <code>.env</code>.
              </li>
              <li className="text-sm leading-relaxed text-zinc-300">
                <strong>YouTube Credentials:</strong> Authorized Google tokens are stored locally on your machine in a file named <code>youtube_credentials.json</code>.
              </li>
              <li className="text-sm leading-relaxed text-zinc-300">
                <strong>No Cloud Collection:</strong> Social Agent does not collect, transmit, or save any of your credentials, keys, or tokens to third-party databases or our own servers.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">3. Media Processing & Uploads</h2>
            <p className="text-sm leading-relaxed text-zinc-300 mb-4">
              When you use Social Agent to publish image or video files:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li className="text-sm leading-relaxed text-zinc-300">
                <strong>Direct API Transfer:</strong> For LinkedIn, Facebook Page, and YouTube uploads, media files are read from your local directory and uploaded directly to the platforms' official API endpoints over secure HTTPS.
              </li>
              <li className="text-sm leading-relaxed text-zinc-300">
                <strong>Instagram Temporary Hosting:</strong> Because the Instagram Graph API requires media to be available at a public URL for container creation, Social Agent temporarily hosts your local media files on <code>tmpfiles.org</code>. This service generates a temporary direct download link.
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li className="text-sm text-zinc-400">The link is passed directly to the Instagram API container creation endpoint.</li>
                  <li className="text-sm text-zinc-400">Once Instagram finishes downloading and processing the container, the link is discarded and deleted.</li>
                  <li className="text-sm text-zinc-400">No media is cached or stored permanently by Social Agent.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">4. Third-Party Platform APIs</h2>
            <p className="text-sm leading-relaxed text-zinc-300 mb-4">
              By using Social Agent, you authorize the application to connect to third-party APIs. Your data is subject to the privacy policies of the respective platforms:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li className="text-sm leading-relaxed text-zinc-300">
                <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline transition-colors duration-200">
                  LinkedIn Privacy Policy
                </a>
              </li>
              <li className="text-sm leading-relaxed text-zinc-300">
                <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline transition-colors duration-200">
                  Meta (Facebook/Instagram) Privacy Policy
                </a>
              </li>
              <li className="text-sm leading-relaxed text-zinc-300">
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline transition-colors duration-200">
                  Google (YouTube) Privacy Policy
                </a>
              </li>
              <li className="text-sm leading-relaxed text-zinc-300">
                <a href="https://www.tiktok.com/legal/page/row/privacy-policy/en" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline transition-colors duration-200">
                  TikTok Privacy Policy
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">5. Changes to This Policy</h2>
            <p className="text-sm leading-relaxed text-zinc-300 mb-4">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">6. Contact Us</h2>
            <p className="text-sm leading-relaxed text-zinc-300 mb-4">
              If you have any questions or concerns about this local privacy model, you can reach out to us at: <strong>support@socialagent.local</strong>
            </p>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-zinc-950 py-10 px-8">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-xs text-zinc-500">&copy; {new Date().getFullYear()} Social Agent. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="text-xs text-zinc-500 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <Link href="/terms" className="text-xs text-zinc-500 hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
