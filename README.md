# CarePortal

A modern healthcare dashboard demo showcasing patient records, medical timelines, health metrics visualization, and AI-powered insights.

![Vue 3](https://img.shields.io/badge/Vue-3.4-4FC08D?logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwindcss)
![Tests](https://img.shields.io/badge/Tests-109_passing-6E9F18?logo=vitest)
![Coverage](https://img.shields.io/badge/Coverage-99.87%25-brightgreen)

## Live Demo

🚀 **[View Live Demo](https://danieltofan.github.io/patient-medical-records-vue/)**

## Features

### Patient Dashboard
- **Patient Directory** - Searchable list with risk-level filtering
- **Quick Stats** - Overview of total patients, high-risk cases, pending labs
- **Risk Assessment** - Color-coded risk levels (Low/Medium/High)

### Patient Profile
- **Demographics** - Complete patient information with contact and insurance details
- **Conditions & Allergies** - Visual badges for quick reference
- **Current Medications** - Dosage, frequency, and purpose

### Medical Timeline
- **Chronological History** - All visits, labs, procedures, and specialist consults
- **Category Filtering** - Color-coded by specialty (cardiology, neurology, etc.)
- **Doctor Attribution** - Full provider information for each event

### Health Metrics
- **Vitals Trend Charts** - Blood pressure, heart rate, and weight over time
- **Interactive Visualization** - Switch between metrics with Chart.js
- **Current vs Historical** - Compare present values to trends

### AI Insights Panel
- **Risk Score** - Calculated health risk with progress visualization
- **Risk Factors** - Contributing conditions and demographics
- **Smart Recommendations** - AI-generated health insights
- **Alerts** - Important notifications for care team

### Lab Results
- **Comprehensive Table** - All test results with reference ranges
- **Status Indicators** - Normal, borderline, and elevated flags
- **Date Tracking** - Historical lab history

## Tech Stack

- **Framework:** Vue 3 with Composition API (`<script setup>`)
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3.4
- **Routing:** Vue Router 4
- **Charts:** Chart.js + vue-chartjs
- **Testing:** Vitest + Vue Test Utils
- **Deployment:** GitHub Pages

## Project Structure

```
src/
├── assets/
│   └── main.css          # Tailwind + custom styles
├── components/
│   ├── AIInsights.vue    # Risk score and AI recommendations
│   ├── AppHeader.vue     # Navigation header
│   ├── LabResults.vue    # Lab results table
│   ├── MedicalTimeline.vue  # Medical history timeline
│   ├── PatientCard.vue   # Patient list card
│   ├── PatientHeader.vue # Patient detail header
│   ├── StatsOverview.vue # Dashboard stats
│   └── VitalsChart.vue   # Vitals trend chart
├── data/
│   └── patients.js       # Mock patient data (5 patients)
├── router/
│   └── index.js          # Vue Router config
├── views/
│   ├── Dashboard.vue     # Patient list view
│   └── PatientDetail.vue # Individual patient view
├── App.vue
└── main.js
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/danieltofan/patient-medical-records-vue.git
cd patient-medical-records-vue

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

## Testing

The project includes comprehensive unit tests for all components and utilities:

```bash
# Run tests
npm run test

# Run with coverage
npm run test:coverage
```

**Current coverage: 99.87%**

| Category | Statements | Branches | Functions |
|----------|------------|----------|-----------|
| Components | 100% | 97.76% | 100% |
| Views | 99.77% | 96.07% | 100% |
| Data | 99.55% | 95.74% | 100% |
| Router | 100% | 100% | 100% |

## Sample Data

The demo includes 5 diverse patient profiles:

| Patient | Age | Conditions | Risk Level |
|---------|-----|------------|------------|
| Sarah Chen | 39 | Type 2 Diabetes, Hypertension | Medium |
| James Wilson | 66 | AFib, CAD, GERD | High |
| Maria Rodriguez | 32 | Anxiety, Migraine | Low |
| Robert Thompson | 48 | Hypertension, Gout | Medium |
| Eleanor Davis | 79 | MCI, HTN, Glaucoma, Osteoporosis | High |

Each patient includes:
- 6+ months of vitals history
- 5+ lab results
- 6+ timeline events
- AI-generated insights

## Architecture Decisions

1. **Vue 3 Composition API** - Modern, type-friendly API with better code organization
2. **Static Mock Data** - No backend needed, fully functional demo
3. **Tailwind CSS** - Utility-first styling for rapid development
4. **Component-based** - Reusable, testable components
5. **Client-side routing** - SPA experience with Vue Router

## License

MIT License - feel free to use this code for your own projects.

## Author

**Daniel Tofan**
- GitHub: [@danieltofan](https://github.com/danieltofan)
- LinkedIn: [Daniel Tofan](https://linkedin.com/in/danieltofan)
- Portfolio: [danieltofan.ai](https://danieltofan.ai)

---

*This project demonstrates modern Vue.js development practices including component architecture, state management, responsive design, and comprehensive testing.*
