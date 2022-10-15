import axios from "axios";
import "dotenv/config";
import { trycatch } from "./trycatch";

export default async function fetchUser(socket: any) {
  const { id } = socket.auth;
  const usersUrl = process.env.DREAMER_CODES_AUTH_SERVICE__BASE_URL;
  const [user, userError] = await trycatch(
    axios.get(`${usersUrl}/users/${id}`)
  );
  if (user) {
    return user;
  }
  console.error(userError);
  return null;
}
