"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error{error.message}</p>;
  if (user)
    return (
      <div className="w-[100vw] h-[100vh] bg-white flex justify-center items-center flex-col gap-4">
        <p className="text-2xl font-sans"> Hello {user.name}</p>
        <a href="/api/auth/logout">Log out</a>
      </div>
    );

  return (
    <div className="w-[100vw] h-[100vh] bg-white flex justify-center items-center">
      <div className="flex flex-col">
        <a href="/api/auth/login">Нэвтрэх</a>
      </div>
    </div>
  );
}
