import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop",
});
