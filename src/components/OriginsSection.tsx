import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, Heart, Star } from 'lucide-react';
import childhoodImage from '@/assets/childhood-messi.jpg';

const milestones = [
  {
    icon: Calendar,
    title: 'June 24, 1987',
    description: 'Born in Rosario, Santa Fe, Argentina',
  },
  {
    icon: Heart,
    title: 'Fighting Against Odds',
    description: 'Diagnosed with growth hormone deficiency at age 10',
  },
  {
    icon: Star,
    title: 'Early Prodigy',
    description: 'Joined Newell\'s Old Boys at age 6, scored nearly 500 goals in youth',
  },
  {
    icon: MapPin,
    title: 'La Masia Academy',
    description: 'Moved to Barcelona at 13, club paid for his medical treatment',
  },
];

const OriginsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="origins" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={childhoodImage}
                alt="Young Messi playing football"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Floating badge */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 card-premium p-4 rounded-xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <p className="text-sm text-muted-foreground">
                  "I start early, and I stay late, day after day, year after year."
                </p>
                <p className="text-xs text-primary mt-2 font-display uppercase tracking-wider">
                  — Lionel Messi
                </p>
              </motion.div>
            </div>

            {/* Decorative border */}
            <div className="absolute -inset-4 border border-primary/20 rounded-3xl -z-10" />
            <motion.div
              className="absolute -top-8 -right-8 w-32 h-32 border-t-2 border-r-2 border-primary/40 rounded-tr-3xl"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-display text-sm uppercase tracking-[0.3em] text-primary">
              Where Legends Are Born
            </span>
            
            <h2 className="section-title text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
              THE <span className="text-gradient-gold">ORIGINS</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From the humble streets of Rosario, Argentina, a small boy with an extraordinary gift
              began his journey. Lionel Andrés Messi overcame a growth hormone deficiency
              and left his homeland at just 13 to pursue his dream—a dream that would change football forever.
            </p>

            {/* Milestones */}
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <milestone.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OriginsSection;
