export interface IWork {
    _id: string;
    name: string;
    description: string;
    imgUrls: string[];
    tags: string[];
    repository: string;
    url?: string;
}
