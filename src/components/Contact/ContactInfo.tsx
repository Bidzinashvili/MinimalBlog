import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { Card, CardContent } from '../ui/card'

export default function ContactInfo() {
    return (
        <section className="py-12">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-3">
                    <Card>
                        <CardContent className="p-6 flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Email Us</h3>
                            <p className="text-muted-foreground mb-4">Our friendly team is here to help.</p>
                            <a href="mailto:hello@minimalblog.com" className="text-primary hover:underline">
                                hello@minimalblog.com
                            </a>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6 flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Office</h3>
                            <p className="text-muted-foreground mb-4">Come say hello at our office.</p>
                            <address className="not-italic text-foreground">
                                123 Design Street
                                <br />
                                San Francisco, CA 94103
                            </address>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6 flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Phone</h3>
                            <p className="text-muted-foreground mb-4">Mon-Fri from 8am to 5pm.</p>
                            <a href="tel:+15551234567" className="text-primary hover:underline">
                                +1 (555) 123-4567
                            </a>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
