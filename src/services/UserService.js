import axios from "axios";

const API_URL = "http://localhost:8000/api/users";

// LOGIN USER
export const loginUser = async (userData) => {
  const response = await axios.post(
    `${API_URL}/login`,
    userData
  );

  return response.data;
};

// REGISTER USER
export const registerUser = async (userData) => {
  const response = await axios.post(
    `${API_URL}/register`,
    userData
  );

  return response.data;
};

// GET ALL USERS
export const getUsers = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// GET SINGLE USER
export const getUserById = async (id) => {
  const response = await axios.get(
    `${API_URL}/${id}`
  );

  return response.data;
};

// UPDATE USER
export const updateUser = async (id, userData) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    userData
  );

  return response.data;
};

// DELETE USER
export const deleteUser = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`
  );

  return response.data;
};