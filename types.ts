.panel {
  margin-bottom: var(--space-xl);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-lg);
  flex-wrap: wrap;
  gap: var(--space-md);
}

.title {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
}

.subtitle {
  font-size: 13px;
  color: var(--text-muted);
  margin-top: 4px;
}

.headerBadges {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

.syncBtn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: rgba(0, 229, 199, 0.08);
  border: 1px solid rgba(0, 229, 199, 0.2);
  border-radius: var(--radius-full);
  color: var(--accent-teal);
  font-size: 12px;
  font-weight: 600;
  transition: all var(--transition-fast);
}

.syncBtn:hover {
  background: rgba(0, 229, 199, 0.15);
  box-shadow: var(--glow-teal);
}

/* ─── Grid ────────────────────────────────────────────────────────────────── */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--space-md);
}

/* ─── Card ────────────────────────────────────────────────────────────────── */
.card {
  background: linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(22, 31, 46, 0.6));
  backdrop-filter: blur(16px);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-teal), transparent);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.card:hover {
  border-color: var(--border-glow);
  transform: translateY(-2px);
}

.card:hover::before {
  opacity: 1;
}

.cardHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
}

.cardIcon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
}

.statusBadge {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 2px 8px;
  border: 1px solid;
  border-radius: var(--radius-full);
}

.cardValue {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 2px;
}

.valueNumber {
  font-family: 'Outfit', sans-serif;
  font-size: 28px;
  font-weight: 800;
  line-height: 1;
}

.valueUnit {
  font-size: 12px;
  color: var(--text-muted);
  font-weight: 500;
}

.cardLabel {
  font-size: 12px;
  color: var(--text-secondary);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* ─── Progress Bar ────────────────────────────────────────────────────────── */
.progressTrack {
  height: 4px;
  background: rgba(148, 163, 184, 0.1);
  border-radius: var(--radius-full);
  margin: var(--space-md) 0 var(--space-sm);
  overflow: hidden;
}

.progressFill {
  height: 100%;
  border-radius: var(--radius-full);
  position: relative;
}

.progressFill::after {
  content: '';
  position: absolute;
  right: 0;
  top: -2px;
  width: 8px;
  height: 8px;
  background: inherit;
  border-radius: 50%;
  box-shadow: 0 0 8px currentColor;
}

/* ─── Slider ──────────────────────────────────────────────────────────────── */
.slider {
  width: 100%;
  height: 4px;
  -webkit-appearance: none;
  appearance: none;
  background: rgba(148, 163, 184, 0.1);
  border-radius: var(--radius-full);
  outline: none;
  cursor: pointer;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--slider-color, var(--accent-teal));
  cursor: pointer;
  box-shadow: 0 0 10px var(--slider-color, var(--accent-teal));
  transition: transform 0.15s ease;
}

.slider::-webkit-slider-thumb:hover {
  transform: scale(1.3);
}

.slider::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--slider-color, var(--accent-teal));
  cursor: pointer;
  border: none;
  box-shadow: 0 0 10px var(--slider-color, var(--accent-teal));
}

/* ─── Environment Select ──────────────────────────────────────────────────── */
.envSelect {
  width: 100%;
  padding: var(--space-sm) var(--space-md);
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  font-size: 14px;
  cursor: pointer;
  transition: border-color var(--transition-fast);
}

.envSelect:focus {
  outline: none;
  border-color: var(--accent-teal);
}

.envSelect option {
  background: var(--bg-secondary);
  color: var(--text-primary);
}
