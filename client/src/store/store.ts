import { makeAutoObservable } from "mobx";
import { UserInterface } from "../types/interfaces";
import authService from "../services/AuthService";
import axios from "axios";

export default class Store {
  user = {} as UserInterface;
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: UserInterface) {
    this.user = user;
  }

  setIsLoading(bool: boolean) {
    this.isAuth = bool;
  }

  async login(email: string, password: string) {
    try {
      const response = await authService.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
      this.setIsAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log(e.response?.data?.message);
      }
    }
  }
}
