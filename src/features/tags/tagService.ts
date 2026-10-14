import type { TagResponse, TagData, Tag } from "./tag.type";

const API_URL = import.meta.env.VITE_API_URL as string;

export async function createTag(
    data: TagData
): Promise<TagResponse> {
    const response = await fetch(`${API_URL}/tags`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);

        throw new Error(errorData?.message || 'Failed to create tag');
    }

    const tagData = await response.json() as TagResponse;
    return tagData;
}

export async function getAllTags(): Promise<Tag[]> {
    const response = await fetch(`${API_URL}/tags`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);

        throw new Error(errorData?.message || 'Failed to get all tags');
    }

    const tagsData = await response.json() as TagResponse;
    const tags = tagsData.tags as Tag[];

    return tags;
}