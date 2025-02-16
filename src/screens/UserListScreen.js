import React from "react";
import { FlatList, View, StyleSheet, ActivityIndicator, Text } from "react-native";
import UserCard from "../components/UserCard";
import UserViewModel from "../viewmodels/UserViewModel";

const UserListScreen = ({ navigation }) => {
  const { users, loading } = UserViewModel();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size="large"
          color="#6A11CB"
        />
        <Text style={styles.loadingText}>Loading Users...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <UserCard
            user={item}
            onPress={() => {
              console.log("Navigating to Map with user:", item);
              navigation.navigate("Map", { user: item });
            }}
          />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDE7F6", // Light Purple Background
  },
  list: {
    paddingVertical: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EDE7F6",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#6A11CB",
  },
});

export default UserListScreen;
