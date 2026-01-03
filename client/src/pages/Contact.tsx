import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import Footer from "../components/Footer";
import ResumeModal from "../components/ResumeModal";
import { Mail, Send } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
} as const;

export default function Contact() {
  const [showResume, setShowResume] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // NOTE: Replace 'YOUR_FORMSPREE_ID' with your actual Formspree ID
      // from https://formspree.io/ after you sign up for a free account.
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "inquiry from jackiedanna.com"
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 text-gray-900">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 w-full bg-white/60 backdrop-blur-xl border-b border-white/20 py-4 md:py-6 z-50 shadow-sm">
        <nav className="flex justify-center items-center">
          <div className="flex gap-4 md:gap-8 font-bold tracking-widest text-[10px] md:text-xs items-center text-gray-900">
            <Link href="/">
              <a className="hover:text-primary transition-colors">Home</a>
            </Link>
            <Link href="/gallery">
              <a className="hover:text-primary transition-colors">Gallery</a>
            </Link>
            <Link href="/reel">
              <a className="hover:text-primary transition-colors">Reel</a>
            </Link>
            <button
              onClick={() => setShowResume(true)}
              className="hover:text-primary transition-colors"
            >
              Resume
            </button>
            <Link href="/contact">
              <a className="text-primary font-medium transition-colors">Contact</a>
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-24 px-4 md:px-12">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-6xl mb-4">Contact</h1>
            <p className="text-gray-600 font-light tracking-wide italic">Let's create something together</p>
          </motion.div>

          <motion.div 
            {...fadeIn} 
            transition={{ delay: 0.2 }}
            className="bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl border border-white/20"
          >
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail size={32} />
                </div>
                <h2 className="text-2xl font-serif">Thank you!</h2>
                <p className="text-gray-600">Your email client has been opened to send your inquiry.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-primary underline hover:opacity-70 transition-opacity"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 tracking-wider uppercase">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    data-testid="input-name"
                    className="w-full bg-white/50 border border-gray-200 rounded-md py-3 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-light"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 tracking-wider uppercase">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    data-testid="input-email"
                    className="w-full bg-white/50 border border-gray-200 rounded-md py-3 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-light"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 tracking-wider uppercase">Message</label>
                  <textarea
                    id="message"
                    required
                    data-testid="input-message"
                    rows={6}
                    className="w-full bg-white/50 border border-gray-200 rounded-md py-3 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-light resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  data-testid="button-submit"
                  className="w-full bg-gray-900 text-white py-4 rounded-md font-medium tracking-widest uppercase hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
    </div>
  );
}
