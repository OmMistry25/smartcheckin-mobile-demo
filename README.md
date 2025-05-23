# SmartCheckIn Mobile Demo

This is a React Native demo that shows how to integrate the SmartCheckIn SDK into a mobile app using geolocation.

## Features
- Requests user's location on button press
- Sends location to SmartCheckIn backend API
- Displays whether the user is inside or outside the event radius

## Prerequisites
- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

## How to Run

```bash
npm install -g expo-cli
expo init smartcheckin-mobile-demo
# Replace App.js in your project with the one from this repo
expo start
```

## API Endpoint

This demo connects to:
`https://smartcheckin.onrender.com/api/checkin`

Make sure the backend is running or reachable.

## What Gets Sent

```json
{
  "lat": <your latitude>,
  "lng": <your longitude>,
  "eventLat": 29.929712,
  "eventLng": -95.708082,
  "radius": 0.5
}
```

Returns:
```json
{
  "result": "inside" or "outside",
  "distance": 0.23
}
```

Built by [mysmartlinq.com](https://mysmartlinq.com)
