import { motion } from "framer-motion";
import { Link } from "wouter";
import { Instagram, Mail } from "lucide-react";
import ResumeModal from "../components/ResumeModal";
import Footer from "../components/Footer";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
} as const;

const reels = [
  {
    title: "Comedic Reel",
    url: "https://www.youtube.com/embed/F5wiIok27Oo"
  },
  {
    title: "Dramatic Reel",
    url: "https://www.youtube.com/embed/iygC0deViBk"
  },
  {
    title: "Commercial Reel",
    url: "https://www.youtube.com/embed/Ay3TZy2wU0k"
  },
  {
    title: "The Last Call Girl (Clip)",
    url: "https://www.youtube.com/embed/jpG109J4V04"
  }
];

export default function Reel() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 text-foreground overflow-x-hidden min-h-screen">
      {/* Navigation Header - Fixed */}
      <header className="fixed top-0 left-0 right-0 w-full bg-white/10 backdrop-blur-md border-b border-white/10 py-4 md:py-6 z-50 transition-all duration-300">
        <nav className="flex justify-center items-center">
          <div className="flex gap-4 md:gap-8 font-bold tracking-widest text-[10px] md:text-xs items-center text-gray-900">
            <Link href="/">
              <a className="hover:text-primary transition-colors">Home</a>
            </Link>
            <Link href="/gallery">
              <a className="hover:text-primary transition-colors">Gallery</a>
            </Link>
            <Link href="/reel">
              <a className="text-primary font-medium transition-colors">Reel</a>
            </Link>
            <button
              onClick={() => setShowResume(true)}
              className="hover:text-primary transition-colors"
            >
              Resume
            </button>
            <Link href="/contact">
              <a className="hover:text-primary transition-colors">Contact</a>
            </Link>
          </div>
        </nav>
      </header>

      {/* Reel Section */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12 md:space-y-16">
            {reels.map((reel, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                className="space-y-6"
                data-testid={`section-reel-${index}`}
              >
                <div className="mb-4">
                  <h2 className="font-serif text-2xl md:text-3xl text-gray-900">{reel.title}</h2>
                </div>
                <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl bg-black">
                  <iframe
                    src={reel.url}
                    title={reel.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    data-testid={`iframe-reel-${index}`}
                  ></iframe>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
    </div>
  );
}