"use client";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <main>
      <button
        onClick={() => {
          signOut();
        }}
        className="text-xl p-3 bg-danger text-white m-10 hover:opacity-80 transition"
      >
        Logout
      </button>
    </main>
  );
}
