# Stopwatch & Timer App

A small React + Vite application that combines a stopwatch and a countdown timer in one interface.

## Features

- Stopwatch with start, pause, and reset controls
- Timer that accepts a second count, then counts down
- Alert sound when the timer reaches zero
- Light/dark mode toggle for easy viewing
- Built with React and Vite for fast development

## Project Structure

- `src/App.jsx` — main application shell and dark mode toggle
- `src/components/Stopwatch.jsx` — stopwatch UI and logic
- `src/components/Timer.jsx` — timer input, countdown, and audio alert
- `src/components/style.css` — shared styles for cards, buttons, and layout
- `src/assets/beep.mp3` — timer completion sound

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the local development URL shown in the terminal to view the app.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Scripts

- `npm run dev` — start the Vite development server
- `npm run build` — create a production build
- `npm run preview` — preview the built app locally
- `npm run lint` — run ESLint across the project

## Notes

The app is configured as a Vite React project and uses React 19.
