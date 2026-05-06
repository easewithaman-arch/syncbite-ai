.section {
  margin-bottom: var(--space-xl);
}

.title {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
}

.subtitle {
  font-size: 13px;
  color: var(--text-muted);
  margin-bottom: var(--space-lg);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-md);
}

.card {
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
  padding: var(--space-lg);
  background: linear-gradient(135deg, rgba(17, 24, 39, 0.7), rgba(22, 31, 46, 0.5));
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.card:hover {
  border-color: rgba(0, 229, 199, 0.12);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
}

.cardIcon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  flex-shrink: 0;
}

.cardContent {
  flex: 1;
  min-width: 0;
}

.cardTitle {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.cardDesc {
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.5;
}

.acceptBtn {
  padding: 6px 14px;
  background: transparent;
  border: 1px solid;
  border-radius: var(--radius-full);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  transition: all var(--transition-fast);
  white-space: nowrap;
  flex-shrink: 0;
  align-self: center;
}

.acceptBtn:hover {
  background: rgba(0, 229, 199, 0.08);
  transform: scale(1.05);
}
