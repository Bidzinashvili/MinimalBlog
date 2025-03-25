"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Calendar,
  User,
  MessageSquare,
  Share2,
  BookmarkPlus,
  ThumbsUp,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react"

export default function ArticleDetail() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/blog" className="hover:text-foreground">
            Blog
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/category/design" className="hover:text-foreground">
            Design
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-foreground">The Art of Minimalist Design in Modern Web Development</span>
        </nav>
      </div>

      {/* Article Header */}
      <section className="py-6 md:py-10">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <Badge>Design</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              The Art of Minimalist Design in Modern Web Development
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>March 24, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Sarah Johnson</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" />
                <span>24 comments</span>
              </div>
              <div className="flex items-center gap-1">
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"
              alt="Featured image for article"
              width={1280}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Social Share Sidebar - Desktop */}
            <div className="hidden lg:flex lg:col-span-1 flex-col items-center sticky top-24 self-start">
              <div className="space-y-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Separator />
                <Button variant="outline" size="icon" className="rounded-full">
                  <BookmarkPlus className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <ThumbsUp className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Main Content */}
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
                  <Image
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

            {/* Sidebar */}
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
                        <Image
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
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Related Articles</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Typography Trends That Will Dominate in 2025",
                image:
                  "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                description:
                  "Discover the typography trends that are shaping the digital landscape and how to implement them in your designs.",
                date: "March 18, 2025",
              },
              {
                title: "The Role of Animation in User Experience",
                image:
                  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                description:
                  "Learn how thoughtful animation can enhance user experience and guide users through your digital products.",
                date: "March 12, 2025",
              },
              {
                title: "Designing for Accessibility: A Practical Guide",
                image:
                  "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                description:
                  "Explore practical strategies for creating inclusive designs that work for everyone, regardless of ability.",
                date: "March 5, 2025",
              },
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={`Blog post ${index + 1}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2">
                    Design
                  </Badge>
                  <h3 className="font-medium mb-2 line-clamp-2">
                    <Link href="#">{post.title}</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{post.description}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter - Same as blog homepage for consistency */}
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
    </>
  )
}

