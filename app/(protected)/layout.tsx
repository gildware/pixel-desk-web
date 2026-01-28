import { redirect } from "next/navigation";
import { getServerSession } from "@/src/services/auth.server";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    await getServerSession();
  } catch {
    redirect("/login");
  }

  return <>{children}</>;
}
