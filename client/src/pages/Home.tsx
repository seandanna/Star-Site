import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Instagram, Twitter, Mail, Film, Theater, Clapperboard, Award } from "lucide-react";
import { Link } from "wouter";

// Import assets
import heroImage from "@assets/SNAPS_X_JACKIE-477_1766444720628.jpg";
import stageImage from "@assets/generated_images/actress_performing_emotional_stage_scene.png";
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


export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-center items-center mix-blend-difference text-white">
        <div className="flex gap-8 font-light tracking-wide text-sm items-center">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <a href="#" className="font-serif text-2xl tracking-widest uppercase px-4">J.D.</a>
          <Link href="/resume">
            <a className="hover:text-primary transition-colors">Resume</a>
          </Link>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-red-950 via-red-900 to-red-950 py-24">
        <div className="relative z-20 flex flex-col items-center justify-center max-w-5xl w-full px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <img 
              src={heroImage} 
              alt="Jackie D'Anna" 
              style={{ width: "735px", height: "897px" }}
              className="object-cover rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-5xl md:text-7xl tracking-tighter text-white mb-4 text-center"
          >
            JACKIE D'ANNA
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="font-sans text-sm md:text-lg tracking-[0.3em] uppercase text-white/90 text-center"
          >
            Actress & Performer
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 animate-bounce"
        >
          <ArrowDown size={24} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-background relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            {...fadeIn}
            className="space-y-6"
          >
            <span className="text-primary tracking-widest text-sm uppercase font-semibold">About Me</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Actor, Writer, and Producer
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed font-light">
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
              src={stageImage} 
              alt="On Stage" 
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="gallery" className="py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Selected Moments</h2>
            <div className="w-24 h-[1px] bg-primary mx-auto" />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <motion.div variants={fadeIn} className="group relative overflow-hidden aspect-[3/4]">
              <img src={setImage} alt="On Set" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-serif text-xl text-white italic">Behind the Scenes</span>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="group relative overflow-hidden aspect-[3/4] md:-mt-12">
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


      {/* Contact */}
      <section id="contact" className="py-32 bg-secondary text-center px-6">
        <motion.div 
          {...fadeIn}
          className="max-w-2xl mx-auto space-y-8"
        >
          <h2 className="font-serif text-4xl md:text-5xl">Let's Create Together</h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            For casting inquiries, collaborations, or press requests, please contact my representation or reach out directly below.
          </p>
          
          <div className="flex justify-center gap-8 pt-8">
            <a href="#" className="p-4 rounded-full border border-white/10 hover:border-primary hover:text-primary transition-all hover:scale-110">
              <Mail size={24} />
            </a>
            <a href="#" className="p-4 rounded-full border border-white/10 hover:border-primary hover:text-primary transition-all hover:scale-110">
              <Instagram size={24} />
            </a>
            <a href="#" className="p-4 rounded-full border border-white/10 hover:border-primary hover:text-primary transition-all hover:scale-110">
              <Twitter size={24} />
            </a>
          </div>

          <div className="pt-16 text-xs text-muted-foreground tracking-widest uppercase">
            &copy; 2025 Elena Vore. All Rights Reserved.
          </div>
        </motion.div>
      </section>
    </div>
  );
}
