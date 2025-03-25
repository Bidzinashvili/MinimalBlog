import React from 'react'

import {
    ArrowRight,
    Calendar,
    User,
} from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { Article } from '@/interfaces/interfaces'

interface Props {
    articles: Article[]
}

export default function RecentPosts({ articles }: Props) {
    return (
        <section className="py-12 md:py-16">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Recent Articles</h2>
                    <Link
                        href="/blog"
                        className="text-sm font-medium text-muted-foreground hover:text-primary flex items-center"
                    >
                        View all articles <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {articles.slice(1, 4).map((article) => (
                        <Card key={article.id} className="overflow-hidden">
                            <div className="aspect-video w-full overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={`Blog post ${article.name}`}
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-full transition-transform hover:scale-105"
                                />
                            </div>
                            <CardHeader className="p-4 pb-2">
                                <div className="space-y-2">
                                    <Badge variant="outline" className="mb-2">
                                        Design
                                    </Badge>
                                    <CardTitle className="line-clamp-2">
                                        <Link href={`/articles/${article.id}`}>
                                            {article.name}
                                        </Link>
                                    </CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <p className="text-muted-foreground text-sm line-clamp-3">
                                    {article.description}
                                </p>
                            </CardContent>
                            <CardFooter className="p-4 pt-0 flex items-center text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    <span>{article.date}</span>
                                </div>
                                <div className="flex items-center gap-1 ml-4">
                                    <User className="h-3 w-3" />
                                    <span>{article.author}</span>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
