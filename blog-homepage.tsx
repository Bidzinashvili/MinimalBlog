"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Menu,
  X,
  ArrowRight,
  Calendar,
  User,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Github,
} from "lucide-react"
import { useState } from "react"

export default function BlogHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
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

      <main className="flex-1">
        {/* Hero Section */}
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

        {/* Recent Posts */}
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

        {/* Categories */}
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

        {/* Newsletter */}
        <section className="py-12 md:py-16">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-muted p-6 md:p-10">
              <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Subscribe to our newsletter</h2>
                  <p className="text-muted-foreground">
                    Get the latest articles, resources, and insights delivered straight to your inbox.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Input placeholder="Enter your email" type="email" />
                    <Button>Subscribe</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    By subscribing, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
    </div>
  )
}

