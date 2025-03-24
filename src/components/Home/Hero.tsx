import React from 'react'

import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, MessageSquare, User } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'


export default function Hero() {
    return (
        <section className="py-10 md:py-16">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                        <Badge className="mb-2">Featured</Badge>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            The Art of Minimalist Design in Modern Web Development
                        </h1>
                        <p className="text-muted-foreground md:text-lg">
                            Discover how embracing minimalism can lead to more effective and user-friendly web experiences.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                        </div>
                        <Button className="mt-2">
                            Read Article <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                    <div className="aspect-video overflow-hidden rounded-lg">
                        <Image
                            src="/placeholder.svg?height=720&width=1280"
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
