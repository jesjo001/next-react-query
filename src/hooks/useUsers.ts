"use client"
import { useQuery } from "@tanstack/react-query";
import { User } from "../types";

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("/api/users");
  console.log("users response: " + JSON.stringify(response));
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export function useUsers() {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
}
