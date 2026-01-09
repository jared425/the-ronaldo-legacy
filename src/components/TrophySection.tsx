import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Trophy, Award, Crown, Star, Medal, Globe, LucideIcon } from 'lucide-react';
import trophyImage from '@/assets/trophy-cabinet-messi.jpg';

interface TrophyItem {
  icon: LucideIcon;
  name: string;
  count: number;
  category: 'club' | 'individual';
  description: string;
}

const trophies: TrophyItem[] = [
  { icon: Trophy, name: 'Champions League', count: 4, category: 'club', description: 'UEFA Champions League titles' },
  { icon: Medal, name: 'League Titles', count: 12, category: 'club', description: 'La Liga, Ligue 1, MLS' },
  { icon: Trophy, name: 'Domestic Cups', count: 10, category: 'club', description: 'Copa del Rey, Coupe de France, and more' },
  { icon: Globe, name: 'World Cup', count: 1, category: 'club', description: 'FIFA World Cup 2022 Champion' },
  { icon: Crown, name: 'Ballon d\'Or', count: 8, category: 'individual', description: 'Record-breaking world\'s best player' },
  { icon: Award, name: 'Golden Boot', count: 6, category: 'individual', description: 'European top scorer awards' },
  { icon: Star, name: 'FIFA Best', count: 3, category: 'individual', description: 'FIFA Player of the Year' },
  { icon: Medal, name: 'Copa América', count: 2, category: 'club', description: 'South American champion' },
];

const TrophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState<'all' | 'club' | 'individual'>('all');
  const [hoveredTrophy, setHoveredTrophy] = useState<string | null>(null);

  const filteredTrophies = activeCategory === 'all' 
    ? trophies 
    : trophies.filter(t => t.category === activeCategory);

  return (
    <section id="trophies" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={trophyImage}
          alt="Trophy cabinet"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-display text-sm uppercase tracking-[0.3em] text-primary">
            Cabinet of Greatness
          </span>
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl mt-4">
            TROPHY <span className="text-gradient-gold">SHOWCASE</span>
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {[
            { key: 'all', label: 'All Trophies' },
            { key: 'club', label: 'Team Trophies' },
            { key: 'individual', label: 'Individual Awards' },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key as typeof activeCategory)}
              className={`px-6 py-3 rounded-full font-display text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'btn-gold'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Trophy Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {filteredTrophies.map((trophy, index) => (
            <motion.div
              key={trophy.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredTrophy(trophy.name)}
              onMouseLeave={() => setHoveredTrophy(null)}
              className="relative group"
            >
              <div className="card-premium p-6 md:p-8 rounded-2xl h-full flex flex-col items-center text-center transition-all duration-300 hover:border-primary/50 group-hover:glow-gold">
                {/* Glass effect top */}
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-primary/5 to-transparent rounded-t-2xl pointer-events-none" />
                
                {/* Icon */}
                <motion.div
                  animate={{
                    scale: hoveredTrophy === trophy.name ? 1.1 : 1,
                    rotate: hoveredTrophy === trophy.name ? [0, -5, 5, 0] : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <trophy.icon className="w-12 h-12 md:w-16 md:h-16 text-primary" />
                  <motion.div
                    className="absolute inset-0 bg-primary blur-xl opacity-0 group-hover:opacity-30 transition-opacity"
                  />
                </motion.div>

                {/* Count */}
                <motion.div
                  className="text-4xl md:text-5xl font-display font-bold text-gradient-gold mt-4"
                  animate={hoveredTrophy === trophy.name ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {trophy.count}
                </motion.div>

                {/* Name */}
                <h3 className="font-display text-lg font-semibold mt-2 text-foreground">
                  {trophy.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-muted-foreground mt-1">
                  {trophy.description}
                </p>

                {/* Category badge */}
                <span className={`mt-3 px-3 py-1 rounded-full text-xs font-display uppercase tracking-wider ${
                  trophy.category === 'club' 
                    ? 'bg-accent/20 text-accent' 
                    : 'bg-primary/20 text-primary'
                }`}>
                  {trophy.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total count */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 card-premium px-12 py-6 rounded-2xl">
            <Trophy className="w-12 h-12 text-primary" />
            <div className="text-left">
              <div className="text-5xl font-display font-bold text-gradient-gold">
                45+
              </div>
              <p className="text-muted-foreground">
                Major trophies in career
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrophySection;
