import { Badge, Link } from 'lucide-react';
import React from 'react'
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

interface Category {
    name: string;
    image: string;
    postCount: number;
    description: string;
}

interface Props {
    searchQuery: string;
    filteredCategories: Category[];
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>

}

export default function AllCategories({ searchQuery, filteredCategories, setSearchQuery }: Props) {
    return (
        <section className="py-12">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-8">
                    {searchQuery ? `Search Results: ${filteredCategories.length} categories found` : "All Categories"}
                </h2>
                {filteredCategories.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-lg text-muted-foreground">No categories found matching your search.</p>
                        <Button variant="outline" className="mt-4" onClick={() => setSearchQuery("")}>Clear Search</Button>
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredCategories.map((category) => (
                            <Card key={category.name} className="overflow-hidden">
                                <div className="relative h-40 w-full">
                                    <img
                                        src={category.image || "/placeholder.svg"}
                                        alt={category.name}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute top-3 right-3">
                                        <Badge className="bg-background text-foreground">{category.postCount} posts</Badge>
                                    </div>
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{category.description}</p>
                                    <Button asChild variant="outline" size="sm" className="w-full">
                                        <Link href={`/category/${category.name.toLowerCase()}`}>View Category</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
