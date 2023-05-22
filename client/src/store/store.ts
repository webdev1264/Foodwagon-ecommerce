import { makeAutoObservable } from "mobx";
import { UserInterface } from "../types/interfaces";
import authService from "../services/AuthService";
import axios from "axios";
import { API_URL } from "../http";

export default class Store {
  user = {} as UserInterface;
  isAuth = false;
  isLogin = false;
  isLoading = false;
  regError = "";
  valError = "";
  isRegSuccess = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setIsLogin(bool: boolean) {
    this.isLogin = bool;
  }

  setUser(user: UserInterface) {
    this.user = user;
  }

  setIsLoading(bool: boolean) {
    this.isLoading = bool;
  }

  setRegError(message: string) {
    this.regError = message;
  }

  setValError(message: string) {
    this.valError = message;
  }

  setIsRegSuccess(bool: boolean) {
    this.isRegSuccess = bool;
  }

  async registration(email: string, password: string) {
    try {
      const response = await authService.registration(email, password);
      this.setRegError("");
      this.setIsRegSuccess(true);
      this.setIsLogin(!this.isLogin);
      localStorage.setItem("token", response.data.accessToken);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e);
      if (axios.isAxiosError(e)) {
        this.setRegError(e.response?.data.message);
      }
    }
  }

  async login(email: string, password: string) {
    try {
      const response = await authService.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
      this.setIsAuth(true);
      this.setIsLogin(!this.isLogin);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e);
      if (axios.isAxiosError(e)) {
        this.setValError(e.response?.data.message);
      }
    }
  }

  async logout() {
    try {
      await authService.logout();
      localStorage.removeItem("token");
      this.setIsAuth(false);
      this.setUser({} as UserInterface);
    } catch (e) {
      console.log(e);
    }
  }

  async checkAuth() {
    this.setIsLoading(true);
    try {
      const response = await axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.accessToken);
      this.setIsAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e);
    } finally {
      this.setIsLoading(false);
    }
  }
}
