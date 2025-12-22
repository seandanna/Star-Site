import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
} as const;

export default function Resume() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex items-center gap-4 bg-background/80 backdrop-blur border-b border-white/10">
        <Link href="/">
          <a className="flex items-center gap-2 hover:text-primary transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm">Back</span>
          </a>
        </Link>
      </nav>

      <div className="pt-24 pb-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div 
            {...fadeIn}
            className="mb-12"
          >
            <h1 className="font-serif text-5xl md:text-6xl mb-2">Resume</h1>
            <div className="w-12 h-[1px] bg-primary" />
          </motion.div>

          {/* Physical Characteristics */}
          <motion.section 
            {...fadeIn}
            className="mb-12"
          >
            <h2 className="font-serif text-2xl mb-6">Physical Characteristics</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">Height</p>
                <p className="text-lg">5'8"</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">Eye Color</p>
                <p className="text-lg">Brown</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">Hair Color</p>
                <p className="text-lg">Brown</p>
              </div>
            </div>
          </motion.section>

          {/* Languages */}
          <motion.section 
            {...fadeIn}
            className="mb-12"
          >
            <h2 className="font-serif text-2xl mb-6">Languages</h2>
            <div className="space-y-2">
              <p>English</p>
              <p>Spanish</p>
            </div>
          </motion.section>

          {/* In the Media */}
          <motion.section 
            {...fadeIn}
            className="mb-12"
          >
            <h2 className="font-serif text-2xl mb-6">In the Media</h2>
            <div className="space-y-4">
              <a 
                href="https://voyagela.com/interview/meet-jacquelene-harvel-jazmine-harvel-harvel-productions-hollywood/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
              >
                <span>VOYAGE LA</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://www.broadwayworld.com/los-angeles/article/SHORTSWEET-Hollywood-Adds-Last-Round-Of-Semifinalists-20221018"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
              >
                <span>BROADWAY WORLD</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.section>

          {/* Film */}
          <motion.section 
            {...fadeIn}
            className="mb-12"
          >
            <h2 className="font-serif text-2xl mb-6">Film</h2>
            <div className="space-y-4">
              <div className="border-b border-white/10 pb-3">
                <p className="font-medium">Da Club</p>
                <p className="text-sm text-muted-foreground">Dir: Devin Lehrer / Supporting</p>
              </div>
              <div className="border-b border-white/10 pb-3">
                <p className="font-medium">New Friend</p>
                <p className="text-sm text-muted-foreground">Dir: Jackie D'Anna (self) / Supporting</p>
              </div>
              <div className="pb-3">
                <p className="font-medium">Miserable Marnie & the Shut In</p>
                <p className="text-sm text-muted-foreground">Dir: Colton David Coate / Supporting</p>
              </div>
            </div>
          </motion.section>

          {/* Social Media / Sketch Comedy */}
          <motion.section 
            {...fadeIn}
            className="mb-12"
          >
            <h2 className="font-serif text-2xl mb-6">Social Media / Sketch Comedy</h2>
            <div className="space-y-4">
              <div className="border-b border-white/10 pb-3">
                <p className="font-medium">VidyPros "Hot Boyz"</p>
                <p className="text-sm text-muted-foreground">Dir: Bo Lotti / Supporting</p>
              </div>
              <div className="border-b border-white/10 pb-3">
                <p className="font-medium">VidyPros "Hand Models"</p>
                <p className="text-sm text-muted-foreground">Dir: Bo Lotti / Supporting</p>
              </div>
              <div className="border-b border-white/10 pb-3">
                <p className="font-medium">City Women</p>
                <p className="text-sm text-muted-foreground">Dir: Jordan Pacheco / Lead</p>
              </div>
              <div className="border-b border-white/10 pb-3">
                <p className="font-medium">Gunz and Hozes</p>
                <p className="text-sm text-muted-foreground">Dir: Jordan Pacheco / Lead</p>
              </div>
              <div className="pb-3">
                <p className="font-medium">Harvel Twinz Flyer Distributing</p>
                <p className="text-sm text-muted-foreground">Dir: Jordan Pacheco / Lead</p>
              </div>
            </div>
          </motion.section>

          {/* Theater */}
          <motion.section 
            {...fadeIn}
            className="mb-12"
          >
            <h2 className="font-serif text-2xl mb-6">Theater</h2>
            <div className="space-y-4">
              <div className="pb-3">
                <p className="font-medium">Short + Sweet Hollywood "The Last Call Girl"</p>
                <p className="text-sm text-muted-foreground">Dir: Elden Rhoads / Lee Strasburg Theatre / Lead</p>
              </div>
            </div>
          </motion.section>

          {/* Training */}
          <motion.section 
            {...fadeIn}
            className="mb-12"
          >
            <h2 className="font-serif text-2xl mb-6">Training</h2>
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground">
                <p className="mb-1"><span className="text-foreground font-medium">Ivana Chubbuck Studio</span> / Michael Monks</p>
              </div>
              <div className="text-sm text-muted-foreground">
                <p className="mb-1"><span className="text-foreground font-medium">Kevin Benton's Actor's Playhouse</span> / Kevin Benton</p>
              </div>
              <div className="text-sm text-muted-foreground">
                <p className="mb-1"><span className="text-foreground font-medium">Ivana Chubbuck Studio</span> / Jackie Diamond</p>
              </div>
              <div className="text-sm text-muted-foreground">
                <p className="mb-1"><span className="text-foreground font-medium">Ivana Chubbuck Studio</span> / Claire Chubbuck</p>
              </div>
              <div className="text-sm text-muted-foreground">
                <p><span className="text-foreground font-medium">Improv - Leela Improv Theatre</span></p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
