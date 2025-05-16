'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    // POST to signup API
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name }),
    });
    if (res.ok) {
      // Auto-login after signup
      const signInRes = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl: "/dashboard",
      });
      if (signInRes?.ok) {
        router.push("/dashboard");
        return;
      }
    } else {
      const data = await res.json();
      setError(data.error || "Failed to register");
    }
    setLoading(false);
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-primary to-secondary py-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg px-8 py-10 flex flex-col gap-6 border">
        <h2 className="text-2xl font-bold text-primary mb-2 text-center">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
            autoFocus
            required
          />
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
            minLength={6}
            required
          />
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </Button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?
          <a href="/login" className="text-primary underline ml-1">Login</a>
        </p>
      </div>
    </div>
  );
}
