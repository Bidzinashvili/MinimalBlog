import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Facebook, Github, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { Textarea } from '../ui/textarea'

export default function Contact() {
    return (
        <section className="py-16 bg-background">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-6">Get in Touch</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Have a question, suggestion, or just want to say hello? We'd love to hear from you. Fill out the form or
                            reach out to us directly using the contact information below.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <Mail className="h-5 w-5 mr-3 text-primary" />
                                <div>
                                    <h3 className="font-medium">Email</h3>
                                    <p className="text-muted-foreground">hello@minimalblog.com</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 mr-3 text-primary" />
                                <div>
                                    <h3 className="font-medium">Location</h3>
                                    <p className="text-muted-foreground">123 Design Street, San Francisco, CA 94103</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="h-5 w-5 mr-3 text-primary" />
                                <div>
                                    <h3 className="font-medium">Phone</h3>
                                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="font-medium mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <Button variant="outline" size="icon">
                                    <Twitter className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon">
                                    <Facebook className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon">
                                    <Instagram className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon">
                                    <Github className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form className="space-y-6 bg-card p-6 rounded-lg shadow-sm">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Name
                                    </label>
                                    <Input id="name" placeholder="Your name" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>
                                    <Input id="email" type="email" placeholder="Your email" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">
                                    Subject
                                </label>
                                <Input id="subject" placeholder="Message subject" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Message
                                </label>
                                <Textarea id="message" placeholder="Your message" rows={5} />
                            </div>
                            <Button className="w-full">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
