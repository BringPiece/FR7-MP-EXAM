import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const UserCard = ({ user, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}>
      <LinearGradient
        colors={["#6A11CB", "#2575FC"]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <Image
          source={{ uri: `https://picsum.photos/100?random=${user.id}` }}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.username}>@{user.username}</Text>
          <Text style={styles.email}>{user.email}</Text>
          <Text style={styles.address}>
            {user.street}, {user.city}, {user.zipcode}
          </Text>
          <Text style={styles.coordinates}>
            🌍 {user.lat}, {user.lng}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  gradient: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#fff",
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
  username: {
    fontSize: 14,
    color: "#dfe6e9",
  },
  email: {
    fontSize: 14,
    color: "#ecf0f1",
    marginTop: 2,
  },
  address: {
    fontSize: 12,
    color: "#dfe6e9",
    marginTop: 4,
  },
  coordinates: {
    fontSize: 12,
    color: "#b2bec3",
    marginTop: 4,
  },
});

export default UserCard;
