import React, { useEffect, useState, useMemo } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const MapScreen = ({ route }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800); // Animasi loading lebih smooth
  }, []);

  const { user } = route.params;
  const { lat, lng, city, street } = user;

  const initialRegion = useMemo(
    () => ({
      latitude: parseFloat(lat),
      longitude: parseFloat(lng),
      latitudeDelta: 20, // Zoom optimal agar lebih luas tapi detail
      longitudeDelta: 20,
    }),
    [lat, lng]
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size="large"
            color="#FF9800"
          />
          <Text style={styles.loadingText}>Memuat Peta...</Text>
        </View>
      ) : (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={initialRegion}
          customMapStyle={mapRealisticStyle} // Warna lebih natural & colorful
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
  container: { flex: 1, backgroundColor: "#E3F2FD" }, // Warna latar lebih soft
  map: { flex: 1 },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  loadingText: { marginTop: 10, fontSize: 16, color: "#FF9800", fontWeight: "bold" },
});

// Tema peta lebih realistis & beragam untuk setiap benua
const mapRealisticStyle = [
  {
    featureType: "landscape.natural.landcover",
    elementType: "geometry.fill",
    stylers: [{ color: "#DCE775" }], // Warna hijau lebih alami untuk daratan
  },
  {
    featureType: "landscape.natural.terrain",
    elementType: "geometry.fill",
    stylers: [{ color: "#A5D6A7" }], // Warna lebih soft untuk pegunungan
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [{ color: "#42A5F5" }], // Warna air lebih biru natural
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [{ color: "#F9A825" }], // Jalan lebih kontras dengan warna emas
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [{ color: "#81C784" }], // Warna hijau taman lebih alami
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [{ color: "#8E24AA" }], // Garis batas negara lebih jelas
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [{ color: "#FFEB3B" }], // Jalan tol lebih terlihat
  },
  {
    featureType: "administrative.province",
    elementType: "labels.text.fill",
    stylers: [{ color: "#5E35B1" }], // Nama provinsi lebih readable
  },
];

export default MapScreen;
