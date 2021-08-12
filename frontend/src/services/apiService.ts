import { IUser } from "../types/users";

export interface IApiService {}

export class ApiService implements IApiService {
  private baseURL = "http://localhost:4000/api";
  constructor() {}

  getUsers<T>(): Promise<T> {
    return fetch(`${this.baseURL}/users.json`).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  getDevices<T>(): Promise<T> {
    return fetch(`${this.baseURL}/devices.json`).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
}
