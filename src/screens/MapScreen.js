import React, { useEffect, useState, useMemo } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const MapScreen = ({ route }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); // Slightly longer for a smoother transition
  }, []);

  const { user } = route.params;
  const { lat, lng, city, street } = user;

  const initialRegion = useMemo(
    () => ({
      latitude: parseFloat(lat),
      longitude: parseFloat(lng),
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }),
    [lat, lng]
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size="large"
            color="#6200EE"
          />
          <Text style={styles.loadingText}>Loading Map...</Text>
        </View>
      ) : (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={initialRegion}
          customMapStyle={mapDarkStyle} // Custom styling for better UI
        >
          <Marker
            title={city}
            description={street}
            coordinate={{ latitude: parseFloat(lat), longitude: parseFloat(lng) }}
          />
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  map: { flex: 1 },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  loadingText: { marginTop: 10, fontSize: 16, color: "#6200EE", fontWeight: "bold" },
});

const mapDarkStyle = [
  {
    elementType: "geometry",
    stylers: [{ color: "#212121" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#ffffff" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#212121" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#0f252e" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#383838" }],
  },
];

export default MapScreen;
