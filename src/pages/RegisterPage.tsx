import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { type RegisterResponse, type User } from "../features/auth/auth.types";

import AuthLayout from "../components/auth/AuthLayout";
import AuthHeader from "../components/auth/AuthHeader";
import AuthInput from "../components/auth/AuthInput";
import AuthPassword from "../components/auth/AuthPassword";
import AuthButton from "../components/auth/AuthButton";
import AuthFooter from "../components/auth/AuthFooter";

import { register } from "../features/auth/authService";

export default function RegisterPage() {
    const navigate = useNavigate();
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setError("");
        setSuccess("");
        setLoading(true);

        try {
            const userData: RegisterResponse = await register({
                name,
                email,
                password,
                password_confirmation: confirmPassword
            });

            const user: User = userData.user;
            setSuccess(`Compte crée pour ${user.name} !`);
            navigate('/login');
        } catch (error: any) {
            setError(error.message || "Failed to register user");
        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthLayout>
            <AuthHeader
                logo="R"
                title="Create an account"
                description="Enter your details below to create your account"
            />
            <form onSubmit={handleSubmit} className="mt-5 w-full">
                <div className="mt-5">
                    <AuthInput
                        id="name"
                        label="Name"
                        type="text"
                        placeholder="John Doe"
                        autoComplete="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>

                <div className="mt-5">
                    <AuthInput
                        id="email"
                        label="Email address"
                        type="email"
                        placeholder="john.doe@gmail.com"
                        autoComplete="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div className="mt-5">
                    <label
                        htmlFor="password"
                        className="text-xs font-semibold"
                    >
                        Password
                    </label>

                    <AuthPassword
                        id="password"
                        label=""
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />     
                </div>

                <div className="mt-5">
                    <label
                        htmlFor="confirmPassword"
                        className="text-xs font-semibold"
                    >
                        Confirm Password
                    </label>

                    <AuthPassword
                        id="confirmPassword"
                        label=""
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                    />     
                </div>

                {error && (<p className="mt-5 text-sm text-red-500">{error}</p>)}
                {success && (<p className="mt-5 text-sm text-green-500">{success}</p>)}

                <div className="mt-5">
                    <AuthButton>{loading ? "Création en cours..." : "Create Account"}</AuthButton>
                </div>
            </form>

            <AuthFooter
                text="Already have an account?"
                linkText="Log in"
                href="/login"
            />
        </AuthLayout>
    );
}