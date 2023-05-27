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
  respError = "";
  // isRegSuccess = false;
  // isEmailSent = false;
  isSuccess = false;

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

  setRespError(message: string) {
    this.respError = message;
  }

  // setIsRegSuccess(bool: boolean) {
  //   this.isRegSuccess = bool;
  // }

  // setIsEmailSent(bool: boolean) {
  //   this.isEmailSent = bool;
  // }

  setIsSuccess(bool: boolean) {
    this.isSuccess = bool;
  }

  async registration(email: string, password: string) {
    try {
      const response = await authService.registration(email, password);
      this.setRespError("");
      this.setIsSuccess(true);
      this.setIsLogin(!this.isLogin);
      localStorage.setItem("token", response.data.accessToken);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e);
      if (axios.isAxiosError(e)) {
        this.setRespError(e.response?.data.message);
      }
    }
  }

  async login(email: string, password: string) {
    try {
      const response = await authService.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
      this.setIsAuth(true);
      this.setIsLogin(false);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e);
      if (axios.isAxiosError(e)) {
        this.setRespError(e.response?.data.message);
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
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      this.setIsAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e);
    } finally {
      this.setIsLoading(false);
    }
  }

  async restore(email: string) {
    try {
      const response = await authService.restore(email);
      console.log(response);
    } catch (e) {
      console.log(e);
      if (axios.isAxiosError(e)) {
        this.setRespError(e.response?.data.message);
      }
    }
  }

  async passReset(userId: string, password: string, resetToken: string) {
    try {
      const response = await authService.passReset(
        userId,
        password,
        resetToken
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
}
