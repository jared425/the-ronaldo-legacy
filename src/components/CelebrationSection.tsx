import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const CelebrationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const triggerCelebration = () => {
    setIsAnimating(true);
    setHasInteracted(true);
    setTimeout(() => setIsAnimating(false), 3000);
  };

  return (
    <section className="relative py-24 md:py-40 overflow-hidden" ref={ref}>
      {/* Background with stadium lights effect */}
      <div className="absolute inset-0 bg-background">
        <motion.div
          className="absolute inset-0"
          animate={isAnimating ? {
            background: [
              'radial-gradient(ellipse at center, hsl(43 100% 50% / 0.1) 0%, transparent 70%)',
              'radial-gradient(ellipse at center, hsl(43 100% 50% / 0.3) 0%, transparent 70%)',
              'radial-gradient(ellipse at center, hsl(43 100% 50% / 0.1) 0%, transparent 70%)',
            ],
          } : {}}
          transition={{ duration: 2, repeat: isAnimating ? Infinity : 0 }}
        />
      </div>

      {/* Stadium light beams */}
      {isAnimating && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-[150%] bg-gradient-to-b from-primary/40 to-transparent origin-top"
              style={{
                left: `${10 + i * 12}%`,
                top: 0,
                transform: `rotate(${-20 + i * 5}deg)`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 1, delay: i * 0.1, repeat: 2 }}
            />
          ))}
        </>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Pre-title */}
          <span className="font-display text-sm uppercase tracking-[0.3em] text-primary">
            The Iconic Celebration
          </span>

          {/* SIUUU Title */}
          <motion.h2
            className="section-title text-6xl md:text-8xl lg:text-[150px] mt-4 mb-8"
            animate={isAnimating ? {
              scale: [1, 1.1, 1],
              textShadow: [
                '0 0 20px hsl(43 100% 50% / 0.5)',
                '0 0 60px hsl(43 100% 50% / 0.9)',
                '0 0 20px hsl(43 100% 50% / 0.5)',
              ],
            } : {}}
            transition={{ duration: 0.5, repeat: isAnimating ? 3 : 0 }}
          >
            <span className="text-gradient-gold animate-glow">SIUUUU!</span>
          </motion.h2>

          {/* Interactive celebration pose */}
          <motion.div
            className="relative inline-block cursor-pointer select-none"
            onClick={triggerCelebration}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Silhouette figure */}
            <motion.div
              className="relative"
              animate={isAnimating ? {
                y: [0, -50, 0],
                rotate: [0, -5, 5, 0],
              } : {}}
              transition={{ duration: 0.8, repeat: isAnimating ? 2 : 0 }}
            >
              {/* Body */}
              <div className="flex flex-col items-center">
                {/* Head */}
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary"
                  animate={isAnimating ? { scale: [1, 1.1, 1] } : {}}
                />
                
                {/* Arms raised in V */}
                <div className="flex justify-center -mt-2">
                  <motion.div
                    className="w-4 h-32 md:h-40 bg-primary rounded-full origin-bottom"
                    style={{ transform: 'rotate(-30deg) translateX(-10px)' }}
                    animate={isAnimating ? { rotate: [-30, -45, -30] } : { rotate: -30 }}
                    transition={{ duration: 0.4, repeat: isAnimating ? 5 : 0 }}
                  />
                  <motion.div
                    className="w-4 h-32 md:h-40 bg-primary rounded-full origin-bottom"
                    style={{ transform: 'rotate(30deg) translateX(10px)' }}
                    animate={isAnimating ? { rotate: [30, 45, 30] } : { rotate: 30 }}
                    transition={{ duration: 0.4, repeat: isAnimating ? 5 : 0 }}
                  />
                </div>

                {/* Torso */}
                <div className="w-20 h-28 md:w-24 md:h-32 bg-primary rounded-lg -mt-28" />
                
                {/* Legs */}
                <div className="flex gap-3 -mt-2">
                  <motion.div
                    className="w-4 h-36 md:h-44 bg-primary rounded-full origin-top"
                    animate={isAnimating ? { rotate: [-10, 0, -10] } : { rotate: -10 }}
                  />
                  <motion.div
                    className="w-4 h-36 md:h-44 bg-primary rounded-full origin-top"
                    animate={isAnimating ? { rotate: [10, 0, 10] } : { rotate: 10 }}
                  />
                </div>
              </div>

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-primary blur-3xl opacity-30"
                animate={isAnimating ? { opacity: [0.3, 0.6, 0.3] } : {}}
                transition={{ duration: 0.5, repeat: isAnimating ? 6 : 0 }}
              />
            </motion.div>

            {/* Click instruction */}
            <motion.p
              className="mt-8 text-sm text-muted-foreground font-display uppercase tracking-widest"
              animate={{ opacity: hasInteracted ? 0.5 : [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: hasInteracted ? 0 : Infinity }}
            >
              {hasInteracted ? 'Click again!' : 'Click to celebrate'}
            </motion.p>
          </motion.div>

          {/* Crowd ambience indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-12 flex items-center justify-center gap-3 text-muted-foreground"
          >
            {isAnimating ? (
              <Volume2 className="w-5 h-5 text-primary animate-pulse" />
            ) : (
              <VolumeX className="w-5 h-5" />
            )}
            <span className="text-sm">
              {isAnimating ? 'Crowd goes wild!' : 'Stadium awaits...'}
            </span>
          </motion.div>

          {/* Floating particles during celebration */}
          {isAnimating && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: i % 2 === 0 ? 'hsl(43 100% 50%)' : 'hsl(0 0% 100%)',
                    left: `${Math.random() * 100}%`,
                    top: '100%',
                  }}
                  animate={{
                    y: [0, -800],
                    x: [0, (Math.random() - 0.5) * 200],
                    opacity: [1, 0],
                    scale: [1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: Math.random() * 0.5,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CelebrationSection;
