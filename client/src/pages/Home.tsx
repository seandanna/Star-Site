import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Instagram, Twitter, Mail, Film, Theater, Clapperboard, Award } from "lucide-react";
import { Link } from "wouter";

// Import assets
import heroImage from "@assets/generated_images/cinematic_actress_portrait_hero_shot.png";
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

const works = [
  { year: "2024", title: "The Silent Echo", role: "Lead", type: "Feature Film" },
  { year: "2023", title: "Midnight in Paris", role: "Supporting", type: "Theater" },
  { year: "2023", title: "Glass Houses", role: "Lead", type: "TV Series" },
  { year: "2022", title: "Waiting for Godot", role: "Estragon", type: "Theater" },
  { year: "2021", title: "Last Summer", role: "Lead", type: "Short Film" },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center mix-blend-difference text-white">
        <a href="#" className="font-serif text-2xl tracking-widest uppercase">E.V.</a>
        <div className="hidden md:flex gap-8 font-light tracking-wide text-sm">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <a href="#filmography" className="hover:text-primary transition-colors">Filmography</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={heroImage} 
            alt="Elena Vore Hero" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-6xl md:text-9xl tracking-tighter text-white mb-4"
          >
            ELENA VORE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-sans text-sm md:text-lg tracking-[0.3em] uppercase text-white/80"
          >
            Actress & Performer
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
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
            <span className="text-primary tracking-widest text-sm uppercase font-semibold">The Artist</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Bringing complex characters to life through emotional depth and rigorous discipline.
            </h2>
            <p className="text-muted-foreground leading-relaxed font-light">
              With a background in classical theater and a passion for contemporary cinema, Elena brings a unique blend of technical precision and raw emotional honesty to every role. Based in London and Los Angeles, she has worked with acclaimed directors and ensembles across both stage and screen.
            </p>
            <div className="flex gap-4 pt-4">
              <Award className="text-primary w-8 h-8" />
              <div>
                <h4 className="font-serif text-lg">Best Actress</h4>
                <p className="text-sm text-muted-foreground">Indie Film Festival 2023</p>
              </div>
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

      {/* Filmography */}
      <section id="filmography" className="py-24 px-6 max-w-4xl mx-auto">
        <motion.h2 
          {...fadeIn}
          className="font-serif text-4xl md:text-5xl mb-12 text-center"
        >
          Selected Works
        </motion.h2>

        <div className="space-y-8">
          {works.map((work, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-between border-b border-white/10 pb-6 group hover:border-primary/50 transition-colors"
            >
              <div className="space-y-1">
                <h3 className="font-serif text-2xl group-hover:text-primary transition-colors">{work.title}</h3>
                <p className="text-sm text-muted-foreground">{work.role}</p>
              </div>
              <div className="text-right">
                <span className="block font-mono text-sm text-muted-foreground">{work.year}</span>
                <span className="block text-xs uppercase tracking-wider mt-1 opacity-50">{work.type}</span>
              </div>
            </motion.div>
          ))}
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
