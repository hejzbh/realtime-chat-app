"use client";
import React, { useEffect, useState } from "react";
import Title from "@/components/ui/Title";
import Search from "@/components/ui/Search";
import { User } from "@prisma/client";
import { useAuth } from "@/features/auth/hooks/use-auth";
import axios from "axios";
import UserCard from "@/features/users/components/UserCard";
import { useNotifications } from "@/hooks/use-notifications";

const UsersModal = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { user } = useAuth();
  const [q, setQ] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { showNotification } = useNotifications();

  useEffect(() => {
    getUsers({ searchQuery: q });
  }, [q]);

  async function getUsers(params?: { searchQuery: string }) {
    try {
      setLoading(true);

      const response = await axios.get(`/api/users`, {
        params,
      });

      if (!response?.data) throw new Error("Something went wrong");

      setUsers(response?.data);
    } catch (err: any) {
      console.error(err);
      showNotification({
        title: "Search Users",
        message: err?.message,
        variant: "error",
      });
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Title variant="h3" textSize="lg">
        Users
      </Title>
      <Search disabled={loading} onChange={setQ} className="py-3" />

      <ul className="space-y-3">
        {users?.map((user) => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersModal;
