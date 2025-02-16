import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { UserModel } from "../models/UserModel";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const transformUserData = (data) => {
  return data.map(
    (user) =>
      new UserModel(
        user.id,
        user.name,
        user.username,
        user.email,
        user.address?.street || "N/A",
        user.address?.city || "N/A",
        user.address?.zipcode || "N/A",
        user.address?.geo?.lat || "0",
        user.address?.geo?.lng || "0"
      )
  );
};

const UserViewModel = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(transformUserData(response.data));
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, loading };
};

export default UserViewModel;
