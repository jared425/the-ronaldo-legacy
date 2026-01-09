import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Heart, Star, Flame } from 'lucide-react';

const quotes = [
  {
    text: "I don't have to show anything to anyone. There is nothing to prove.",
    context: "On self-belief",
  },
  {
    text: "Your love makes me strong. Your hate makes me unstoppable.",
    context: "On motivation",
  },
  {
    text: "Talent without working hard is nothing.",
    context: "On work ethic",
  },
  {
    text: "I'm not a perfectionist, but I like to feel that things are done well.",
    context: "On excellence",
  },
];

const LegacySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="legacy" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-display text-sm uppercase tracking-[0.3em] text-primary">
            The GOAT. The Icon. The Inspiration.
          </span>
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl mt-4">
            THE <span className="text-gradient-gold">LEGACY</span>
          </h2>
        </motion.div>

        {/* Quotes Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {quotes.map((quote, index) => (
            <motion.div
              key={quote.text}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium p-8 rounded-2xl relative group hover:border-primary/30 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-primary/30 absolute top-6 right-6" />
              
              <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed mb-4 italic">
                "{quote.text}"
              </p>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-primary" />
                <span className="text-sm text-primary font-display uppercase tracking-wider">
                  {quote.context}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { icon: Flame, title: 'Discipline', description: 'First to arrive, last to leave. A relentless pursuit of perfection.' },
            { icon: Heart, title: 'Passion', description: 'Playing every match like it\'s the final. Love for the beautiful game.' },
            { icon: Star, title: 'Belief', description: 'Unwavering confidence that hard work conquers all obstacles.' },
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="card-premium p-12 rounded-3xl glow-gold">
            <motion.div
              className="text-8xl md:text-9xl font-display font-bold text-gradient-gold mb-6"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              CR7
            </motion.div>
            
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              More than a footballer. A symbol of what human determination can achieve.
              From the streets of Madeira to the pinnacle of world football, 
              Cristiano Ronaldo's legacy transcends the sport itself.
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 text-primary">
              <Heart className="w-5 h-5 fill-current" />
              <span className="font-display uppercase tracking-widest">Forever the GOAT</span>
              <Heart className="w-5 h-5 fill-current" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegacySection;
