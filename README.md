# SyncBite — Context-Aware Food Decision Intelligence Platform

<div align="center">

**AI that syncs with your body before your next bite.**

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker)
![Gemini](https://img.shields.io/badge/Powered%20by-Gemini%20AI-4285F4?style=flat-square&logo=google)

</div>

---

## 🧠 What is SyncBite?

SyncBite is a **hackathon-winning** full-stack AI web application that predicts unhealthy eating moments **before they happen** and provides instant preventive interventions.

Unlike traditional calorie trackers or diet planners, SyncBite combines:
- 🩺 **Simulated wearable health signals** (sleep, heart rate, hydration, stress)
- 🧬 **User behavior pattern analysis**
- 🌍 **Environmental context awareness** (home, office, gym, restaurant)

...to intelligently detect vulnerability to junk cravings, binge snacking, stress eating, dehydration-based hunger confusion, and sugar impulses — then **intervenes before the bad food choice occurs**.

---

## ✨ Core Features

| Module | Description |
|--------|-------------|
| **SyncSignal Dashboard** | Interactive health metric cards with animated gauges and sliders |
| **Bite Risk Prediction** | AI scoring engine with 5 risk dimensions and Gemini reasoning |
| **Preventive Nudges** | Smart intervention cards — hydration, healthy swaps, motivation |
| **Food Snap Analyzer** | Drag-and-drop food image analysis with health scores |
| **Demo Mode** | One-click dramatic demo for judges with auto-filled poor health signals |
| **Daily Rescue Tracker** | Cravings prevented, healthy swaps, hydration rescues, streaks |
| **Advanced Analytics** | Weekly charts — decisions prevented, hydration trends, energy stability |
| **Google Ecosystem** | Firebase Auth, Firestore, Gemini AI, Google Fit (all simulated) |

---

## 🏗️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19 + TypeScript
- **Styling**: Vanilla CSS / CSS Modules (premium dark futuristic theme)
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Google Ecosystem**: Firebase Auth, Firestore, Gemini AI, Google Fit (simulated)
- **Containerization**: Docker + Docker Compose
- **API Keys Required**: **None** (fully runnable offline)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or build manually
docker build -t syncbite .
docker run -p 3000:3000 syncbite
```

---

## 📁 Project Structure

```
syncbite/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── page.tsx                  # Landing page
│   │   ├── layout.tsx                # Root layout + providers
│   │   ├── globals.css               # Design system
│   │   ├── Landing.module.css        # Landing page styles
│   │   ├── dashboard/page.tsx        # SyncSignal Dashboard
│   │   ├── analyzer/page.tsx         # Food Snap Analyzer
│   │   └── analytics/page.tsx        # Advanced Analytics
│   ├── components/
│   │   ├── layout/                   # Sidebar, AppShell
│   │   ├── dashboard/                # SyncSignal, BiteRisk, Nudges, Demo, Rescue
│   │   ├── analyzer/                 # FoodAnalyzer dropzone + results
│   │   └── analytics/                # Charts + summary cards
│   └── lib/
│       ├── types.ts                  # Core TypeScript types
│       ├── store.tsx                 # React Context global state
│       ├── mockAiEngine.ts           # Bite Risk + Gemini reasoning engine
│       └── mockImageAnalysis.ts      # Food image analysis engine
├── public/                           # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
├── Dockerfile                        # Multi-stage production build
├── docker-compose.yml
├── .dockerignore
└── README.md
```

---

## 🎯 Demo Mode (For Judges)

Click the **"Run Live SyncBite Prediction"** button on the dashboard to instantly trigger:
- Sleep: 3.5 hours
- Heart Rate: 98 bpm
- Hydration: 18%
- Fasting: 9 hours
- Stress: 9/10
- Steps: 800

This will cause the Bite Risk Score to spike to **CRITICAL** level, triggering all warnings and intervention nudges for a dramatic demonstration.

---

## 🔐 Google Ecosystem (Simulated)

All Google services are **fully simulated locally** with zero API keys:

| Service | Simulation |
|---------|-----------|
| **Firebase Auth** | Email + Google SSO mock with localStorage persistence |
| **Firestore** | In-memory document store with localStorage backup |
| **Gemini AI** | Rich paragraph-level health reasoning from rule engine |
| **Google Fit** | Wearable sync animation with realistic time-series data |

The architecture is structured so real Firebase/Gemini SDKs can be swapped in later.

---

## 📄 License

MIT License — Built for hackathon demonstration purposes.

---

<div align="center">

**⚡ Powered by Gemini AI**

*SyncBite — Context-Aware Food Decision Intelligence*

</div>
