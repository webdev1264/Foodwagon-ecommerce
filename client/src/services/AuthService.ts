import { AxiosResponse } from "axios";
import { api } from "../http";
import AuthResponse from "../types/response/AuthResponse";



class AuthService {
  async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    const response = api.post("/login", { email, password });
    return response;
  }
}

export default new AuthService();
