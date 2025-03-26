import React from 'react'
import { Badge } from '../ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Facebook, Twitter, Instagram, Share2, BookmarkPlus, ThumbsUp } from 'lucide-react'

export default function Content() {
    return (
        <div className="lg:col-span-8">
            <article className="prose prose-slate max-w-none">
                <p className="lead">
                    In the ever-evolving landscape of web development, minimalist design has emerged as more than just an
                    aesthetic choice—it's become a fundamental approach to creating effective, user-friendly digital
                    experiences. This article explores the principles, benefits, and implementation of minimalist design
                    in modern web development.
                </p>

                <h2>The Philosophy of Minimalism in Web Design</h2>
                <p>
                    Minimalism in web design is rooted in the principle that less is more. It's about stripping away
                    unnecessary elements and focusing on what truly matters: content and functionality. This approach
                    isn't about making designs plain or boring; rather, it's about creating purposeful, elegant solutions
                    that enhance the user experience.
                </p>
                <p>The core tenets of minimalist web design include:</p>
                <ul>
                    <li>Simplicity in layout and navigation</li>
                    <li>Purposeful use of white space</li>
                    <li>Limited color palettes</li>
                    <li>Typography as a design element</li>
                    <li>Removal of decorative elements that don't serve a function</li>
                </ul>

                <h2>Why Minimalism Works in Modern Web Development</h2>
                <p>
                    In today's digital environment, users are bombarded with information from countless sources.
                    Minimalist design cuts through this noise, offering clarity and focus. Here's why it's particularly
                    effective:
                </p>

                <h3>Improved User Experience</h3>
                <p>
                    When users visit a website, they typically have a specific goal in mind. Minimalist design removes
                    distractions and creates clear pathways to help users achieve their objectives efficiently. By
                    reducing cognitive load, minimalist interfaces become more intuitive and easier to navigate.
                </p>

                <h3>Faster Load Times</h3>
                <p>
                    Minimalist websites typically use fewer resources, resulting in faster load times. This is crucial in
                    an era where users expect instant gratification and where search engines factor page speed into their
                    ranking algorithms.
                </p>

                <figure>
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Comparison of load times between minimalist and complex websites"
                        width={800}
                        height={500}
                        className="rounded-lg"
                    />
                    <figcaption className="text-center text-sm text-muted-foreground mt-2">
                        Figure 1: Comparison of load times between minimalist and complex websites
                    </figcaption>
                </figure>

                <h3>Mobile Responsiveness</h3>
                <p>
                    With the majority of web traffic now coming from mobile devices, designs must work seamlessly across
                    various screen sizes. Minimalist layouts are inherently more adaptable, making them ideal for
                    responsive design.
                </p>

                <h3>Timeless Appeal</h3>
                <p>
                    While design trends come and go, minimalist design has proven to have staying power. By focusing on
                    fundamental principles rather than fleeting trends, minimalist websites tend to age more gracefully.
                </p>

                <h2>Implementing Minimalism in Your Web Projects</h2>
                <p>
                    Adopting a minimalist approach doesn't mean starting from scratch. Here are practical steps to
                    incorporate minimalist principles into your web development process:
                </p>

                <h3>Content Audit</h3>
                <p>
                    Begin by evaluating your content. What's essential? What can be removed or condensed? Remember that
                    minimalism isn't about having less content—it's about making the content you have more impactful.
                </p>

                <h3>Purposeful Layout</h3>
                <p>
                    Design your layout with intention. Use grid systems to create order and alignment. Consider the
                    hierarchy of information and how users will flow through your site.
                </p>

                <h3>Thoughtful Typography</h3>
                <p>
                    In minimalist design, typography often does the heavy lifting. Choose readable fonts and create
                    contrast through size, weight, and spacing rather than using multiple typefaces.
                </p>

                <h3>Strategic Use of Color</h3>
                <p>
                    Limit your color palette to a few complementary colors. Use color purposefully to guide attention and
                    create visual hierarchy.
                </p>

                <h3>Embrace White Space</h3>
                <p>
                    Don't be afraid of empty space. White space (or negative space) isn't wasted space—it's a powerful
                    design element that creates breathing room and helps users focus on what matters.
                </p>

                <h2>Case Studies: Minimalism in Action</h2>
                <p>
                    Let's examine how some successful websites have implemented minimalist principles to create effective
                    user experiences.
                </p>

                <h3>Apple</h3>
                <p>
                    Apple's website is a masterclass in minimalist design. Their product pages feature large, high-quality
                    images against white backgrounds, concise copy, and plenty of white space. Navigation is simple and
                    intuitive, allowing the products to take center stage.
                </p>

                <h3>Google</h3>
                <p>
                    Google's homepage is perhaps the ultimate example of minimalism in web design. By focusing solely on
                    the search function, Google created one of the most user-friendly and successful interfaces of all
                    time.
                </p>

                <h2>Conclusion</h2>
                <p>
                    Minimalist design in web development isn't just an aesthetic choice—it's a strategic approach that can
                    lead to more effective, user-friendly, and timeless digital experiences. By focusing on what truly
                    matters and eliminating the unnecessary, developers can create websites that not only look beautiful
                    but also function beautifully.
                </p>
                <p>
                    As we continue to navigate an increasingly complex digital landscape, the clarity and focus offered by
                    minimalist design principles become even more valuable. Whether you're designing a personal blog or an
                    enterprise application, considering how to do more with less can lead to more successful outcomes.
                </p>
            </article>

            {/* Tags */}
            <div className="mt-8">
                <h3 className="text-lg font-medium mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Minimalism</Badge>
                    <Badge variant="outline">Web Design</Badge>
                    <Badge variant="outline">UX</Badge>
                    <Badge variant="outline">Performance</Badge>
                    <Badge variant="outline">Typography</Badge>
                </div>
            </div>

            {/* Author Bio */}
            <div className="mt-8 p-6 bg-muted rounded-lg">
                <div className="flex flex-col sm:flex-row gap-4">
                    <Avatar className="h-16 w-16">
                        <AvatarImage
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                            alt="Sarah Johnson"
                        />
                        <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className="text-lg font-medium">Sarah Johnson</h3>
                        <p className="text-sm text-muted-foreground mb-2">Senior UX Designer & Writer</p>
                        <p className="text-sm">
                            Sarah is a UX designer with over 10 years of experience working with startups and enterprise
                            companies. She specializes in minimalist design approaches and writes about the intersection of
                            design and technology.
                        </p>
                    </div>
                </div>
            </div>

            {/* Social Share - Mobile */}
            <div className="mt-8 flex justify-center gap-2 lg:hidden">
                <Button variant="outline" size="icon">
                    <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                    <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                    <BookmarkPlus className="h-4 w-4" />
                </Button>
            </div>

            {/* Comments Section */}
            <div className="mt-12">
                <h3 className="text-xl font-bold mb-6">Comments (24)</h3>

                <div className="space-y-6">
                    {/* Comment Form */}
                    <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-4">Leave a comment</h4>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Input placeholder="Name" />
                                <Input placeholder="Email" type="email" />
                            </div>
                            <textarea
                                className="w-full min-h-[100px] p-2 border rounded-md"
                                placeholder="Your comment"
                            ></textarea>
                            <Button className="w-full sm:w-auto">Post Comment</Button>
                        </div>
                    </div>

                    {/* Comments */}
                    {[1, 2, 3].map((comment) => (
                        <div key={comment} className="border-b pb-6">
                            <div className="flex gap-4">
                                <Avatar>
                                    <AvatarImage src={`https://i.pravatar.cc/150?img=${comment + 10}`} />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-medium">Alex Chen</h4>
                                        <span className="text-xs text-muted-foreground">2 days ago</span>
                                    </div>
                                    <p className="mt-2 text-sm">
                                        This article perfectly captures why I've been moving toward minimalist design in my own
                                        projects. The point about cognitive load is especially relevant - I've seen firsthand how
                                        simplifying interfaces leads to better user engagement.
                                    </p>
                                    <div className="mt-2 flex items-center gap-4">
                                        <button className="text-xs text-muted-foreground hover:text-foreground">Reply</button>
                                        <div className="flex items-center gap-1">
                                            <ThumbsUp className="h-3 w-3" />
                                            <span className="text-xs">12</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <Button variant="outline" className="w-full">
                        Load More Comments
                    </Button>
                </div>
            </div>
        </div>
    )
}
