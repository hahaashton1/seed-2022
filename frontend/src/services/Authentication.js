import axios from "axios";
import { uri } from "../config/config";
import handleResponse from "./handleResponses";

const authenticationUri = `${uri}/login`;

export const authenticate = async (userObject) => {
  try {
    let data = await axios.post(authenticationUri, userObject);
    data = handleResponse(data);
    return data;
  } catch (e) {
    console.error(e);
  }
};
