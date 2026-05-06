'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useSyncBite } from '@/lib/store';
import { ShieldCheck, Repeat, Droplets, Flame } from 'lucide-react';
import styles from './RescueTracker.module.css';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function RescueTracker() {
  const { rescueStats } = useSyncBite();

  const stats = [
    {
      label: 'Cravings Prevented',
      value: rescueStats.cravingsPrevented,
      icon: ShieldCheck,
      color: '#22c55e',
      suffix: '',
    },
    {
      label: 'Healthy Swaps',
      value: rescueStats.healthySwapsMade,
      icon: Repeat,
      color: '#06b6d4',
      suffix: '',
    },
    {
      label: 'Hydration Rescues',
      value: rescueStats.hydrationRescues,
      icon: Droplets,
      color: '#3b82f6',
      suffix: '',
    },
    {
      label: 'Decision Streak',
      value: rescueStats.decisionStreak,
      icon: Flame,
      color: '#f97316',
      suffix: ' days',
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        <Flame size={20} style={{ color: '#f97316' }} />
        Daily Rescue Tracker
      </h2>

      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              className={styles.card}
              variants={item}
              whileHover={{ y: -3, boxShadow: `0 0 30px ${stat.color}15` }}
            >
              <div className={styles.iconWrap} style={{ background: `${stat.color}12`, color: stat.color }}>
                <Icon size={22} />
              </div>
              <div className={styles.value} style={{ color: stat.color }}>
                {stat.value}
                <span className={styles.suffix}>{stat.suffix}</span>
              </div>
              <div className={styles.label}>{stat.label}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
