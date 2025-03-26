import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs'
import { CheckCircle, AlertCircle, Send, Clock, Mail } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

export default function ContactForm() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }


    return (
        <section className="py-12 bg-background">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-6">Send us a message</h2>
                        <p className="text-muted-foreground mb-6">
                            Fill out the form below and we'll get back to you as soon as possible.
                        </p>

                        {formState === "success" ? (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                                <p className="text-green-700 mb-4">Thank you for reaching out. We'll get back to you shortly.</p>
                                <Button onClick={() => setFormState("idle")} variant="outline">
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">
                                            Name
                                        </label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">
                                            Email
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">
                                        Subject
                                    </label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        placeholder="Message subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {formState === "error" && (
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                                        <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <p className="text-red-700 text-sm">
                                            There was an error sending your message. Please try again or contact us directly at
                                            hello@minimalblog.com.
                                        </p>
                                    </div>
                                )}

                                <Button type="submit" className="w-full" disabled={formState === "submitting"}>
                                    {formState === "submitting" ? (
                                        <>
                                            <span className="animate-spin mr-2">
                                                <svg className="h-4 w-4" viewBox="0 0 24 24">
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                        fill="none"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    />
                                                </svg>
                                            </span>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        )}
                    </div>

                    {/* Map and Additional Info */}
                    <div>
                        <Tabs defaultValue="map">
                            <TabsList className="mb-4">
                                <TabsTrigger value="map">Map</TabsTrigger>
                                <TabsTrigger value="hours">Office Hours</TabsTrigger>
                                <TabsTrigger value="faq">FAQ</TabsTrigger>
                            </TabsList>

                            <TabsContent value="map" className="space-y-4">
                                <div className="aspect-video overflow-hidden rounded-lg border">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1489.2029808495079!2d44.755162206350796!3d41.71175801584751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473ccc057b21f%3A0xce3c92156f05a396!2sAxis%20Towers!5e0!3m2!1sen!2sge!4v1743021808344!5m2!1sen!2sge"
                                        className="w-full h-full rounded-lg"
                                        allowFullScreen={false}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                                <div className="bg-muted p-4 rounded-lg">
                                    <h3 className="font-medium mb-2">Getting Here</h3>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        Our office is conveniently located in downtown San Francisco, easily accessible by public transportation.
                                    </p>
                                    <ul className="text-sm space-y-1">
                                        <li>• 2 blocks from Montgomery BART station</li>
                                        <li>• Bus lines 12, 14, and 41 stop nearby</li>
                                        <li>• Paid parking available at 145 Market Street</li>
                                    </ul>
                                </div>
                            </TabsContent>


                            <TabsContent value="hours" className="space-y-4">
                                <Card>
                                    <CardContent className="p-4">
                                        <div className="flex items-start mb-4">
                                            <Clock className="h-5 w-5 mr-2 text-primary mt-0.5" />
                                            <div>
                                                <h3 className="font-medium">Office Hours</h3>
                                                <p className="text-sm text-muted-foreground">When you can visit us in person</p>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between py-2 border-b">
                                                <span>Monday - Friday</span>
                                                <span>8:00 AM - 5:00 PM</span>
                                            </div>
                                            <div className="flex justify-between py-2 border-b">
                                                <span>Saturday</span>
                                                <span>10:00 AM - 2:00 PM</span>
                                            </div>
                                            <div className="flex justify-between py-2">
                                                <span>Sunday</span>
                                                <span>Closed</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-4">
                                        <div className="flex items-start mb-4">
                                            <Mail className="h-5 w-5 mr-2 text-primary mt-0.5" />
                                            <div>
                                                <h3 className="font-medium">Response Times</h3>
                                                <p className="text-sm text-muted-foreground">When you can expect to hear back from us</p>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between py-2 border-b">
                                                <span>Email Inquiries</span>
                                                <span>Within 24 hours</span>
                                            </div>
                                            <div className="flex justify-between py-2 border-b">
                                                <span>Phone Calls</span>
                                                <span>During office hours</span>
                                            </div>
                                            <div className="flex justify-between py-2">
                                                <span>Contact Form</span>
                                                <span>Within 48 hours</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="faq" className="space-y-4">
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-medium mb-1">What types of inquiries do you handle?</h3>
                                        <p className="text-sm text-muted-foreground">
                                            We handle general questions, partnership inquiries, content suggestions, technical support, and
                                            feedback on our articles.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Can I contribute to MinimalBlog?</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Yes! We welcome guest contributions. Please use the contact form and select "Content Submission"
                                            as your subject.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Do you offer advertising opportunities?</h3>
                                        <p className="text-sm text-muted-foreground">
                                            We selectively partner with brands that align with our values. Contact us for more information
                                            about our sponsorship options.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">I found an error in an article. How can I report it?</h3>
                                        <p className="text-sm text-muted-foreground">
                                            We appreciate your help in maintaining accuracy. Please use the contact form with the subject
                                            "Content Correction."
                                        </p>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>)
}
