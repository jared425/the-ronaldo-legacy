import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, Facebook, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/cristiano', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/cristiano', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com/@cristiano', label: 'YouTube' },
  { icon: Facebook, href: 'https://facebook.com/cristiano', label: 'Facebook' },
];

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="font-display text-5xl font-bold text-gradient-gold">
              CR7
            </span>
            <p className="text-sm text-muted-foreground mt-2 font-display uppercase tracking-widest">
              The Legend Lives On
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            {['Origins', 'Career', 'Stats', 'Trophies', 'Legacy'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-display uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-sm text-muted-foreground"
          >
            <p className="flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-accent fill-current" /> for the Greatest of All Time
            </p>
            <p className="mt-2">
              © {new Date().getFullYear()} CR7 Tribute. This is a fan-made tribute site.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
