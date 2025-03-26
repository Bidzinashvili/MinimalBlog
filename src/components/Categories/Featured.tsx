import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '../ui/badge'

interface Category {
    name: string;
    image: string;
    postCount: number;
    description: string;
}

interface Props {
    searchQuery: string;
    featuredCategories: Category[]
}

export default function Featured({ searchQuery, featuredCategories }: Props) {
    return (
        <>
            {featuredCategories.length > 0 && !searchQuery && (
                <section className="py-12">
                    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-8">Featured Categories</h2>
                        <div className="grid gap-6 md:grid-cols-3">
                            {featuredCategories.map((category) => (
                                <Card key={category.name} className="overflow-hidden">
                                    <div className="relative h-48 w-full">
                                        <img
                                            src={category.image || "/placeholder.svg"}
                                            alt={category.name}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                            <div className="p-4 text-white">
                                                <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                                                <p className="text-sm text-white/80 mb-2">{category.postCount} articles</p>
                                                <Badge className="bg-primary hover:bg-primary/90">{category.postCount} posts</Badge>
                                            </div>
                                        </div>
                                    </div>
                                    <CardContent className="p-4">
                                        <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                                        <Button asChild variant="outline" size="sm" className="w-full">
                                            <Link href={`/category/${category.name.toLowerCase()}`}>
                                                Browse Articles <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}
