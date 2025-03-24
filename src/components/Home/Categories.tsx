import Link from 'next/link'
import React from 'react'

export default function Categories() {
    return (
        <section className="bg-muted py-12 md:py-16">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-8">Explore Categories</h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {[
                        "Design",
                        "Development",
                        "Productivity",
                        "Career",
                        "Technology",
                        "Tutorials",
                        "Resources",
                        "Inspiration",
                    ].map((category) => (
                        <Link
                            key={category}
                            href={`/category/${category.toLowerCase()}`}
                            className="bg-background rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="font-medium">{category}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
