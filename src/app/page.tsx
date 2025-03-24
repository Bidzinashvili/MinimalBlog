"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
} from "lucide-react"

import Header from "@/components/Header"
import Hero from "@/components/Home/Hero"
import RecentPosts from "@/components/Home/RecentPosts"
import Categories from "@/components/Home/Categories"
import Newsletter from "@/components/Home/Newsletter"
import Footer from "@/components/Footer"

export default function BlogHomepage() {

  return (
    <div className="flex min-h-screen flex-col">

      <Header />

      <main className="flex-1">

        <Hero />

        <RecentPosts />

        <Categories />

        <Newsletter />
      </main>

      <Footer />
    </div>
  )
}

