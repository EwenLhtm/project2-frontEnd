import { useState } from "react";

import AuthLayout from "../components/auth/AuthLayout";
import AuthHeader from "../components/auth/AuthHeader";
import AuthInput from "../components/auth/AuthInput";
import AuthPassword from "../components/auth/AuthPassword";
import AuthButton from "../components/auth/AuthButton";
import AuthFooter from "../components/auth/AuthFooter";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
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

                <div className="mt-5">
                    <AuthButton>Create Account</AuthButton>
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