import api from "../api/axiosConfig";

export const register = (data) =>
  api.post("/auth/register", data);

export const login = async (data) => {

  const response =
    await api.post("/auth/login", data);

  localStorage.setItem(
    "token",
    response.data.token
  );

  return response.data;
};