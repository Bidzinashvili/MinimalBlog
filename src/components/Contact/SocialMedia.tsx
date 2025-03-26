import { Twitter, Facebook, Instagram, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function SocialMedia() {
    return (
        <section className="py-12 bg-muted/30">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-4">Connect With Us</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Follow us on social media to stay updated with the latest articles, events, and behind-the-scenes content.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                    {[
                        { name: "Twitter", icon: Twitter, username: "@minimalblog", link: "https://twitter.com" },
                        { name: "Facebook", icon: Facebook, username: "MinimalBlog", link: "https://facebook.com" },
                        { name: "Instagram", icon: Instagram, username: "@minimal.blog", link: "https://instagram.com" },
                        { name: "LinkedIn", icon: Linkedin, username: "MinimalBlog", link: "https://linkedin.com" },
                        { name: "GitHub", icon: Github, username: "minimalblog", link: "https://github.com" },
                    ].map((platform) => (
                        <Link
                            key={platform.name}
                            href={platform.link}
                            className="flex flex-col items-center p-6 bg-background rounded-lg border hover:shadow-md transition-shadow"
                        >
                            <platform.icon className="h-8 w-8 mb-3 text-primary" />
                            <h3 className="font-medium mb-1">{platform.name}</h3>
                            <p className="text-sm text-muted-foreground">{platform.username}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
