export type RegisterData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export type RegisterResponse = {
    message: string;
    user: User;
};

export type LoginData = {
    email: string;
    password: string;
};

export type LoginResponse = {
    message: string;
    token: string;
}

export type User = {
    created_at: string;
    email: string;
    id: number;
    name: string;
    updated_at: string;
};