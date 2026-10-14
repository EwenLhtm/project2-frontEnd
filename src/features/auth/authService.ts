import type { RegisterData, RegisterResponse, LoginData, LoginResponse, User } from './auth.types';

const API_URL = import.meta.env.VITE_API_URL as string;

export async function register(
    data: RegisterData
): Promise<RegisterResponse> {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);

        throw new Error(errorData?.message || 'Failed to register user');
    }

    const userData = await response.json() as RegisterResponse;
    return userData;
}

export async function login(
    data: LoginData
): Promise<LoginResponse> {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);

        throw new Error(errorData?.message || 'Failed to log in user');
    }

    const loginData = await response.json() as LoginResponse;
    return loginData;
}

export async function getCurrentUser(): Promise<User> {
    const response = await fetch(`${API_URL}/user`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);

        throw new Error(errorData?.message || 'Failed to get current user');
    }

    const user = await response.json() as User;
    return user;
}