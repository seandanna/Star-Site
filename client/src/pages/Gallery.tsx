import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

// Import assets
import img1 from "@assets/DANNA2024-76_1767048309680.jpg";
import img2 from "@assets/DANNA2024-77_1767048309681.jpg";
import img3 from "@assets/DANNA2024-11(1)_1767048309681.jpg";
import img4 from "@assets/DANNA2024-14_1767048309680.jpg";
import img5 from "@assets/DANNA2024-29_1767048309682.jpg";
import img6 from "@assets/SNAPS_X_JACKIE-878_1767048309683.jpg";
import img7 from "@assets/SNAPS_X_JACKIE-803_1767048309683.jpg";
import img8 from "@assets/SNAPS_X_JACKIE-758_1767048309683.jpg";
import img9 from "@assets/SNAPS_X_JACKIE-743_1767048309684.jpg";
import img10 from "@assets/SNAPS_X_JACKIE-589_1767048309684.jpg";
import img11 from "@assets/SNAPS_X_JACKIE-399_1767048309685.jpg";
import img12 from "@assets/SNAPS_X_JACKIE-242_1767048309685.jpg";
import img13 from "@assets/SNAPS_X_JACKIE-220_1767048309685.jpg";
import img14 from "@assets/SNAPS_X_JACKIE-137_1767048309686.jpg";
import img15 from "@assets/SNAPS_X_JACKIE-14_1767048309686.jpg";
import img16 from "@assets/SNAPS_X_JACKIE-631_1767048980243.jpg";

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
  { src: img1, alt: "Contemplative Moment", aspect: "aspect-[3/4]" },
  { src: img2, alt: "Thoughtful Look", aspect: "aspect-[3/4]" },
  { src: img3, alt: "Joyful Smile", aspect: "aspect-[3/4]" },
  { src: img4, alt: "Gentle Gaze", aspect: "aspect-[3/4]" },
  { src: img5, alt: "Serene Portrait", aspect: "aspect-[3/4]" },
  { src: img6, alt: "Playful Pose", aspect: "aspect-[3/4]" },
  { src: img16, alt: "Editorial Close-up", aspect: "aspect-[3/4]" },
  { src: img8, alt: "Professional Power", aspect: "aspect-[3/4]" },
  { src: img9, alt: "Direct Connection", aspect: "aspect-[3/4]" },
  { src: img10, alt: "Carefree Spirit", aspect: "aspect-[3/4]" },
  { src: img11, alt: "Radiant Energy", aspect: "aspect-[3/4]" },
  { src: img12, alt: "Poised Strength", aspect: "aspect-[3/4]" },
  { src: img13, alt: "Pure Laughter", aspect: "aspect-[3/4]" },
  { src: img14, alt: "Warm Approach", aspect: "aspect-[3/4]" },
  { src: img15, alt: "Candid Joy", aspect: "aspect-[3/4]" },
];

export default function Gallery() {
  return (
    <div className="bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 text-foreground overflow-x-hidden min-h-screen">
      {/* Navigation Header - Fixed */}
      <header className="fixed top-0 left-0 right-0 w-full bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 py-4 md:py-6 z-50">
        <nav className="flex justify-center items-center">
          <div className="flex gap-4 md:gap-8 font-light tracking-wide text-xs md:text-sm items-center text-gray-900">
            <Link href="/">
              <a className="flex items-center gap-2 hover:text-primary transition-colors" data-testid="link-back">
                <ArrowLeft size={18} />
                <span>Back</span>
              </a>
            </Link>
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
            <p className="text-gray-800 text-base md:text-lg max-w-2xl mx-auto leading-relaxed" data-testid="text-gallery-description">
              A journey through emotion, character, and range.
            </p>
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
    </div>
  );
}
