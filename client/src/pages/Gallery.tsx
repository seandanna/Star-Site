import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Instagram, Mail } from "lucide-react";
import ResumeModal from "../components/ResumeModal";
import Footer from "../components/Footer";
import { useState } from "react";

// Import assets
import img1 from "@assets/DANNA2024-14_1767049349985.jpg";
import img2 from "@assets/DANNA2024-76_1767049349986.jpg";
import img3 from "@assets/DANNA2024-11(1)_1767049349986.jpg";
import img4 from "@assets/DANNA2024-77_1767049349987.jpg";
import img5 from "@assets/DANNA2024-29_1767049349987.jpg";
import img6 from "@assets/SNAPS_X_JACKIE-631_1767049349987.jpg";
import img7 from "@assets/SNAPS_X_JACKIE-803_1767049349988.jpg";
import img8 from "@assets/SNAPS_X_JACKIE-758_1767049349988.jpg";
import img9 from "@assets/SNAPS_X_JACKIE-743_1767049349988.jpg";
import img10 from "@assets/SNAPS_X_JACKIE-589_1767049349989.jpg";
import img11 from "@assets/SNAPS_X_JACKIE-399_1767049349989.jpg";
import img12 from "@assets/SNAPS_X_JACKIE-242_1767049349990.jpg";
import img13 from "@assets/SNAPS_X_JACKIE-220_1767049349990.jpg";
import img14 from "@assets/SNAPS_X_JACKIE-137_1767049349991.jpg";
import img15 from "@assets/SNAPS_X_JACKIE-14_1767049349991.jpg";

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
      staggerChildren: 0.1
    }
  }
};

const galleryImages = [
  { src: img10, alt: "Casual beauty" },
  { src: img7, alt: "Expressive look" },
  { src: img11, alt: "Radiant smile" },
  { src: img14, alt: "Warm connection" },
  { src: img8, alt: "Black shirt professional" },
  { src: img12, alt: "Red shirt powerful" },
  { src: img15, alt: "Playful energy" },
  { src: img9, alt: "Direct gaze" },
  { src: img13, alt: "Unbridled laughter" },
  { src: img5, alt: "Classic portrait" },
  { src: img6, alt: "White shirt editorial" },
  { src: img3, alt: "Joyful expression with trees" },
];

export default function Gallery() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 text-foreground overflow-x-hidden min-h-screen">
      {/* Navigation Header - Fixed */}
      <header className="fixed top-0 left-0 right-0 w-full bg-white/10 backdrop-blur-md border-b border-white/10 py-4 md:py-6 z-50 transition-all duration-300">
        <nav className="flex justify-center items-center">
          <div className="flex gap-4 md:gap-8 font-light tracking-wide text-xs md:text-sm items-center text-gray-900">
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
          </div>
        </nav>
      </header>

      {/* Gallery Section */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {galleryImages.map((image, index) => (
              <motion.div 
                key={index}
                variants={fadeIn} 
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 aspect-[3/4]"
                data-testid={`card-gallery-item-${index}`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  data-testid={`img-gallery-${index}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
    </div>
  );
}
