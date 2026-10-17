# SPLITTER ( Tip Calculator App )

A modern, responsive, and interactive tip and bill-splitting calculator built with **React** and **Vite**. This application simplifies group dining and bill management by accurately computing individual tip amounts and total payments in real-time.

---

## Overview

The **SPLITTER Tip Calculator** is designed to provide a fast and intuitive experience for calculating tips and splitting restaurant or service bills among friends, colleagues, or family members. As inputs are entered, all calculations update immediately with zero delay.

---

## Features

- **Bill Input**: Enter the total bill amount with decimal precision support.
- **Flexible Tip Selection**:
  - **Quick Presets**: Select from common tip rates (**5%**, **10%**, **15%**, **25%**, **50%**).
  - **Custom Percentage**: Enter any custom percentage value directly in the "Altul" (Custom) field.
- **Bill Splitting**: Split the total cost evenly among any number of people.
- **Real-time Validation & Error Handling**:
  - Prevents division by zero.
  - Displays a visual alert (`Nu poate fi 0`) and highlights input borders when the number of people is invalid.
- **Instant Results Display**:
  - **Tip Amount / person**: Individual tip share.
  - **Total / person**: Total payable amount per individual (bill share + tip share).
  - Values are automatically formatted to two decimal places (`$0.00`).
- **Smart Reset Action**:
  - Easily reset all fields to their default state with one click.
  - The reset button dynamically disables itself when the form is in its initial state.
- **Fully Responsive Design**:
  - Mobile-first approach using CSS Grid and Flexbox.
  - Adapts smoothly from mobile screens to desktop split-card layouts.

---

## Built With

- **[React 19](https://react.dev/)** – Component-based UI with React functional components and hooks (`useState`).
- **[Vite 8](https://vite.dev/)** – Next-generation fast frontend tooling and dev server with Hot Module Replacement (HMR).
- **CSS3** – Custom styling utilizing CSS custom properties (variables), Flexbox, CSS Grid, and media queries.
- **Google Fonts / Monospace typography** – Styled with a clean 'Space Mono' aesthetic.

---

## Project Structure

```plaintext
react-vite-tip-calculator/
├── public/                 # Static assets (favicons, SVG icons)
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/             # Images and logos
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── App.css             # Main application styling and themes
│   ├── App.jsx             # Core calculator component and logic
│   ├── index.css           # Global typography and base styles
│   └── main.jsx            # React root mount point
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML entry point
├── package.json            # Dependencies and npm scripts
└── vite.config.js          # Vite configuration and deployment base path
```

---

## How It Works (Application Logic)

The application leverages React's `useState` hook to maintain the component state:

| State Variable | Type | Description |
|---|---|---|
| `bill` | `string` | The user-entered total bill amount. |
| `tipPercentage` | `number` | The currently selected preset tip rate (defaults to 15%). |
| `customTip` | `string` | Custom tip percentage entered by the user. |
| `people` | `number \| string` | The number of people sharing the bill (defaults to 1). |

### Calculation Formulas:

1. **Active Tip**:
   $$\text{activeTip} = \text{customTip} \neq \text{""} \; ? \; \text{Number(customTip)} : \text{Number(tipPercentage)}$$

2. **Total Tip Amount**:
   $$\text{tipAmountTotal} = \frac{\text{bill} \times \text{activeTip}}{100}$$

3. **Tip per Person**:
   $$\text{tipPerPerson} = \frac{\text{tipAmountTotal}}{\text{people}}$$

4. **Total per Person**:
   $$\text{totalPerPerson} = \frac{\text{bill} + \text{tipAmountTotal}}{\text{people}}$$

All calculations are derived directly during render to ensure high performance and consistency without extra side effects.

---

## Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites

Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed:
```bash
node -v
npm -v
```

### Installation

1. **Clone the repository**:
   ```bash
   git clone git@github.com:thinkphp/react-vite-tip-calculator.git
   cd react-vite-tip-calculator
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## Available Scripts

In the project directory, you can run:

- `npm run dev` – Starts the local Vite development server with HMR.
- `npm run build` – Compiles and bundles production-ready assets into the `dist/` directory.
- `npm run preview` – Locally previews the production build.
- `npm run lint` – Runs ESLint to check for code quality and syntax issues.
- `npm run deploy` – Builds the project and deploys the `dist` folder to GitHub Pages via `gh-pages`.

---

## Deployment

The project is configured for deployment to GitHub Pages via the `gh-pages` branch. The base URL in [vite.config.js](file:///home/ironman/Desktop/BiancaCS/Unit7/React/react-vite-tip-calculator/vite.config.js) is set to:

```js
base: '/react-vite-tip-calculator/'
```

To deploy updates, run:
```bash
npm run deploy
```

---
