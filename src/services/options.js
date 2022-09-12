import axios from "axios";
import { base_url } from "../constants/data";

const getVoteOptions = async () => {
  try {
    const { data } = await axios.get(base_url + "options");
    return data;
  } catch (error) {
    return Promise.reject(error)
  }
};

export { getVoteOptions };
