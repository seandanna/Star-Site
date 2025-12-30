import { X } from "lucide-react";
import { motion } from "framer-motion";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-40"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
      >
        <div className="w-full max-w-xs sm:max-w-lg md:max-w-4xl lg:max-w-5xl bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100 rounded-lg shadow-2xl overflow-y-auto max-h-[95vh] text-gray-900" style={{ scrollBehavior: "smooth" }}>
          <div className="p-4 sm:p-6 md:p-8 lg:p-10">
            
            {/* Header with Title and Close */}
            <div className="flex items-start justify-between mb-6 md:mb-8 lg:mb-10">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">Resume</h1>
              <button
                onClick={onClose}
                className="text-gray-900 hover:opacity-60 transition-opacity p-1 flex-shrink-0 ml-4"
              >
                <X size={28} strokeWidth={1} className="sm:w-8 sm:h-8 md:w-10 md:h-10" />
              </button>
            </div>

            {/* Top Section - Physical Characteristics, IMDb, and Media */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-16 mb-8 md:mb-10 lg:mb-12">
              {/* Left - Physical Characteristics */}
              <div className="space-y-1 text-xs sm:text-sm md:text-base leading-relaxed">
                <p>Height: 5'8"</p>
                <p>Eye Color: Brown</p>
                <p>Hair Color: Brown</p>
                <p>Languages: English, Spanish</p>
              </div>

              {/* Middle - IMDb and Download */}
              <div className="flex flex-col items-start justify-start">
                <div className="mb-4 md:mb-6">
                  <a 
                    href="https://www.imdb.com/name/nm6025384/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border-2 border-gray-900 px-2 sm:px-3 py-1 inline-block hover:bg-gray-900 hover:text-white transition-all cursor-pointer"
                  >
                    <span className="font-bold text-xs sm:text-sm tracking-widest uppercase">IMDb</span>
                  </a>
                </div>
                <a
                  href="#"
                  className="text-gray-900 underline hover:opacity-70 transition-opacity text-xs sm:text-sm md:text-base flex items-center gap-1 sm:gap-2"
                >
                  📄 Download Resume
                </a>
              </div>

              {/* Right - In the Media */}
              <div>
                <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4">In the Media</h2>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base">
                  <a
                    href="https://voyagela.com/interview/meet-jacquelene-harvel-jazmine-harvel-harvel-productions-hollywood/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 underline hover:opacity-70 transition-opacity block"
                  >
                    VOYAGE LA
                  </a>
                  <a
                    href="https://www.broadwayworld.com/los-angeles/article/SHORTSWEET-Hollywood-Adds-Last-Round-Of-Semifinalists-20221018"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 underline hover:opacity-70 transition-opacity block"
                  >
                    BROADWAY WORLD
                  </a>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-400/40 my-6 md:my-8 lg:my-10" />

            {/* Bottom Section - Credits in Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-16">
              {/* Film */}
              <div>
                <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 lg:mb-6">Film</h2>
                <div className="space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base leading-relaxed">
                  <p>Da Club / Dir: Devin Lehrer / Supporting</p>
                  <p>New Friend / Dir: Jackie D'Anna (self) / Supporting</p>
                  <p>Miserable Marnie & the Shut In / Dir: Colton David Coate / Supporting</p>
                </div>
              </div>

              {/* Theater */}
              <div>
                <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 lg:mb-6">Theater</h2>
                <div className="space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base leading-relaxed">
                  <p>Short + Sweet Hollywood "The Last Call Girl" / Dir: Elden Rhoads / Lee Strasburg Theatre / Lead</p>
                </div>
              </div>

              {/* Social Media / Sketch Comedy */}
              <div>
                <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 lg:mb-6">Social Media / Sketch Comedy</h2>
                <div className="space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base leading-relaxed">
                  <p>VidyPros "Hot Boyz" / Dir: Bo Lotti / Supporting</p>
                  <p>VidyPros "Hand Models" / Dir: Bo Lotti / Supporting</p>
                  <p>City Women / Dir: Jordan Pacheco / Lead</p>
                  <p>Gunz and Hozes / Dir: Jordan Pacheco / Lead</p>
                  <p>Harvel Twinz Flyer Distributing / Dir: Jordan Pacheco / Lead</p>
                </div>
              </div>

              {/* Training */}
              <div>
                <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 lg:mb-6">Training</h2>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base leading-relaxed">
                  <p>Ivana Chubbuck Studio / Michael Monks</p>
                  <p>Kevin Benton's Actor's Playhouse / Kevin Benton</p>
                  <p>Ivana Chubbuck Studio / Jackie Diamond</p>
                  <p>Ivana Chubbuck Studio / Claire Chubbuck</p>
                  <p>Improv - Leela Improv Theatre</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
