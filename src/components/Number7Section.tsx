import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const clubColors = [
  { name: 'Sporting CP', color: 'hsl(145 80% 35%)', years: '2002-2003' },
  { name: 'Manchester United', color: 'hsl(0 100% 45%)', years: '2003-2009' },
  { name: 'Real Madrid', color: 'hsl(0 0% 95%)', years: '2009-2018' },
  { name: 'Juventus', color: 'hsl(0 0% 90%)', years: '2018-2021' },
  { name: 'Al Nassr', color: 'hsl(50 100% 50%)', years: '2023-Present' },
  { name: 'Portugal', color: 'hsl(0 100% 40%)', years: '2003-Present' },
];

const Number7Section = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clubColors.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const activeClub = clubColors[activeIndex];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display text-sm uppercase tracking-[0.3em] text-primary">
              More Than a Number
            </span>
            <h2 className="section-title text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
              THE <span className="text-gradient-gold">CR7</span> LEGACY
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The number 7 became synonymous with greatness, worn by legends like
              George Best, David Beckham, and Eric Cantona at Manchester United.
              But Cristiano made it his own—transforming CR7 into a global brand
              and a symbol of excellence.
            </p>

            {/* Club list */}
            <div className="space-y-3">
              {clubColors.map((club, index) => (
                <motion.button
                  key={club.name}
                  onClick={() => setActiveIndex(index)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`w-full flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ${
                    activeIndex === index ? 'bg-secondary' : 'hover:bg-secondary/50'
                  }`}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm"
                    style={{ backgroundColor: club.color, color: index === 2 || index === 3 ? '#000' : '#fff' }}
                  >
                    7
                  </div>
                  <div className="flex-1 text-left">
                    <span className="font-display text-foreground">{club.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{club.years}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Animated Number 7 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 blur-3xl opacity-50"
                animate={{ backgroundColor: activeClub.color }}
                transition={{ duration: 0.5 }}
                style={{ transform: 'scale(0.8)' }}
              />
              
              {/* Main number */}
              <motion.span
                className="relative text-[250px] md:text-[350px] font-display font-bold leading-none"
                animate={{
                  color: activeClub.color,
                  textShadow: `0 0 80px ${activeClub.color}`,
                }}
                transition={{ duration: 0.5 }}
              >
                7
              </motion.span>

              {/* Club name badge */}
              <motion.div
                key={activeClub.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <span
                  className="font-display text-xl uppercase tracking-widest px-6 py-2 rounded-full"
                  style={{ backgroundColor: `${activeClub.color}20`, color: activeClub.color }}
                >
                  {activeClub.name}
                </span>
              </motion.div>
            </div>

            {/* Orbiting elements */}
            <motion.div
              className="absolute w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              {clubColors.map((club, index) => {
                const angle = (index / clubColors.length) * 360;
                const radius = 180;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <motion.div
                    key={club.name}
                    className="absolute w-4 h-4 rounded-full"
                    style={{
                      backgroundColor: club.color,
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{ scale: activeIndex === index ? 1.5 : 1 }}
                  />
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Number7Section;
