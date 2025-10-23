"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error || "Login failed");
    } else {
      // Store user info in localStorage
      localStorage.setItem("user", JSON.stringify({ id: data.id, email: data.email }));
      // For now, just redirect to home
      window.location.href = "/";
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email<br />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>Password<br />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </label>
        </div>
        {error && <div>{error}</div>}
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
