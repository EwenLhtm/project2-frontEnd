import { type RegisterData, type RegisterResponse, type User } from './auth.types';

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
        body: JSON.stringify(data),
        redirect: 'manual'
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);

        throw new Error(errorData?.message || 'Failed to register user');
    }

    const userData = await response.json() as RegisterResponse;
    return userData;
}