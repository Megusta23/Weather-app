# Everyday Weather

## Why I built this

I built this project as a learning exercise to explore React, TypeScript, and working with external APIs. The goal was to practice fetching and displaying real-time weather data, rendering forecasts, and integrating mapping tools all as a hands-on learning project to strengthen my full-stack development skills.

## Technologies used

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Axios** - HTTP client for API requests
- **OpenWeatherMap API** - Real-time weather data and forecasts
- **React Leaflet** - Interactive map visualization
- **React Router** - Client-side routing
- **Vercel** - Deployment platform

## Live demo

🌐 [Everyday Weather App](https://weather-app-mu-ten-63.vercel.app/)

## Features

- Current weather display with temperature and conditions
- 5-day weather forecast with dynamic icons
- Interactive map showing weather markers for multiple cities
- Search functionality to look up weather by city/region
- Responsive design with Tailwind CSS
- Real-time data from OpenWeatherMap API

## Quick start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment variables

Create a `.env` file in the root directory:

```
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

Get your free API key from [OpenWeatherMap](https://openweathermap.org/api).

## Notes

- This is a learning project built with Vite + React
- Weather data is fetched in real-time from the OpenWeatherMap API
- Deploy to Vercel by connecting your GitHub repository

## License

MIT
