.wrapper {
  margin-bottom: var(--space-xl);
}

.demoBtn {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--space-md);
  width: 100%;
  padding: var(--space-lg) var(--space-xl);
  background: linear-gradient(135deg, rgba(0, 229, 199, 0.08), rgba(6, 182, 212, 0.08));
  border: 1px solid rgba(0, 229, 199, 0.25);
  border-radius: var(--radius-lg);
  color: var(--accent-teal);
  font-size: 14px;
  overflow: hidden;
  transition: all var(--transition-base);
}

.demoBtn:hover {
  background: linear-gradient(135deg, rgba(0, 229, 199, 0.12), rgba(6, 182, 212, 0.12));
  box-shadow: var(--glow-teal-strong);
  border-color: var(--accent-teal);
}

.btnGlow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(0, 229, 199, 0.06), transparent 60%);
  pointer-events: none;
}

.btnText {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.btnTitle {
  font-family: 'Outfit', sans-serif;
  font-size: 16px;
  font-weight: 700;
}

.btnSub {
  font-size: 12px;
  color: var(--text-muted);
  font-weight: 400;
}

.resetBtn {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  width: 100%;
  padding: var(--space-md) var(--space-xl);
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: var(--radius-lg);
  color: var(--risk-critical);
  font-size: 14px;
  font-weight: 600;
  animation: risk-pulse 2s infinite;
  transition: all var(--transition-base);
}

.resetBtn:hover {
  background: rgba(239, 68, 68, 0.15);
}
