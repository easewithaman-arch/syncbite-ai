'use client';

import React from 'react';
import AppShell from '@/components/layout/AppShell';
import AnalyticsDashboard from '@/components/analytics/AnalyticsDashboard';
import { BarChart3, Sparkles } from 'lucide-react';
import styles from './Analytics.module.css';

export default function AnalyticsPage() {
  return (
    <AppShell>
      <div className="page-content">
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>
              <BarChart3 size={28} style={{ color: 'var(--accent-teal)' }} />
              Advanced Analytics
            </h1>
            <p className={styles.subtitle}>
              Track your weekly health decisions, hydration trends, and behavioral patterns
            </p>
          </div>
          <div className="gemini-badge">
            <Sparkles size={12} />
            AI Insights
          </div>
        </div>
        <AnalyticsDashboard />
      </div>
    </AppShell>
  );
}
