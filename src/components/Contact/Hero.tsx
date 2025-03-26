import React from 'react'
import { Badge } from '../ui/badge'

export default function Hero() {
    return (
        <section className="py-12 md:py-16 bg-muted/30">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <Badge className="mb-4">Contact Us</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get in Touch</h1>
                    <p className="text-lg text-muted-foreground">
                        Have a question, suggestion, or just want to say hello? We'd love to hear from you.
                    </p>
                </div>
            </div>
        </section>
    )
}
