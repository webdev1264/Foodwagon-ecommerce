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

  async restore(email: string): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>("/password-forgot", { email });
  }

  async passReset(
    userId: string,
    password: string,
    resetToken: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>("/password-reset", {
      userId,
      password,
      resetToken,
    });
  }
}

export default new AuthService();
