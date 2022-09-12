import axios from "axios";
import { base_url } from "../constants/data";

const login = async (cuit, password) => {
  try {
    const { data } = await axios.post(base_url + "login", {
      cuit: parseInt(cuit),
      password: password,
    });
    return data;
  } catch (error) {
    return Promise.reject(error)
  }
};

const logout = () => {};

export { login, logout };
