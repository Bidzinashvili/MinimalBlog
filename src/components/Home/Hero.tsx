'use client'
import React, { useEffect } from 'react'

import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, User } from 'lucide-react'
import { Button } from '../ui/button'
import { Article } from '@/interfaces/interfaces'
import Link from 'next/link'

type Props = {
    article: Article
}

export default function Hero({ article }: Props) {

    return (
        <section className="py-10 md:py-16">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                        <Badge className="mb-2">Featured</Badge>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            {article.name}
                        </h1>
                        <p className="text-muted-foreground md:text-lg">
                            {article.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{article.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <User className="h-4 w-4" />
                                <span>{article.author}</span>
                            </div>
                        </div>
                        <Link href={`/articles/${article.id}`}>
                            <Button className="mt-2">
                                Read Article <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="aspect-video overflow-hidden rounded-lg">
                        <img
                            src={article.image}
                            alt="Featured blog post"
                            width={1280}
                            height={720}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
