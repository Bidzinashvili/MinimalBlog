import Link from 'next/link'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export default function Sidebar() {
    return (
        <div className="lg:col-span-3">
            <div className="space-y-8">
                {/* About Author */}
                <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-4">About the Author</h3>
                    <div className="flex flex-col items-center text-center">
                        <Avatar className="h-20 w-20 mb-4">
                            <AvatarImage
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                                alt="Sarah Johnson"
                            />
                            <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <h4 className="font-medium">Sarah Johnson</h4>
                        <p className="text-sm text-muted-foreground mb-4">Senior UX Designer & Writer</p>
                        <Button variant="outline" size="sm">
                            View All Posts
                        </Button>
                    </div>
                </div>

                {/* Popular Posts */}
                <div>
                    <h3 className="font-medium mb-4">Popular Posts</h3>
                    <div className="space-y-4">
                        {[
                            {
                                title: "The Psychology of Color in Web Design",
                                image:
                                    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80",
                                date: "March 15, 2025",
                            },
                            {
                                title: "Responsive Design Best Practices for 2025",
                                image:
                                    "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80",
                                date: "March 10, 2025",
                            },
                            {
                                title: "The Future of Web Animation Techniques",
                                image:
                                    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80",
                                date: "March 5, 2025",
                            },
                        ].map((post, index) => (
                            <div key={index} className="flex gap-3">
                                <img
                                    src={post.image || "/placeholder.svg"}
                                    alt={`Popular post ${index + 1}`}
                                    width={80}
                                    height={80}
                                    className="rounded-md object-cover w-20 h-20"
                                />
                                <div>
                                    <h4 className="font-medium text-sm line-clamp-2">
                                        <Link href="#">{post.title}</Link>
                                    </h4>
                                    <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="font-medium mb-4">Categories</h3>
                    <div className="space-y-2">
                        {["Design", "Development", "UX", "Typography", "Performance"].map((category) => (
                            <Link
                                key={category}
                                href={`/category/${category.toLowerCase()}`}
                                className="block p-2 hover:bg-muted rounded-md text-sm"
                            >
                                {category}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Newsletter */}
                <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Subscribe</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                        Get the latest posts delivered straight to your inbox.
                    </p>
                    <div className="space-y-2">
                        <Input placeholder="Your email" type="email" />
                        <Button className="w-full">Subscribe</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
