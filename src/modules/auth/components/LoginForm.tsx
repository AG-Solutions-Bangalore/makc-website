import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { Loader2, X, Lock, Mail } from "lucide-react";

interface LoginFormProps {
  onSuccess: () => void;
  onToggleForm: () => void;
  onClose: () => void;
}

export function LoginForm({ onSuccess, onToggleForm, onClose }: LoginFormProps) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email");
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      onSuccess();
    } catch (err) {
      setError("Failed to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-medium-border bg-medium-surface p-6 shadow-2xl backdrop-blur-xl sm:p-10">
      {/* Background radial highlight */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-ma-yellow/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-wide text-medium-text-primary">
            SIGN IN TO MAKC
          </h2>
          <p className="mt-1 text-sm text-medium-text-secondary">
            Access your premium smart automation suite.
          </p>
        </div>
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-medium-border text-medium-text-secondary transition-all hover:bg-medium-surface-hover hover:text-medium-text-primary"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {error && (
        <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-500">
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-medium-text-secondary">
            Email Address
          </label>
          <div className="relative mt-1.5 flex items-center">
            <Mail className="absolute left-4 h-5 w-5 text-medium-text-secondary" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. guest@makc.com"
              required
              className="h-12 w-full rounded-full border border-medium-border bg-medium-surface-muted pl-12 pr-4 text-sm text-medium-text-primary placeholder:text-medium-text-secondary transition-all focus:border-medium-border-strong focus:outline-none focus:ring-0 focus-ring"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-medium-text-secondary">
            Password
          </label>
          <div className="relative mt-1.5 flex items-center">
            <Lock className="absolute left-4 h-5 w-5 text-medium-text-secondary" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="h-12 w-full rounded-full border border-medium-border bg-medium-surface-muted pl-12 pr-4 text-sm text-medium-text-primary placeholder:text-medium-text-secondary transition-all focus:border-medium-border-strong focus:outline-none focus:ring-0 focus-ring"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-medium-action font-display text-sm font-bold uppercase tracking-wider text-medium-action-foreground transition-all hover:bg-medium-action-hover disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Authenticating...</span>
            </>
          ) : (
            <span>SIGN IN</span>
          )}
        </button>
      </form>

      {/* Footer toggle */}
      <div className="mt-6 border-t border-medium-border pt-4 text-center">
        <p className="text-sm text-medium-text-secondary">
          Don't have an account?{" "}
          <button
            onClick={onToggleForm}
            className="font-bold text-ma-yellow hover:underline"
          >
            Get started
          </button>
        </p>
      </div>
    </div>
  );
}
