import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

// Import assets
import heroImage from "@assets/SNAPS_X_JACKIE-477_1766444720628.jpg";
import setImage from "@assets/generated_images/behind_the_scenes_film_set_moment.png";
import carpetImage from "@assets/generated_images/red_carpet_elegant_fashion_shot.png";

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

export default function Gallery() {
  return (
    <div className="bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 text-foreground overflow-x-hidden min-h-screen">
      {/* Navigation Header - Fixed */}
      <header className="fixed top-0 left-0 right-0 w-full bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 py-4 md:py-6 z-50">
        <nav className="flex justify-center items-center">
          <div className="flex gap-4 md:gap-8 font-light tracking-wide text-xs md:text-sm items-center text-gray-900">
            <Link href="/">
              <a className="flex items-center gap-2 hover:text-primary transition-colors">
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
            <h1 className="font-serif text-4xl md:text-6xl mb-6 text-gray-900">Gallery</h1>
            <p className="text-gray-800 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore selected moments from my career in film, theater, and beyond.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          >
            <motion.div variants={fadeIn} className="group relative overflow-hidden aspect-[3/4]">
              <img src={setImage} alt="On Set" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-serif text-xl text-white italic">Behind the Scenes</span>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="group relative overflow-hidden aspect-[3/4] sm:col-span-2 md:col-span-1">
              <img src={heroImage} alt="Portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-serif text-xl text-white italic">Editorial</span>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="group relative overflow-hidden aspect-[3/4]">
              <img src={carpetImage} alt="Red Carpet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-serif text-xl text-white italic">Appearances</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
