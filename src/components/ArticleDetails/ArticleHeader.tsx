import { Badge, Calendar, User, MessageSquare } from 'lucide-react'
import React from 'react'

export default function ArticleHeader() {
    return (
        <section className="py-6 md:py-10">
            <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-4">
                    <Badge>Design</Badge>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        The Art of Minimalist Design in Modern Web Development
                    </h1>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>March 24, 2025</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>Sarah Johnson</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            <span>24 comments</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span>8 min read</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
