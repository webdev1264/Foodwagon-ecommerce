import { makeAutoObservable } from "mobx";
import { UserInterface } from "../types/interfaces";
import authService from "../services/AuthService";

export default class Store {
  user = {} as UserInterface;
  isAuth = false;
  isLogin = false;
  isLoading = false;
  isEmailReg = false;

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

  setIsEmailReg(bool: boolean) {
    this.isEmailReg = bool;
  }

  async registration(email: string, password: string) {
    try {
      const response = await authService.registration(email, password);
      this.setIsEmailReg(false);
      localStorage.setItem("token", response.data.accessToken);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e);
      this.setIsEmailReg(true);
    }
  }

  async login(email: string, password: string) {
    try {
      const response = await authService.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
      this.setIsAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e);
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
}
