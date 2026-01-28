import { cookies } from "next/headers";

export async function getServerSession() {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/session`,
    {
      headers: {
        cookie: cookieHeader,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Not authenticated");
  }

  return res.json();
}
