import React from 'react'

export default function Mission() {
    return (
        <section className="py-16 md:py-24">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-6">Our Mission</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            At MinimalBlog, we believe that great design and thoughtful content can make a difference. Our mission
                            is to provide valuable insights, practical advice, and inspiration to help our readers navigate the
                            ever-evolving digital landscape.
                        </p>
                        <p className="text-lg text-muted-foreground mb-6">
                            We're committed to making complex topics accessible, promoting best practices, and fostering a community
                            of creative thinkers who value simplicity, functionality, and purpose.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">10K+</h3>
                                <p className="text-muted-foreground">Monthly Readers</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">500+</h3>
                                <p className="text-muted-foreground">Articles Published</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">50+</h3>
                                <p className="text-muted-foreground">Contributors</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">5+</h3>
                                <p className="text-muted-foreground">Years of Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square">
                        <img
                            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                            alt="Our mission illustration"
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
