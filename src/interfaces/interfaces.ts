export type Category = 'Design' | 'Development' | 'Productivity' | 'Career' | 'Technology' | 'Tutorials' | 'Resources' | 'Inspiration'

export interface Article {
    name: string;
    description: string;
    date: string;
    author: string;
    image: string;
    id: number;
    category: Category;
}