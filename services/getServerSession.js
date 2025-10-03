import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export default async function getSessionToken() {
  const session = await getServerSession(authOptions);
  // const token = session?.user?.token;
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZGEyOTVhMjBiNWViZDQ4NDU0OTEyMSIsInR5cGUiOiJsb2dpbiIsImlhdCI6MTc1OTIxNTg3MiwiZXhwIjoxNzU5MzAyMjcyfQ.k1bTYKVdV8VCRHn6zpIEoerKMm3BKgiq7l6Gj6spQzE`;
  return token;
}
