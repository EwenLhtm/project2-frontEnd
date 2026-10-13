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

export type User = {
    created_at: string;
    email: string;
    id: number;
    name: string;
    updated_at: string;
};