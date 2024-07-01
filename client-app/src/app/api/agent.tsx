/* eslint-disable react-refresh/only-export-components */
import axios, { AxiosResponse } from "axios";
import { Activity } from "../models/activity";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = <T,>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: async <T,>(url: string) => {
    const response = await axios.get<T>(url);
    return responseBody(response);
  },
  post: async <T,>(url: string, body: object) => {
    const response = await axios.post<T>(url, body);
    return responseBody(response);
  },
  put: async <T,>(url: string, body: object) => {
    const response = await axios.put<T>(url, body);
    return responseBody(response);
  },
  delete: async <T,>(url: string) => {
    const response = await axios.delete<T>(url);
    return responseBody(response);
  },
};

const Activities = {
  list: () => requests.get<Activity[]>("/activities"),
  details: (id: string) => requests.get<Activity>(`/activities/${id}`),
  create: (activity: Activity) => requests.post<void>("/activities", activity),
  update: (activity: Activity) =>
    requests.put<void>(`/activities/${activity.id}`, activity),
  delete: (id: string) => requests.delete<void>(`/activities/${id}`),
};

const agent = {
  Activities,
};

export default agent;
