"use client"

import Link from "next/link"
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
import ArticleHeader from "@/components/ArticleDetails/ArticleHeader"
import Share from "@/components/ArticleDetails/Share"
import Content from "@/components/ArticleDetails/Content"
import Sidebar from "@/components/ArticleDetails/Sidebar"
import RelatedArticles from "@/components/ArticleDetails/RelatedArticles"
import Newsletter from "@/components/Home/Newsletter"

export default function ArticleDetail() {
    return (
        <>
            <ArticleHeader />

            <section className="pb-8">
                <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="aspect-video overflow-hidden rounded-lg">
                        <img
                            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"
                            alt="Featured image for article"
                            width={1280}
                            height={720}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <Share />

                        <Content />

                        <Sidebar />
                    </div>
                </div>
            </section>

            <RelatedArticles />

            <Newsletter />
        </>
    )
}

