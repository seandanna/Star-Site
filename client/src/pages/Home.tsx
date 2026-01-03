import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Instagram, Mail } from "lucide-react";
import { Link } from "wouter";
import ResumeModal from "../components/ResumeModal";
import Footer from "../components/Footer";

// Import assets
import heroImage from "@assets/SNAPS_X_JACKIE-477_1766444720628.jpg";
import aboutImage from "@assets/image_1767048832137.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};


export default function Home() {
  const [showResume, setShowResume] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 text-foreground overflow-x-hidden">
      {/* Navigation Header - Fixed */}
      <header className="fixed top-0 left-0 right-0 w-full bg-white/60 backdrop-blur-xl border-b border-white/20 py-4 md:py-6 z-50 transition-all duration-300 shadow-sm">
        <nav className="flex justify-center items-center">
          <div className="flex gap-4 md:gap-8 font-bold tracking-widest text-[10px] md:text-xs items-center text-gray-900">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
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
              <a className="hover:text-primary transition-colors">Contact</a>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-16 pb-12 overflow-hidden">
        {/* Decorative elements to mimic the style */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-amber-50/30 -z-10" />
        
        <div className="relative z-20 w-full max-w-5xl px-4 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center mb-6"
          >
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-[0.2em] text-gray-900 leading-none uppercase font-bold drop-shadow-sm whitespace-nowrap">
              JACKIE D'ANNA
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full max-w-[800px]"
          >
            {/* The Image with subtle fade-out effect on all sides */}
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Jackie D'Anna" 
                className="w-full h-auto object-cover rounded-sm"
                style={{ 
                  maskImage: 'radial-gradient(circle at center, black 75%, transparent 100%), linear-gradient(to bottom, black 99%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 75%, transparent 100%), linear-gradient(to bottom, black 99%, transparent 100%)',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'source-in'
                }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown size={20} strokeWidth={1.5} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-24 px-4 md:px-12 bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div 
            {...fadeIn}
            className="space-y-6"
          >
            <span className="text-primary tracking-widest text-xs md:text-sm uppercase font-semibold">About Me</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif leading-tight text-gray-900">
              Actor, Writer, and Producer
            </h2>
            <div className="space-y-4 text-gray-800 leading-relaxed font-light">
              <p>
                Jackie D'Anna is an actor, writer, and producer with a diverse background in performance. She starred in <em>The Last Call Girl</em> at the Lee Strasberg Theater for the Short+Sweet Festival Hollywood 2022, reaching the semi-finalist round. Alongside her twin sister, she co-created sketch comedy and films under "Harvel Twinz", exploring mixed-race identity and the actor's life.
              </p>
              <p>
                With a screenwriting background from California State University, Northridge, Jackie wrote and starred in social media content for Vidy Pros. She has trained in the Chubbuck Technique and developed her improv skills at Leela Improv Theatre.
              </p>
              <p>
                Outside of her career, Jackie's favorite role is being a wife and mom. She's a fitness enthusiast who loves staying active and singing for Jesus! Jackie is all about spreading joy and bringing smiles to everyone she meets.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 border border-primary/30 translate-x-4 translate-y-4 -z-10" />
            <img 
              src={aboutImage} 
              alt="Jackie D'Anna" 
              className="w-full aspect-[4/5] object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
    </div>
  );
}
