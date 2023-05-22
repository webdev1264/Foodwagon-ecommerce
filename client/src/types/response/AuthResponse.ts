import { UserInterface } from "../interfaces";

export default interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: UserInterface;
}
