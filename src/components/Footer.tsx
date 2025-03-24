import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Facebook, Github, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">MinimalBlog</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            A modern blog focused on design, development, and digital creativity.
                        </p>
                        <div className="flex gap-4">
                            <Button variant="ghost" size="icon" asChild>
                                <Link href="#">
                                    <Twitter className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link href="#">
                                    <Facebook className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link href="#">
                                    <Instagram className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link href="#">
                                    <Github className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-foreground">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/categories" className="text-muted-foreground hover:text-foreground">
                                    Categories
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/category/design" className="text-muted-foreground hover:text-foreground">
                                    Design
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/development" className="text-muted-foreground hover:text-foreground">
                                    Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/productivity" className="text-muted-foreground hover:text-foreground">
                                    Productivity
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/career" className="text-muted-foreground hover:text-foreground">
                                    Career
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/technology" className="text-muted-foreground hover:text-foreground">
                                    Technology
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} MinimalBlog. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
