/* ─── Landing Page ────────────────────────────────────────────────────────── */

.landing {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

/* ─── Nav ─────────────────────────────────────────────────────────────────── */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-lg) var(--space-xl);
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}

.navLogo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.logoIcon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent-teal), var(--accent-cyan));
  border-radius: var(--radius-sm);
  color: var(--bg-primary);
}

.logoText {
  font-family: 'Outfit', sans-serif;
  font-size: 22px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent-teal), var(--accent-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.navRight {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.authBtn {
  padding: 8px 20px;
  background: rgba(0, 229, 199, 0.08);
  border: 1px solid rgba(0, 229, 199, 0.25);
  border-radius: var(--radius-full);
  color: var(--accent-teal);
  font-size: 13px;
  font-weight: 600;
  transition: all var(--transition-fast);
  text-decoration: none;
  cursor: pointer;
}

.authBtn:hover {
  background: rgba(0, 229, 199, 0.15);
  box-shadow: var(--glow-teal);
}

/* ─── Hero ────────────────────────────────────────────────────────────────── */
.hero {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-3xl) var(--space-xl) var(--space-3xl);
  text-align: center;
  z-index: 5;
}

.heroContent {
  position: relative;
  z-index: 5;
}

.heroBadge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  background: rgba(0, 229, 199, 0.06);
  border: 1px solid rgba(0, 229, 199, 0.15);
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 600;
  color: var(--accent-teal);
  margin-bottom: var(--space-xl);
  letter-spacing: 0.02em;
}

.heroTitle {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(32px, 5vw, 64px);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: var(--space-lg);
  color: var(--text-primary);
}

.heroDesc {
  font-size: clamp(14px, 2vw, 18px);
  color: var(--text-secondary);
  max-width: 640px;
  margin: 0 auto var(--space-xl);
  line-height: 1.7;
}

.heroCtas {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
}

.primaryBtn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 14px 32px;
  background: linear-gradient(135deg, var(--accent-teal), var(--accent-cyan));
  border: none;
  border-radius: var(--radius-full);
  color: var(--bg-primary);
  font-size: 15px;
  font-weight: 700;
  box-shadow: 0 0 30px rgba(0, 229, 199, 0.25);
  transition: all var(--transition-base);
}

.primaryBtn:hover {
  box-shadow: 0 0 50px rgba(0, 229, 199, 0.4);
}

.secondaryBtn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 14px 32px;
  background: transparent;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: var(--radius-full);
  color: var(--text-primary);
  font-size: 15px;
  font-weight: 600;
  transition: all var(--transition-fast);
}

.secondaryBtn:hover {
  border-color: var(--accent-teal);
  color: var(--accent-teal);
}

/* Hero background orbs */
.heroGlow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 229, 199, 0.06), transparent 70%);
  pointer-events: none;
}

.heroOrb1 {
  position: absolute;
  top: 20%;
  left: 10%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.05), transparent 70%);
  border-radius: 50%;
  animation: float 8s ease-in-out infinite;
  pointer-events: none;
}

.heroOrb2 {
  position: absolute;
  bottom: 10%;
  right: 10%;
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.05), transparent 70%);
  border-radius: 50%;
  animation: float 10s ease-in-out infinite 2s;
  pointer-events: none;
}

/* ─── Features ────────────────────────────────────────────────────────────── */
.features {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-3xl) var(--space-xl);
}

.featuresGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--space-lg);
}

.featureCard {
  padding: var(--space-xl);
  background: linear-gradient(135deg, rgba(17, 24, 39, 0.7), rgba(22, 31, 46, 0.5));
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  transition: all var(--transition-base);
}

.featureCard:hover {
  border-color: var(--border-glow);
}

.featureIcon {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  margin-bottom: var(--space-lg);
}

.featureTitle {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-sm);
}

.featureDesc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* ─── Tech Section ────────────────────────────────────────────────────────── */
.techSection {
  text-align: center;
  padding: var(--space-3xl) var(--space-xl);
  max-width: 800px;
  margin: 0 auto;
}

.techTitle {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: var(--space-xl);
  color: var(--text-primary);
}

.techGrid {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
  justify-content: center;
}

.techBadge {
  padding: 8px 20px;
  background: rgba(17, 24, 39, 0.6);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  transition: all var(--transition-fast);
}

.techBadge:hover {
  border-color: var(--accent-teal);
  color: var(--accent-teal);
}

/* ─── Footer ──────────────────────────────────────────────────────────────── */
.footer {
  text-align: center;
  padding: var(--space-3xl) var(--space-xl);
  border-top: 1px solid var(--border-subtle);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
}

.footerLogo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-family: 'Outfit', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
}

.footer p {
  font-size: 13px;
  color: var(--text-muted);
}

/* ─── Auth Modal ──────────────────────────────────────────────────────────── */
.modalOverlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--space-md);
}

.modal {
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  padding: var(--space-2xl);
  max-width: 400px;
  width: 100%;
}

.modalTitle {
  font-size: 22px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 4px;
}

.modalSub {
  font-size: 13px;
  color: var(--text-muted);
  text-align: center;
  margin-bottom: var(--space-xl);
}

.googleBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  width: 100%;
  padding: 12px;
  background: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: 600;
  color: #333;
  transition: all var(--transition-fast);
}

.googleBtn:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.divider {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin: var(--space-lg) 0;
  color: var(--text-muted);
  font-size: 12px;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border-subtle);
}

.authForm {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.inputGroup {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md);
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  color: var(--text-muted);
  transition: border-color var(--transition-fast);
}

.inputGroup:focus-within {
  border-color: var(--accent-teal);
}

.inputGroup input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--text-primary);
  font-size: 14px;
}

.inputGroup input::placeholder {
  color: var(--text-muted);
}

.submitBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  padding: 12px;
  background: linear-gradient(135deg, var(--accent-teal), var(--accent-cyan));
  border: none;
  border-radius: var(--radius-md);
  color: var(--bg-primary);
  font-size: 14px;
  font-weight: 700;
  transition: all var(--transition-fast);
}

.submitBtn:hover {
  box-shadow: var(--glow-teal);
}
