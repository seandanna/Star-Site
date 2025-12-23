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
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div className="w-full max-w-5xl bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100 rounded-lg shadow-2xl p-12 text-gray-900" style={{ maxHeight: "85vh" }}>
          
          {/* Header with Title and Close */}
          <div className="flex items-start justify-between mb-10">
            <h1 className="font-serif text-5xl font-bold">Resume</h1>
            <button
              onClick={onClose}
              className="text-gray-900 hover:opacity-60 transition-opacity p-1 flex-shrink-0"
            >
              <X size={40} strokeWidth={1} />
            </button>
          </div>

          {/* Top Section - Physical Characteristics, IMDb, and Media */}
          <div className="grid grid-cols-3 gap-16 mb-12">
            {/* Left - Physical Characteristics */}
            <div className="space-y-1 text-base leading-relaxed">
              <p>Height: 5'8"</p>
              <p>Eye Color: Brown</p>
              <p>Hair Color: Brown</p>
              <p>Languages: English, Spanish</p>
            </div>

            {/* Middle - IMDb and Download */}
            <div className="flex flex-col items-center justify-start">
              <div className="flex items-center gap-3 mb-6">
                <div className="border-2 border-gray-900 px-3 py-1">
                  <span className="text-gray-900 font-bold text-sm tracking-widest">IMDb</span>
                </div>
              </div>
              <a
                href="#"
                className="text-gray-900 underline hover:opacity-70 transition-opacity text-base flex items-center gap-2"
              >
                📄 Download Resume
              </a>
            </div>

            {/* Right - In the Media */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">In the Media</h2>
              <div className="space-y-2 text-base">
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
          <div className="h-px bg-gray-400/40 my-10" />

          {/* Bottom Section - Credits in 2x2 Grid */}
          <div className="grid grid-cols-2 gap-16">
            {/* Film */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6">Film</h2>
              <div className="space-y-3 text-base leading-relaxed">
                <p>Da Club / Dir: Devin Lehrer / Supporting</p>
                <p>New Friend / Dir: Jackie D'Anna (self) / Supporting</p>
                <p>Miserable Marnie & the Shut In / Dir: Colton David Coate / Supporting</p>
              </div>
            </div>

            {/* Theater */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6">Theater</h2>
              <div className="space-y-3 text-base leading-relaxed">
                <p>Short + Sweet Hollywood "The Last Call Girl" / Dir: Elden Rhoads / Lee Strasburg Theatre / Lead</p>
              </div>
            </div>

            {/* Social Media / Sketch Comedy */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6">Social Media / Sketch Comedy</h2>
              <div className="space-y-3 text-base leading-relaxed">
                <p>VidyPros "Hot Boyz" / Dir: Bo Lotti / Supporting</p>
                <p>VidyPros "Hand Models" / Dir: Bo Lotti / Supporting</p>
                <p>City Women / Dir: Jordan Pacheco / Lead</p>
                <p>Gunz and Hozes / Dir: Jordan Pacheco / Lead</p>
                <p>Harvel Twinz Flyer Distributing / Dir: Jordan Pacheco / Lead</p>
              </div>
            </div>

            {/* Training */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6">Training</h2>
              <div className="space-y-2 text-base leading-relaxed">
                <p>Ivana Chubbuck Studio / Michael Monks</p>
                <p>Kevin Benton's Actor's Playhouse / Kevin Benton</p>
                <p>Ivana Chubbuck Studio / Jackie Diamond</p>
                <p>Ivana Chubbuck Studio / Claire Chubbuck</p>
                <p>Improv - Leela Improv Theatre</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
