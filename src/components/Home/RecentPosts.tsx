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

export default function RecentPosts() {
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
                    {[1, 2, 3].map((post) => (
                        <Card key={post} className="overflow-hidden">
                            <div className="aspect-video w-full overflow-hidden">
                                <Image
                                    src={`/placeholder.svg?height=400&width=600`}
                                    alt={`Blog post ${post}`}
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
                                        <Link href={`/blog/post-${post}`}>
                                            How to Create Stunning Animations with CSS and JavaScript
                                        </Link>
                                    </CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <p className="text-muted-foreground text-sm line-clamp-3">
                                    Learn the fundamentals of creating smooth, engaging animations that enhance user experience
                                    without sacrificing performance.
                                </p>
                            </CardContent>
                            <CardFooter className="p-4 pt-0 flex items-center text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    <span>March 20, 2025</span>
                                </div>
                                <div className="flex items-center gap-1 ml-4">
                                    <User className="h-3 w-3" />
                                    <span>Alex Chen</span>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
