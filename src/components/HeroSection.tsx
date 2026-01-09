import { motion } from 'framer-motion';
import { ChevronDown, Play, BarChart3 } from 'lucide-react';
import heroImage from '@/assets/hero-ronaldo.jpg';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cristiano Ronaldo celebration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Animated particles/glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Pre-title */}
          <motion.p
            className="font-display text-sm md:text-base uppercase tracking-[0.3em] text-primary mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            The Legend • The Icon • The Greatest
          </motion.p>

          {/* Main Title */}
          <h1 className="section-title text-5xl md:text-7xl lg:text-9xl mb-6 text-shadow-hero">
            <span className="block">THE GOAT</span>
            <span className="block text-gradient-gold animate-glow">CRISTIANO RONALDO</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl font-light text-foreground/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            From Madeira to Immortality
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <button
              onClick={() => scrollToSection('#origins')}
              className="btn-gold px-8 py-4 rounded-lg flex items-center gap-3 text-lg"
            >
              <Play size={20} />
              Explore His Journey
            </button>
            <button
              onClick={() => scrollToSection('#stats')}
              className="btn-outline-gold px-8 py-4 rounded-lg flex items-center gap-3 text-lg"
            >
              <BarChart3 size={20} />
              View Career Stats
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            onClick={() => scrollToSection('#origins')}
            className="flex flex-col items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
