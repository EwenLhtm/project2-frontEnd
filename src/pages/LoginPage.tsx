import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../features/auth/authService";
import { type LoginResponse } from "../features/auth/auth.types";

import AuthLayout from "../components/auth/AuthLayout";
import AuthHeader from "../components/auth/AuthHeader";
import AuthInput from "../components/auth/AuthInput";
import AuthPassword from "../components/auth/AuthPassword";
import AuthButton from "../components/auth/AuthButton";
import AuthFooter from "../components/auth/AuthFooter";
import Checkbox from "../components/common/Checkbox";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const userData: LoginResponse = await login({
        email,
        password
      });

      const token = userData.token;
      localStorage.setItem("token", token);

      setSuccess("Logged in successfully!");
      navigate("/dashboard");
    } catch (error: any) {
      setError(error.message || "Failed to log in user");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout>
      <AuthHeader
        logo="R"
        title="Log in to your account"
        description="Enter your email and password below to log in"
      />

      <form onSubmit={handleSubmit} className="mt-5 w-full">
        <AuthInput
          id="email"
          label="Email address"
          type="email"
          placeholder="email@example.com"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between gap-3">
            <label
              htmlFor="password"
              className="text-xs font-semibold"
            >
              Password
            </label>

            <a
              href="/forgot-password"
              className="text-xs font-semibold underline underline-offset-4"
            >
              Forgot your password?
            </a>
          </div>

          <AuthPassword
            id="password"
            label=""
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="mt-5">
          <Checkbox
            id="rememberMe"
            label="Remember me"
            checked={rememberMe}
            onChange={setRememberMe}
          />
        </div>

        {error && (<p className="mt-5 text-sm text-red-500">{error}</p>)}
        {success && (<p className="mt-5 text-sm text-green-500">{success}</p>)}

        <div className="mt-5">
          <AuthButton>{loading ? "Connexion en cours..." : "Log in"}</AuthButton>
        </div>
      </form>

      <AuthFooter
        text="Don't have an account?"
        linkText="Sign up"
        href="/register"
      />
    </AuthLayout>
  );
}
