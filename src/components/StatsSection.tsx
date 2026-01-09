import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Target, Trophy, Flame, Crown, Zap, Award, Globe, Star, LucideIcon } from 'lucide-react';

interface StatItem {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  { icon: Target, value: 925, label: 'Career Goals', description: 'Total goals scored across all competitions' },
  { icon: Trophy, value: 35, label: 'Major Trophies', description: 'Club and international titles won' },
  { icon: Flame, value: 1250, suffix: '+', label: 'Matches Played', description: 'Professional appearances' },
  { icon: Crown, value: 5, label: 'Ballon d\'Or', description: 'FIFA World Player of the Year awards' },
  { icon: Zap, value: 145, label: 'Hat-tricks', description: 'Three or more goals in a single match' },
  { icon: Award, value: 4, label: 'Golden Boots', description: 'European top scorer awards' },
  { icon: Globe, value: 135, label: 'International Goals', description: 'All-time top scorer for national team' },
  { icon: Star, value: 140, label: 'UCL Goals', description: 'Champions League all-time top scorer' },
];

const AnimatedCounter = ({ value, suffix = '', isInView }: { value: number; suffix?: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span className="stat-number">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stats" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(43 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(43 100% 50%) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-display text-sm uppercase tracking-[0.3em] text-primary">
            Numbers of a Superhuman
          </span>
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl mt-4">
            ALL-TIME <span className="text-gradient-gold">STATS</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Records shattered, history written. The numbers that define an era of excellence.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium p-6 md:p-8 rounded-2xl group hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
                <motion.div
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              
              <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
              
              <h3 className="font-display text-lg font-semibold mt-2 text-foreground group-hover:text-primary transition-colors">
                {stat.label}
              </h3>
              
              <p className="text-sm text-muted-foreground mt-1">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Featured Record */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block card-premium p-8 md:p-12 rounded-2xl glow-gold">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-4">
              Guinness World Record
            </p>
            <div className="text-6xl md:text-8xl font-display font-bold text-gradient-gold animate-glow">
              925+
            </div>
            <p className="text-xl md:text-2xl text-foreground mt-4">
              Career Goals – Most by any player in football history
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
