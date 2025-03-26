import { Link, Calendar } from 'lucide-react'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'

export default function RelatedArticles() {
    return (
        <section className="py-12 bg-muted/30">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight mb-8">Related Articles</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: "Typography Trends That Will Dominate in 2025",
                            image:
                                "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                            description:
                                "Discover the typography trends that are shaping the digital landscape and how to implement them in your designs.",
                            date: "March 18, 2025",
                        },
                        {
                            title: "The Role of Animation in User Experience",
                            image:
                                "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                            description:
                                "Learn how thoughtful animation can enhance user experience and guide users through your digital products.",
                            date: "March 12, 2025",
                        },
                        {
                            title: "Designing for Accessibility: A Practical Guide",
                            image:
                                "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                            description:
                                "Explore practical strategies for creating inclusive designs that work for everyone, regardless of ability.",
                            date: "March 5, 2025",
                        },
                    ].map((post, index) => (
                        <Card key={index} className="overflow-hidden">
                            <div className="aspect-video w-full overflow-hidden">
                                <img
                                    src={post.image || "/placeholder.svg"}
                                    alt={`Blog post ${index + 1}`}
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-full transition-transform hover:scale-105"
                                />
                            </div>
                            <CardContent className="p-4">
                                <Badge variant="outline" className="mb-2">
                                    Design
                                </Badge>
                                <h3 className="font-medium mb-2 line-clamp-2">
                                    <Link href="#">{post.title}</Link>
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{post.description}</p>
                                <div className="flex items-center text-xs text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
