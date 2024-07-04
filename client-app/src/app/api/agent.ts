import axios, { AxiosError, AxiosResponse } from "axios";
import { Activity } from "../models/activity";
import { toast } from "react-toastify";
import { router } from "../router/Routes";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

axios.interceptors.response.use(
  async (response) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return response;
  },
  (error: AxiosError) => {
    const { data, status, config } = error.response as AxiosResponse;
    switch (status) {
      case 400:
        if (
          config.method === "get" &&
          Object.prototype.hasOwnProperty.call(data.errors, "id")
        ) {
          router.navigate("/not-found");
        }
        if (data.errors) {
          const modalStateErrors = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modalStateErrors.push(data.errors[key]);
            }
          }
          throw modalStateErrors.flat();
        } else {
          toast.error(data);
        }
        break;
      case 401:
        toast.error("Unauthorized");
        break;
      case 403:
        toast.error("Forbidden");
        break;
      case 404:
        router.navigate("/not-found");
        break;
      case 500:
        toast.error("Internal Server Error");
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

const requests = {
  get: async <T>(url: string) => {
    const response = await axios.get<T>(url);
    return responseBody(response);
  },
  post: async <T>(url: string, body: object) => {
    const response = await axios.post<T>(url, body);
    return responseBody(response);
  },
  put: async <T>(url: string, body: object) => {
    const response = await axios.put<T>(url, body);
    return responseBody(response);
  },
  delete: async <T>(url: string) => {
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
