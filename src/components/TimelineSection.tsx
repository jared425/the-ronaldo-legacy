import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Trophy, Target, Calendar } from 'lucide-react';

interface ClubData {
  id: string;
  name: string;
  years: string;
  matches: number;
  goals: number;
  assists: number;
  trophies: number;
  color: string;
  bgGradient: string;
  highlights: string[];
}

const clubs: ClubData[] = [
  {
    id: 'sporting',
    name: 'Sporting CP',
    years: '2002–2003',
    matches: 31,
    goals: 5,
    assists: 6,
    trophies: 0,
    color: 'hsl(145 80% 35%)',
    bgGradient: 'from-green-900/40 to-green-950/40',
    highlights: ['Professional debut at 17', 'Impressed Sir Alex Ferguson', 'Youth academy product'],
  },
  {
    id: 'manutd1',
    name: 'Manchester United',
    years: '2003–2009',
    matches: 292,
    goals: 118,
    assists: 69,
    trophies: 10,
    color: 'hsl(0 100% 45%)',
    bgGradient: 'from-red-900/40 to-red-950/40',
    highlights: ['First Ballon d\'Or (2008)', 'Champions League winner', '3x Premier League champion'],
  },
  {
    id: 'real',
    name: 'Real Madrid',
    years: '2009–2018',
    matches: 438,
    goals: 450,
    assists: 131,
    trophies: 16,
    color: 'hsl(0 0% 95%)',
    bgGradient: 'from-slate-800/40 to-slate-900/40',
    highlights: ['4x Champions League winner', 'All-time top scorer', '4x Ballon d\'Or winner'],
  },
  {
    id: 'juventus',
    name: 'Juventus',
    years: '2018–2021',
    matches: 134,
    goals: 101,
    assists: 22,
    trophies: 5,
    color: 'hsl(0 0% 90%)',
    bgGradient: 'from-zinc-800/40 to-zinc-900/40',
    highlights: ['2x Serie A champion', 'Serie A Best Player', '100+ goals in 3 leagues'],
  },
  {
    id: 'manutd2',
    name: 'Manchester United',
    years: '2021–2022',
    matches: 54,
    goals: 27,
    assists: 5,
    trophies: 0,
    color: 'hsl(0 100% 45%)',
    bgGradient: 'from-red-900/40 to-red-950/40',
    highlights: ['Heroic return', 'Premier League hat-tricks', 'UCL knockout goals'],
  },
  {
    id: 'alnassr',
    name: 'Al Nassr',
    years: '2023–Present',
    matches: 89,
    goals: 76,
    assists: 18,
    trophies: 1,
    color: 'hsl(50 100% 50%)',
    bgGradient: 'from-yellow-900/40 to-amber-950/40',
    highlights: ['Saudi Pro League star', 'Record-breaking contract', 'Global ambassador'],
  },
  {
    id: 'portugal',
    name: 'Portugal',
    years: '2003–Present',
    matches: 217,
    goals: 135,
    assists: 48,
    trophies: 2,
    color: 'hsl(0 100% 40%)',
    bgGradient: 'from-red-900/40 to-green-950/40',
    highlights: ['Euro 2016 champion', 'All-time top international scorer', 'Nations League winner'],
  },
];

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeClub, setActiveClub] = useState<string>('real');

  const activeClubData = clubs.find((c) => c.id === activeClub)!;

  return (
    <section id="timeline" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-display text-sm uppercase tracking-[0.3em] text-primary">
            The Journey of Greatness
          </span>
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl mt-4">
            CAREER <span className="text-gradient-gold">TIMELINE</span>
          </h2>
        </motion.div>

        {/* Timeline Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {clubs.map((club) => (
            <button
              key={club.id}
              onClick={() => setActiveClub(club.id)}
              className={`px-4 py-2 rounded-full font-display text-sm uppercase tracking-wider transition-all duration-300 ${
                activeClub === club.id
                  ? 'text-background'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
              style={{
                backgroundColor: activeClub === club.id ? club.color : undefined,
              }}
            >
              {club.name}
            </button>
          ))}
        </motion.div>

        {/* Active Club Card */}
        <motion.div
          key={activeClub}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className={`max-w-4xl mx-auto card-premium rounded-2xl overflow-hidden bg-gradient-to-br ${activeClubData.bgGradient}`}
        >
          {/* Card Header */}
          <div
            className="p-6 md:p-8 border-b border-border"
            style={{ borderColor: `${activeClubData.color}30` }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3
                  className="font-display text-3xl md:text-4xl font-bold"
                  style={{ color: activeClubData.color }}
                >
                  {activeClubData.name}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                  <Calendar size={16} />
                  <span>{activeClubData.years}</span>
                </div>
              </div>
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center animate-pulse-gold"
                style={{ backgroundColor: `${activeClubData.color}20`, borderColor: activeClubData.color }}
              >
                <span className="font-display text-2xl font-bold" style={{ color: activeClubData.color }}>
                  7
                </span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { label: 'Matches', value: activeClubData.matches },
                { label: 'Goals', value: activeClubData.goals },
                { label: 'Assists', value: activeClubData.assists },
                { label: 'Trophies', value: activeClubData.trophies },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="font-display text-4xl md:text-5xl font-bold text-gradient-gold"
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="border-t border-border pt-6" style={{ borderColor: `${activeClubData.color}20` }}>
              <h4 className="font-display text-sm uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                <Trophy size={16} className="text-primary" />
                Key Highlights
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                {activeClubData.highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
                  >
                    <Target size={16} style={{ color: activeClubData.color }} />
                    <span className="text-sm text-foreground">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Line (Desktop) */}
        <div className="hidden lg:block relative mt-16">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-border" />
          <div className="flex justify-between">
            {clubs.map((club, index) => (
              <motion.button
                key={club.id}
                onClick={() => setActiveClub(club.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`relative flex flex-col items-center gap-2 group ${
                  activeClub === club.id ? 'scale-110' : ''
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    activeClub === club.id ? 'scale-150' : 'scale-100'
                  }`}
                  style={{
                    backgroundColor: activeClub === club.id ? club.color : 'transparent',
                    borderColor: club.color,
                  }}
                />
                <span className="text-xs font-display uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                  {club.years.split('–')[0]}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
