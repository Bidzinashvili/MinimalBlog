'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import { Button } from "@/components/ui/button"

import { Search, Menu, X, } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="font-bold text-xl">
                        MinimalBlog
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                        Home
                    </Link>
                    <Link
                        href="/categories"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                        Categories
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="hidden md:flex">
                        <Search className="h-4 w-4" />
                        <span className="sr-only">Search</span>
                    </Button>
                    <Button variant="outline" className="hidden md:flex">
                        Subscribe
                    </Button>
                    <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:hidden py-4 border-t">
                    <nav className="flex flex-col gap-4">
                        <Link href="/" className="text-sm font-medium">
                            Home
                        </Link>
                        <Link href="/categories" className="text-sm font-medium text-muted-foreground">
                            Categories
                        </Link>
                        <Link href="/about" className="text-sm font-medium text-muted-foreground">
                            About
                        </Link>
                        <Link href="/contact" className="text-sm font-medium text-muted-foreground">
                            Contact
                        </Link>
                        <div className="flex items-center gap-2 pt-2 border-t">
                            <Button variant="outline" size="sm" className="w-full mt-2">
                                Subscribe
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}
