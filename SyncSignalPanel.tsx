.section {
  background: linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(22, 31, 46, 0.6));
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  margin-bottom: var(--space-xl);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-lg);
}

.title {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: 20px;
  font-weight: 700;
}

.content {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: var(--space-xl);
  align-items: start;
}

@media (max-width: 768px) {
  .content {
    grid-template-columns: 1fr;
    justify-items: center;
  }
}

/* ─── Gauge ───────────────────────────────────────────────────────────────── */
.gaugeContainer {
  position: relative;
  width: 200px;
  height: 140px;
}

.gauge {
  width: 100%;
  height: auto;
}

.gaugeValue {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.scoreNumber {
  font-family: 'Outfit', sans-serif;
  font-size: 42px;
  font-weight: 900;
  display: block;
  line-height: 1;
}

.scoreLabel {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

/* ─── Sub Scores ──────────────────────────────────────────────────────────── */
.subScores {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  width: 100%;
}

.subScore {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.subHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.subLabel {
  font-size: 12px;
  color: var(--text-secondary);
  font-weight: 500;
}

.subValue {
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 700;
}

.subBar {
  height: 6px;
  background: rgba(148, 163, 184, 0.08);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.subFill {
  height: 100%;
  border-radius: var(--radius-full);
  box-shadow: 0 0 8px currentColor;
}

/* ─── Warnings ────────────────────────────────────────────────────────────── */
.warnings {
  margin-top: var(--space-lg);
  overflow: hidden;
}

.warningsTitle {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: 14px;
  font-weight: 600;
  color: var(--risk-moderate);
  margin-bottom: var(--space-md);
}

.warningCard {
  padding: var(--space-md);
  background: rgba(17, 24, 39, 0.5);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-sm);
  border-left: 3px solid var(--risk-moderate);
}

.warningCard.critical {
  border-left-color: var(--risk-critical);
  background: rgba(239, 68, 68, 0.04);
}

.warningCard.high {
  border-left-color: var(--risk-high);
  background: rgba(249, 115, 22, 0.04);
}

.warningCard.medium {
  border-left-color: var(--risk-moderate);
}

.warningCard.low {
  border-left-color: var(--risk-low);
}

.warningBadge {
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.warningMessage {
  font-size: 13px;
  color: var(--text-primary);
  line-height: 1.5;
  margin-bottom: var(--space-sm);
}

.warningFactors {
  display: flex;
  gap: var(--space-xs);
  flex-wrap: wrap;
}

.factorTag {
  font-size: 10px;
  padding: 2px 8px;
  background: rgba(148, 163, 184, 0.08);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  color: var(--text-secondary);
  font-weight: 500;
}

/* ─── Gemini Reasoning ────────────────────────────────────────────────────── */
.geminiSection {
  margin-top: var(--space-lg);
  padding: var(--space-lg);
  background: linear-gradient(135deg, rgba(66, 133, 244, 0.04), rgba(168, 85, 247, 0.04));
  border: 1px solid rgba(66, 133, 244, 0.12);
  border-radius: var(--radius-md);
}

.geminiHeader {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: 13px;
  font-weight: 700;
  color: #8ab4f8;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: var(--space-md);
}

.geminiContent {
  font-size: 13px;
  line-height: 1.7;
  color: var(--text-secondary);
}

.geminiContent p {
  margin-bottom: var(--space-sm);
}

.geminiContent strong {
  color: var(--text-primary);
  font-weight: 600;
}
