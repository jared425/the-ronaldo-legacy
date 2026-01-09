import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const clubColors = [
  { name: 'Sporting CP', color: 'hsl(145 80% 35%)' },
  { name: 'Man United', color: 'hsl(0 100% 45%)' },
  { name: 'Real Madrid', color: 'hsl(0 0% 100%)' },
  { name: 'Juventus', color: 'hsl(0 0% 90%)' },
  { name: 'Al Nassr', color: 'hsl(50 100% 50%)' },
  { name: 'Portugal', color: 'hsl(0 100% 40%)' },
];

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [colorIndex, setColorIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % clubColors.length);
    }, 400);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(colorInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearInterval(colorInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      >
        {/* Animated Number 7 */}
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="text-[200px] md:text-[300px] font-display font-bold leading-none"
            style={{ color: clubColors[colorIndex].color }}
            animate={{
              textShadow: `0 0 60px ${clubColors[colorIndex].color}`,
            }}
            transition={{ duration: 0.3 }}
          >
            7
          </motion.span>
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 blur-3xl opacity-30"
            style={{ backgroundColor: clubColors[colorIndex].color }}
          />
        </motion.div>

        {/* Club name */}
        <motion.p
          key={colorIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 font-display text-xl uppercase tracking-widest text-muted-foreground"
        >
          {clubColors[colorIndex].name}
        </motion.p>

        {/* Progress bar */}
        <div className="mt-8 w-64 h-1 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: clubColors[colorIndex].color }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        {/* CR7 text */}
        <motion.p
          className="mt-8 font-display text-sm uppercase tracking-[0.5em] text-gradient-gold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          CR7 Legacy
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
