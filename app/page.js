"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation presets
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div 
      className="min-h-screen relative overflow-hidden flex flex-col"
      style={{ background: 'radial-gradient(circle at 50% -20%, #150f30 0%, #030303 65%)' }}
    >
      {/* Background decoration gradients */}
      {/* <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none z-0" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,rgba(0,0,0,0)_70%)] pointer-events-none z-0" /> */}

      {/* Navigation Header */}
      <motion.header 
        className="backdrop-blur-xl bg-gradient-to-b from-[#0f0c1e]/85 to-black/50 border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.6),inset_0_-1px_0_rgba(255,255,255,0.03)] w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center flex-col sm:flex-row gap-4">
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
            <a 
              href="#features" 
              className="text-sm text-zinc-400 hover:text-white transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-gradient-to-r after:from-violet-500 after:to-fuchsia-500 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
            >
              Features
            </a>
            <a 
              href="#security" 
              className="text-sm text-zinc-400 hover:text-white transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-gradient-to-r after:from-violet-500 after:to-fuchsia-500 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
            >
              Security
            </a>
            <Link 
              href="/privacy" 
              className="text-sm text-zinc-400 hover:text-white transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-gradient-to-r after:from-violet-500 after:to-fuchsia-500 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-zinc-400 hover:text-white transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-gradient-to-r after:from-violet-500 after:to-fuchsia-500 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <main className="flex-1 max-w-6xl mx-auto px-8 py-16 z-10 relative">
        <motion.section 
          className="text-center max-w-3xl mx-auto my-8 md:my-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none mb-6 text-white" 
            variants={fadeInUp}
          >
            Automate Your Social Media With <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">AI Agents</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10" 
            variants={fadeInUp}
          >
            A professional developer tool to schedule, write, and publish posts and videos directly to LinkedIn, Facebook, Instagram, YouTube, and TikTok securely from your local machine.
          </motion.p>
          
          <motion.div className="flex gap-4 justify-center" variants={fadeInUp}>
            <a 
              href="#features" 
              className="bg-violet-600 text-white px-7 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-[0_4px_15px_rgba(139,92,246,0.3)] hover:bg-violet-700 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(139,92,246,0.4)]"
            >
              Explore Features
            </a>
            <a 
              href="#security" 
              className="bg-white/5 border border-white/10 text-white px-7 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
            >
              Read Security Protocol
            </a>
          </motion.div>
        </motion.section>

        {/* Features Grid */}
        <section id="features" className="mb-24">
          <motion.h2 
            className="text-3xl font-bold text-center mb-2 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Supported Platforms
          </motion.h2>
          <motion.p 
            className="text-base text-zinc-400 text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Publish and manage content directly using official platform APIs.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="backdrop-blur-md bg-zinc-900/60 border border-white/5 p-8 rounded-xl relative transition-all duration-300 hover:border-violet-500/40 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
              variants={fadeInUp}
            >
              <div className="text-3xl mb-6">🔗</div>
              <h3 className="text-lg font-semibold mb-3 text-white">LinkedIn Posting</h3>
              <p className="text-sm leading-relaxed text-zinc-400">Post updates, articles, images, and videos to personal profiles or company pages using LinkedIn's official API.</p>
            </motion.div>

            <motion.div 
              className="backdrop-blur-md bg-zinc-900/60 border border-white/5 p-8 rounded-xl relative transition-all duration-300 hover:border-violet-500/40 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
              variants={fadeInUp}
            >
              <div className="text-3xl mb-6">👥</div>
              <h3 className="text-lg font-semibold mb-3 text-white">Facebook Pages</h3>
              <p className="text-sm leading-relaxed text-zinc-400">Schedule posts, images, and videos directly to your Managed Facebook Page feeds via the Meta Graph API.</p>
            </motion.div>

            <motion.div 
              className="backdrop-blur-md bg-zinc-900/60 border border-white/5 p-8 rounded-xl relative transition-all duration-300 hover:border-violet-500/40 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
              variants={fadeInUp}
            >
              <div className="text-3xl mb-6">📸</div>
              <h3 className="text-lg font-semibold mb-3 text-white">Instagram Business</h3>
              <p className="text-sm leading-relaxed text-zinc-400">Publish photos, reels, and video containers automatically to your Business Account with custom captions.</p>
            </motion.div>

            <motion.div 
              className="backdrop-blur-md bg-zinc-900/60 border border-white/5 p-8 rounded-xl relative transition-all duration-300 hover:border-violet-500/40 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
              variants={fadeInUp}
            >
              <div className="text-3xl mb-6">📺</div>
              <h3 className="text-lg font-semibold mb-3 text-white">YouTube Channels</h3>
              <p className="text-sm leading-relaxed text-zinc-400">Upload large video files using a robust resumable chunked protocol with automatic category and privacy setups.</p>
            </motion.div>

            <motion.div 
              className="backdrop-blur-md bg-zinc-900/60 border border-white/5 p-8 rounded-xl relative transition-all duration-300 hover:border-violet-500/40 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
              variants={fadeInUp}
            >
              <div className="text-3xl mb-6">🎵</div>
              <h3 className="text-lg font-semibold mb-3 text-white">TikTok Publishing</h3>
              <p className="text-sm leading-relaxed text-zinc-400">Publish video content directly to your TikTok profile feed using the official Content Posting API v2.</p>
            </motion.div>

            <motion.div 
              className="backdrop-blur-md bg-zinc-900/60 border border-white/5 p-8 rounded-xl relative transition-all duration-300 hover:border-violet-500/40 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
              variants={fadeInUp}
            >
              <div className="text-3xl mb-6">🤖</div>
              <h3 className="text-lg font-semibold mb-3 text-white">Gemini AI Copywriting</h3>
              <p className="text-sm leading-relaxed text-zinc-400">Leverage Google Gemini 1.5 Flash to automatically draft engaging descriptions, captions, and tags based on your prompts.</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Local Security & Scheduling Architecture */}
        <section 
          id="security" 
          className="mb-16 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05)_0%,rgba(0,0,0,0)_80%)] py-16 px-8 rounded-3xl border border-white/5"
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-2 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Local-First Architecture
          </motion.h2>
          <motion.p 
            className="text-base text-zinc-400 text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Why Social Agent is the most secure social media automation tool available.
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-white/[0.02] border border-white/5 p-10 rounded-xl transition-all duration-300 hover:scale-[1.01]"
              variants={fadeInUp}
            >
              <h4 className="text-lg font-semibold text-white mb-4">🔒 100% Client-Side Credentials</h4>
              <p className="text-sm leading-relaxed text-zinc-400">
                Unlike traditional social media schedulers (which require you to save your sensitive API tokens on their cloud servers), Social Agent runs entirely on your local machine. Your App IDs, secrets, and credentials remain in your local `.env` and `credentials.json` files and are never sent to third-party databases.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white/[0.02] border border-white/5 p-10 rounded-xl transition-all duration-300 hover:scale-[1.01]"
              variants={fadeInUp}
            >
              <h4 className="text-lg font-semibold text-white mb-4">📅 Native OS Task Scheduling</h4>
              <p className="text-sm leading-relaxed text-zinc-400">
                Social Agent connects directly with the **Windows Task Scheduler** to schedule posts. When you set a publish time, the script registers a background task in Windows and exits immediately. Windows triggers the script at the exact time to run the upload, saving system resources and keeping your computer secure.
              </p>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-zinc-950 py-10 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-xs text-zinc-500">&copy; {new Date().getFullYear()} Social Agent. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-zinc-500 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-zinc-500 hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <a href="mailto:support@socialagent.local" className="text-xs text-zinc-500 hover:text-white transition-colors duration-200">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
