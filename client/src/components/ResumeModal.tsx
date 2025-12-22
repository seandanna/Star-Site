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
        <div className="w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100 rounded-lg overflow-y-auto shadow-2xl">
          {/* Header */}
          <div className="sticky top-0 flex items-center justify-between p-8 bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100 border-b border-white/20">
            <h1 className="font-serif text-4xl text-gray-900">Resume</h1>
            <button
              onClick={onClose}
              className="text-gray-900 hover:opacity-70 transition-opacity p-2"
            >
              <X size={32} strokeWidth={1.5} />
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                {/* Physical Characteristics */}
                <div className="mb-12">
                  <div className="space-y-2 text-gray-900">
                    <p className="text-lg">Height: 5'8"</p>
                    <p className="text-lg">Eye Color: Brown</p>
                    <p className="text-lg">Hair Color: Brown</p>
                    <p className="text-lg">Languages: English, Spanish</p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="mb-8">
                {/* IMDb and Download */}
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-6 bg-white/40 p-4 rounded inline-block">
                    <div className="border-2 border-gray-900 px-3 py-1">
                      <span className="text-gray-900 font-bold text-sm">IMDb</span>
                    </div>
                    <a
                      href="#"
                      className="text-gray-900 underline hover:opacity-70 transition-opacity flex items-center gap-2"
                    >
                      📄 Download Resume
                    </a>
                  </div>
                </div>

                {/* In the Media */}
                <div className="mb-8">
                  <h2 className="font-serif text-2xl text-gray-900 mb-4">In the Media</h2>
                  <div className="space-y-2">
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
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-300/40 my-8" />

            {/* Two Column Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Film */}
              <div>
                <h2 className="font-serif text-2xl text-gray-900 mb-6">Film</h2>
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="font-medium">Da Club / Dir: Devin Lehrer / Supporting</p>
                  </div>
                  <div>
                    <p className="font-medium">New Friend / Dir: Jackie D'Anna (self) / Supporting</p>
                  </div>
                  <div>
                    <p className="font-medium">Miserable Marnie & the Shut In / Dir: Colton David Coate / Supporting</p>
                  </div>
                </div>
              </div>

              {/* Theater */}
              <div>
                <h2 className="font-serif text-2xl text-gray-900 mb-6">Theater</h2>
                <div className="space-y-4 text-gray-800">
                  <div>
                    <p className="font-medium">Short + Sweet Hollywood "The Last Call Girl" / Dir: Elden Rhoads / Lee</p>
                  </div>
                  <div>
                    <p className="font-medium">Girl" / Dir: Elden Rhoads / Lee</p>
                  </div>
                  <div>
                    <p className="font-medium">Strasburg Theatre/ Lead</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media / Sketch Comedy */}
            <div className="mt-12">
              <h2 className="font-serif text-2xl text-gray-900 mb-6">Social Media / Sketch Comedy</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4 text-gray-800">
                  <p className="font-medium">VidyPros "Hot Boyz" / Dir: Bo Lotti / Supporting</p>
                  <p className="font-medium">VidyPros "Hand Models" / Dir: Bo Lotti / Supporting</p>
                  <p className="font-medium">City Women / Dir: Jordan Pacheco / Lead</p>
                  <p className="font-medium">Gunz and Hozes / Dir: Jordan Pacheco / Lead</p>
                  <p className="font-medium">Harvel Twinz Flyer Distributing / Dir: Jordan Pacheco / Lead</p>
                </div>
              </div>
            </div>

            {/* Training */}
            <div className="mt-12">
              <h2 className="font-serif text-2xl text-gray-900 mb-6">Training</h2>
              <div className="space-y-3 text-gray-800">
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
