# Mausam Frontend

A responsive React web frontend for the personalized **Mausam** weather application.

## Run

```bash
npm install
npm run dev
```

Then open the Vite URL shown in the terminal.

## Libraries

- React
- React Router
- Framer Motion
- Lucide React
- Recharts

## Structure

- `screens/Home` - homepage
- `components/common` - reusable UI
- `components/header` - header/search/location
- `components/summary` - current weather and forecast
- `components/widgets` - 8 personalized user-segment widgets
- `components/charts` - weather charts
- `components/modals` - personalization and alert modals
- `layouts` - responsive layouts
- `services` - API-ready weather service layer
- `context` - shared weather state
- `utils` - reusable JS logic
- `constants` - mock data/config
- `assets/icons` - reserved for future SVG icons

## Real API

Replace the mock functions in:

`src/services/weatherApi.js`

with your backend/API requests. The UI components can remain unchanged if the returned data shape stays compatible.
