import axios from "axios";
import { BACK_URL } from "./constants";

export const api = axios.create({ baseURL: BACK_URL });

/** Запрос части тудушек */
export const fetchTodosPartly = (number: number) => api.get(`/todos?_limit=${number}`);