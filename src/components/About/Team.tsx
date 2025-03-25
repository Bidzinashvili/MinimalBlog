import { teamMembers } from '@/data/data'
import { Twitter, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

export default function Team() {
    return (
        <section className="py-16 md:py-24">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Team</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        The passionate individuals behind MinimalBlog who work together to bring you insightful content.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center">
                            <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                                <img src={member.image || "/placeholder.svg"} alt={member.name} className="object-cover" />
                            </div>
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-primary mb-2">{member.role}</p>
                            <p className="text-sm text-muted-foreground">{member.bio}</p>
                            <div className="flex justify-center mt-4 space-x-2">
                                <Button variant="ghost" size="icon">
                                    <Twitter className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <Linkedin className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <Mail className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
