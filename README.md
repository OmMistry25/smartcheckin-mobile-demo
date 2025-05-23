
# SmartCheckIn Mobile Demo

This is a lightweight mobile demo built with **Expo (React Native)** to showcase how businesses or event apps can use **SmartCheckIn** to verify a user's presence at a physical location using geolocation, no manual check-in needed.

---
##  Mobile Demo Video

[Click here to watch the demo video](https://github.com/OmMistry25/smartcheckin-mobile-demo/releases/tag/v1.0.0)

---

## Features

- Automatically fetches user location
- Sends to the SmartCheckIn backend (`/api/checkin`)
- Returns whether the user is **inside** or **outside** a specified event radius
- Built for use by event platforms, attendance systems, and RSVP flows
- Works on **iOS**, **Android**, and **web**

---

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Expo Go app (for mobile testing): [iOS](https://apps.apple.com/us/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)

---

## How to Run Locally

```bash
# Step 1: Install Expo CLI if you haven’t already
npm install -g expo-cli

# Step 2: Install dependencies
npm install

# Step 3: Start the app
npx expo start --tunnel
```

Then:
- Scan the QR code in the terminal/browser with your **Expo Go** app
- Tap “Check In” and wait for the location status

---

## What It Does

On tapping **Check In**, the app:

1. Requests geolocation permission
2. Sends user coordinates along with event coordinates to:

```
POST https://smartcheckin.onrender.com/api/checkin
```

Payload:
```json
{
  "lat": <userLatitude>,
  "lng": <userLongitude>,
  "eventLat": 29.929712,
  "eventLng": -95.708082,
  "radius": 0.5
}
```

Returns:
```json
{
  "result": "inside" | "outside",
  "distance": 0.23
}
```

---

## Developer Notes

- Styling has been optimized for **dark mode** compatibility.
- You can replace `eventLat`/`eventLng` dynamically to test different locations.
- Backend is hosted at: [`https://smartcheckin.onrender.com`](https://smartcheckin.onrender.com)

---

## Use Cases

This demo is a foundation for:
- Event platforms
- Smart RSVP systems
- Office or workspace check-ins
- In-store experience tracking
- Location-aware notifications

---

Made by [mysmartlinq.com](https://mysmartlinq.com)
