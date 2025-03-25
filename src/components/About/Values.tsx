import React from 'react'
import { Card, CardContent } from '../ui/card'

export default function Values() {
    return (
        <section className="py-16 bg-background">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        These core principles guide everything we do, from the content we create to how we interact with our
                        community.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Card>
                        <CardContent className="pt-6">
                            <div className="mb-4 p-2 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-primary"
                                >
                                    <path d="M12 22a9.5 9.5 0 0 0 3.09-18.5"></path>
                                    <path d="M12 22a9.5 9.5 0 0 1-3.09-18.5"></path>
                                    <path d="M12 8v14"></path>
                                    <path d="M8 9.5 12 8l4 1.5"></path>
                                    <path d="M9 4 12 2l3 2"></path>
                                    <path d="M12 22V8"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Simplicity</h3>
                            <p className="text-muted-foreground">
                                We believe in the power of simplicity and strive to make complex topics accessible and easy to
                                understand.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6">
                            <div className="mb-4 p-2 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-primary"
                                >
                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <path d="M16 13H8"></path>
                                    <path d="M16 17H8"></path>
                                    <path d="M10 9H8"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Quality</h3>
                            <p className="text-muted-foreground">
                                We're committed to creating well-researched, thoughtful content that provides genuine value to our
                                readers.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6">
                            <div className="mb-4 p-2 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-primary"
                                >
                                    <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                    <path d="m15 5 4 4"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Creativity</h3>
                            <p className="text-muted-foreground">
                                We encourage innovative thinking and creative approaches to problem-solving in design and development.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6">
                            <div className="mb-4 p-2 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-primary"
                                >
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                            <p className="text-muted-foreground">
                                We believe knowledge should be accessible to everyone, regardless of their background or experience
                                level.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
