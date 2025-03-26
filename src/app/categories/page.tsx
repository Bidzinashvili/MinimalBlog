"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Newsletter from "@/components/Home/Newsletter"
import Featured from "@/components/Categories/Featured"
import Hero from "@/components/Categories/Hero"
import AllCategories from "@/components/Categories/AllCategories"

export default function CategoriesPage() {
    const [searchQuery, setSearchQuery] = useState("")

    const categories = [
        {
            name: "Design",
            description: "Explore principles of good design, UI/UX best practices, and visual aesthetics.",
            postCount: 42,
            image:
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            featured: true,
        },
        {
            name: "Development",
            description: "Tutorials, guides, and insights on web development technologies and practices.",
            postCount: 38,
            image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            featured: true,
        },
        {
            name: "Productivity",
            description: "Tips and strategies to enhance your workflow and maximize efficiency.",
            postCount: 27,
            image:
                "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            featured: false,
        },
        {
            name: "Career",
            description: "Advice on professional growth, job hunting, and navigating the tech industry.",
            postCount: 19,
            image:
                "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            featured: false,
        },
        {
            name: "Technology",
            description: "The latest trends, innovations, and discussions in the tech world.",
            postCount: 31,
            image:
                "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            featured: true,
        },
        {
            name: "Tutorials",
            description: "Step-by-step guides to help you master new skills and techniques.",
            postCount: 24,
            image:
                "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            featured: false,
        },
        {
            name: "Resources",
            description: "Curated collections of tools, libraries, and assets for designers and developers.",
            postCount: 16,
            image:
                "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            featured: false,
        },
        {
            name: "Inspiration",
            description: "Creative showcases and examples to spark your imagination.",
            postCount: 22,
            image:
                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            featured: false,
        },
        {
            name: "Accessibility",
            description: "Making the web usable for everyone through inclusive design practices.",
            postCount: 14,
            image:
                "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            featured: false,
        },
        {
            name: "Typography",
            description: "The art and technique of arranging type to make written language readable and appealing.",
            postCount: 18,
            image:
                "https://images.unsplash.com/photo-1467703834117-04386e3dadd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            featured: false,
        },
        {
            name: "Performance",
            description: "Techniques and strategies for optimizing website speed and efficiency.",
            postCount: 21,
            image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            featured: false,
        },
        {
            name: "Case Studies",
            description: "In-depth analyses of real-world projects and their outcomes.",
            postCount: 12,
            image:
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            featured: false,
        },
    ]

    const filteredCategories = categories.filter(
        (category) =>
            category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            category.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    const featuredCategories = categories.filter((category) => category.featured)

    return (
        <>
            <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />


            <Featured searchQuery={searchQuery} featuredCategories={featuredCategories} />


            <AllCategories searchQuery={searchQuery} setSearchQuery={setSearchQuery} filteredCategories={filteredCategories} />

            <Newsletter />
        </>
    )
}

