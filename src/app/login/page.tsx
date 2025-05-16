'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const params = useSearchParams();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/dashboard",
    });
    if (result?.error) {
      setError(result.error);
    } else if (result?.ok) {
      router.push("/dashboard");
    }
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-primary to-secondary py-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg px-8 py-10 flex flex-col gap-6 border">
        <h2 className="text-2xl font-bold text-primary mb-2 text-center">Login to Your Account</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          <Button type="submit" className="w-full">Login</Button>
        </form>
        <Button
          variant="outline"
          className="w-full mt-2 flex items-center justify-center gap-2"
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        >
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M44.5 20H24V28.5H35.7C34.25 33.55 29.55 36.5 24 36.5C16.55 36.5 10.5 30.45 10.5 23C10.5 15.55 16.55 9.5 24 9.5C27.2 9.5 30.1 10.7 32.35 12.65L37.3 7.7C33.45 4.25 28.13 2 24 2C12.4 2 3 11.4 3 23C3 34.6 12.4 44 24 44C35.6 44 45 34.6 45 23C45 21.7 44.86 20.83 44.5 20Z" fill="#FFC107"/><path d="M6.30664 14.691L12.8776 19.357C14.5036 15.963 18.8376 13.5 24.0006 13.5C26.6866 13.5 29.1396 14.484 31.0256 16.276L37.1966 10.869C33.9886 7.936 29.3426 6 24.0006 6C15.9926 6 9.06064 11.249 6.30664 14.691Z" fill="#FF3D00"/><path d="M24.0006 42C29.2516 42 33.8416 39.925 37.0866 36.679L31.0296 32.049C29.1946 33.552 26.8396 34.5 24.0006 34.5C18.8166 34.5 14.4716 31.092 12.8686 27.715L6.25864 32.551C8.98464 36.128 15.7596 42 24.0006 42Z" fill="#4CAF50"/><path d="M44.5 20H42V20.5H24V28.5H35.7C35.032 30.834 33.617 32.847 31.584 34.184L37.086 38.954C35.058 40.817 29.902 43.5 24 43.5C15.42 43.5 8.319 37.054 6.258 32.551L12.868 27.715C14.48 31.11 18.814 34.5 24 34.5C26.839 34.5 29.194 33.553 31.029 32.05L37.086 36.68C33.842 39.924 29.253 42 24 42Z" fill="#1976D2"/></svg>
          Continue with Google
        </Button>
        <p className="text-center text-sm mt-4">
          New here? <a href="/signup" className="text-primary underline ml-1">Create an account</a>
        </p>
      </div>
    </div>
  );
}
