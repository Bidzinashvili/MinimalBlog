import React from 'react'
import { Badge } from '../ui/badge'

export default function hero() {
    return (
        <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/80 to-muted/20 z-10" />
            <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                    alt="Team working together"
                    className="object-cover"
                />
            </div>
            <div className="absolute inset-0 flex items-center z-20">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <Badge className="mb-4">About Us</Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-sm mb-4">
                            We're Passionate About Sharing Knowledge
                        </h1>
                        <p className="text-lg md:text-xl text-white drop-shadow-sm">
                            MinimalBlog is a platform dedicated to exploring design, development, and digital creativity through a
                            minimalist lens.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
