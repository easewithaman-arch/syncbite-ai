/* ─── Summary Cards ───────────────────────────────────────────────────────── */
.summaryGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.summaryCard {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-lg);
  background: linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(22, 31, 46, 0.6));
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.summaryCard:hover {
  border-color: var(--border-glow);
  transform: translateY(-2px);
}

.summaryIcon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  flex-shrink: 0;
}

.summaryContent {
  flex: 1;
}

.summaryValue {
  font-family: 'Outfit', sans-serif;
  font-size: 28px;
  font-weight: 900;
  color: var(--text-primary);
  line-height: 1;
}

.summarySuffix {
  font-size: 14px;
  font-weight: 500;
  opacity: 0.6;
}

.summaryLabel {
  font-size: 12px;
  color: var(--text-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 2px;
}

.summaryChange {
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: var(--radius-full);
  background: rgba(34, 197, 94, 0.1);
}

/* ─── Charts Grid ─────────────────────────────────────────────────────────── */
.chartsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: var(--space-lg);
  margin-bottom: var(--space-xl);
}

@media (max-width: 600px) {
  .chartsGrid {
    grid-template-columns: 1fr;
  }
}

.chartCard {
  background: linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(22, 31, 46, 0.6));
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  transition: all var(--transition-base);
}

.chartCard:hover {
  border-color: var(--border-glow);
}

.chartTitle {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: 15px;
  font-weight: 700;
  margin-bottom: var(--space-lg);
  color: var(--text-primary);
}

/* ─── Tooltip ─────────────────────────────────────────────────────────────── */
.tooltip {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  padding: var(--space-md);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.tooltipLabel {
  font-size: 12px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
}

.tooltipRow {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--text-secondary);
}

.tooltipRow strong {
  color: var(--text-primary);
  margin-left: auto;
}

/* ─── Streak Card ─────────────────────────────────────────────────────────── */
.streakCard {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  padding: var(--space-xl);
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.06), rgba(239, 68, 68, 0.04));
  border: 1px solid rgba(249, 115, 22, 0.15);
  border-radius: var(--radius-xl);
  flex-wrap: wrap;
}

.streakInfo {
  display: flex;
  flex-direction: column;
}

.streakValue {
  font-family: 'Outfit', sans-serif;
  font-size: 48px;
  font-weight: 900;
  color: #f97316;
  line-height: 1;
}

.streakLabel {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-secondary);
}

.streakDesc {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.5;
  flex: 1;
  min-width: 200px;
}
