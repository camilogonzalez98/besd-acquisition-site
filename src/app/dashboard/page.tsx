import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    redirect("/login");
  }
  return (
    <div className="flex flex-col min-h-screen items-center justify-center py-10 bg-gradient-to-br from-primary to-secondary">
      <div className="bg-white rounded-lg shadow-lg px-8 py-10 max-w-md w-full flex flex-col items-center gap-4 border">
        <h1 className="text-3xl font-bold text-primary mb-2 text-center">Welcome to your Dashboard</h1>
        <p className="text-lg font-medium text-center">Hello, <span className="font-semibold">{session.user.name || session.user.email}</span></p>
        <p className="text-center text-gray-600 text-sm">This is your private area as a registered user.</p>
        <form action="/api/auth/signout" method="POST">
          <Button type="submit" className="mt-4 w-full">Log out</Button>
        </form>
        <Link href="/" className="text-blue-600 mt-2 underline">&larr; Back to Home</Link>
      </div>
    </div>
  );
}
