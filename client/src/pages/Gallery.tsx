import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Instagram, Mail } from "lucide-react";
import ResumeModal from "../components/ResumeModal";
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
  { src: img1, alt: "Candid portrait" },
  { src: img2, alt: "Thoughtful moment" },
  { src: img3, alt: "Joyful expression" },
  { src: img4, alt: "Serene profile" },
  { src: img5, alt: "Classic portrait" },
  { src: img6, alt: "Editorial close-up" },
  { src: img7, alt: "Expressive look" },
  { src: img8, alt: "Professional pose" },
  { src: img9, alt: "Direct gaze" },
  { src: img10, alt: "Casual beauty" },
  { src: img11, alt: "Radiant smile" },
  { src: img12, alt: "Powerful stance" },
  { src: img13, alt: "Unbridled laughter" },
  { src: img14, alt: "Warm connection" },
  { src: img15, alt: "Playful energy" },
];

export default function Gallery() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 text-foreground overflow-x-hidden min-h-screen">
      {/* Navigation Header - Fixed */}
      <header className="fixed top-0 left-0 right-0 w-full bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 py-4 md:py-6 z-50">
        <nav className="flex justify-center items-center">
          <div className="flex gap-4 md:gap-8 font-light tracking-wide text-xs md:text-sm items-center text-gray-900">
            <Link href="/">
              <a className="hover:text-primary transition-colors">Home</a>
            </Link>
            <Link href="/#about">
              <a className="hover:text-primary transition-colors">About</a>
            </Link>
            <Link href="/gallery">
              <a className="hover:text-primary transition-colors">Gallery</a>
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
      <section className="py-20 md:py-32 px-4 md:px-6 mt-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeIn}
            className="text-center mb-16 md:mb-20"
          >
            <h1 className="font-serif text-4xl md:text-6xl mb-6 text-gray-900" data-testid="text-gallery-title">Gallery</h1>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6"
          >
            {galleryImages.map((image, index) => (
              <motion.div 
                key={index}
                variants={fadeIn} 
                className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500`}
                data-testid={`card-gallery-item-${index}`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105" 
                  data-testid={`img-gallery-${index}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Icons */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 text-center">
        <div className="flex justify-center gap-6 md:gap-8">
          <a href="#" className="p-3 rounded-full hover:opacity-70 transition-opacity text-gray-900">
            <Mail size={24} />
          </a>
          <a href="#" className="p-3 rounded-full hover:opacity-70 transition-opacity text-gray-900">
            <Instagram size={24} />
          </a>
        </div>
        <div className="pt-8 text-xs text-gray-600 tracking-widest uppercase">
          &copy; 2025 Jackie D'Anna. All Rights Reserved.
        </div>
      </section>

      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
    </div>
  );
}
