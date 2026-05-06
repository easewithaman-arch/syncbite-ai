.section {
  margin-bottom: var(--space-xl);
}

.title {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: 20px;
  font-weight: 700;
  margin-bottom: var(--space-lg);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: var(--space-md);
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--space-xl) var(--space-lg);
  background: linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(22, 31, 46, 0.6));
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.card:hover {
  border-color: var(--border-glow);
}

.iconWrap {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  margin-bottom: var(--space-md);
}

.value {
  font-family: 'Outfit', sans-serif;
  font-size: 36px;
  font-weight: 900;
  line-height: 1;
  margin-bottom: var(--space-xs);
}

.suffix {
  font-size: 14px;
  font-weight: 500;
  opacity: 0.7;
}

.label {
  font-size: 12px;
  color: var(--text-secondary);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
