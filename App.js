import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [status, setStatus] = useState("Waiting for location...");

  const checkIn = async () => {
    let { status: permission } = await Location.requestForegroundPermissionsAsync();
    if (permission !== 'granted') {
      Alert.alert("Permission denied", "Location access is required for check-in.");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    const response = await fetch("https://smartcheckin.onrender.com/api/checkin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lat: latitude,
        lng: longitude,
        eventLat: 29.929712,
        eventLng: -95.708082,
        radius: 0.5
      })
    });

    const data = await response.json();
    setStatus(
      `You are ${data.result === "inside" ? "✅ inside" : "❌ outside"} the event area.\nDistance: ${data.distance.toFixed(2)} miles`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{status}</Text>
      <Button title="Check In" onPress={checkIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20
  },
  text: {
    fontSize: 16, marginBottom: 20, textAlign: 'center'
  }
});