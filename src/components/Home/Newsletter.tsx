import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function Newsletter() {
    return (
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
    )
}
