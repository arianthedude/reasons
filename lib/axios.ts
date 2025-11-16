import axios from "axios";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://reasoncore.arianthedude.ir" // production API
    : "http://localhost:4000";             // development API

export const api = axios.create({
  baseURL: API_URL,
});
