'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useSyncBite } from '@/lib/store';
import {
  Droplets,
  Timer,
  Repeat,
  Egg,
  AlertTriangle,
  Sparkles,
} from 'lucide-react';
import styles from './InterventionNudges.module.css';

const ICON_MAP: Record<string, React.ElementType> = {
  droplets: Droplets,
  timer: Timer,
  repeat: Repeat,
  egg: Egg,
  'alert-triangle': AlertTriangle,
  sparkles: Sparkles,
};

const TYPE_COLORS: Record<string, string> = {
  hydration: '#06b6d4',
  delay: '#f59e0b',
  swap: '#22c55e',
  protein: '#a855f7',
  digest: '#f97316',
  motivation: '#ec4899',
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function InterventionNudges() {
  const { nudges, incrementRescue } = useSyncBite();

  const handleAccept = (type: string) => {
    switch (type) {
      case 'hydration':
        incrementRescue('hydrationRescues');
        break;
      case 'swap':
      case 'protein':
        incrementRescue('healthySwapsMade');
        break;
      default:
        incrementRescue('cravingsPrevented');
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        <Sparkles size={20} style={{ color: 'var(--accent-teal)' }} />
        Preventive Interventions
      </h2>
      <p className={styles.subtitle}>
        Smart nudges to intercept unhealthy decisions before they happen
      </p>

      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {nudges.map((nudge) => {
          const Icon = ICON_MAP[nudge.icon] || Sparkles;
          const color = TYPE_COLORS[nudge.type] || 'var(--accent-teal)';

          return (
            <motion.div
              key={nudge.id}
              className={styles.card}
              variants={item}
              whileHover={{ y: -3 }}
              style={{ '--nudge-color': color } as React.CSSProperties}
            >
              <div className={styles.cardIcon} style={{ background: `${color}12`, color }}>
                <Icon size={20} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{nudge.title}</h3>
                <p className={styles.cardDesc}>{nudge.description}</p>
              </div>
              <button
                className={styles.acceptBtn}
                style={{ borderColor: `${color}40`, color }}
                onClick={() => handleAccept(nudge.type)}
              >
                Accept
              </button>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
