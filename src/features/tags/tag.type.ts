export type TagData = {
    name: string;
}

export type TagResponse = {
    message: string;
    tags: Tag | Tag[];
}

export type Tag = {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}