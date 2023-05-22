import { AxiosResponse } from "axios";
import { api } from "../http";
import AuthResponse from "../types/response/AuthResponse";

class AuthService {
  async registration(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>("/registration", { email, password });
  }

  async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>("/login", { email, password });
  }

  async logout(): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>("/logout");
  }
}

export default new AuthService();
