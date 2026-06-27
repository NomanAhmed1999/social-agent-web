import Link from "next/link";
import Image from "next/image";

export default function TermsOfService() {
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
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Terms of Service</h1>
          <p className="text-sm text-zinc-500 mb-10">Effective Date: June 27, 2026</p>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">1. Terms Acceptance</h2>
            <p className="text-sm leading-relaxed text-zinc-300 mb-4">
              By installing, copying, or executing the **Social Agent** scripts and helper utilities, you agree to comply with and be bound by these Terms of Service. If you do not agree, do not run the software.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">2. License & Local Use</h2>
            <p className="text-sm leading-relaxed text-zinc-300 mb-4">
              Social Agent grants you a personal, non-exclusive, non-transferable license to run the Python scripts and local configurations on your computer systems.
            </p>
            <p className="text-sm leading-relaxed text-zinc-300 mb-4">
              You understand that the script runs entirely under your own user permissions and you are responsible for maintaining the security of your local environment (such as protecting your <code>.env</code> file).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">3. API Compliance & Limitations</h2>
            <p className="text-sm leading-relaxed text-zinc-300 mb-4">
              Social Agent interfaces with official platform APIs (LinkedIn, Facebook, Instagram, YouTube, TikTok).
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li className="text-sm leading-relaxed text-zinc-300">
                <strong>Platform Rules:</strong> You agree not to use Social Agent to publish spam, prohibited content, or violate the terms of service of the respective platforms.
              </li>
              <li className="text-sm leading-relaxed text-zinc-300">
                <strong>Rate Limits:</strong> You agree to respect the API rate limits set by each platform. Social Agent is not liable for accounts flagged, suspended, or rate-limited due to excessive posting or policy violations.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">4. Disclaimer of Warranty</h2>
            <p className="text-sm leading-relaxed text-zinc-300 mb-4 uppercase">
              THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">5. Service Modifications</h2>
            <p className="text-sm leading-relaxed text-zinc-300 mb-4">
              Since the software is run locally on your system, modifications, updates, or script upgrades are at your discretion. We may release script updates to maintain compatibility with changes in third-party APIs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">6. Governing Law</h2>
            <p className="text-sm leading-relaxed text-zinc-300 mb-4">
              These Terms of Service shall be governed by and construed in accordance with the laws of your local jurisdiction, without regard to conflict of law principles.
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
            <Link href="/privacy" className="text-xs text-zinc-500 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
