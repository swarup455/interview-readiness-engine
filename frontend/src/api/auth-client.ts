// api/auth.ts

import clientApi from "@/lib/client-api";

export async function logoutUser() {
  try {
    await clientApi.post("/api/auth/logout");
    return true;
  } catch (error) {
    console.error("Logout failed:", error);
    return false;
  }
}

export async function getMe() {
  try {
    const response = await clientApi.get("/api/auth/me");

    return response.data.user;
  } catch (error) {
    console.error("Failed to get current user:", error);
    return null;
  }
}