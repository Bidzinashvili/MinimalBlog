"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    CheckCircle,
    AlertCircle,
    Twitter,
    Facebook,
    Instagram,
    Github,
    Linkedin,
} from "lucide-react"
import Newsletter from "@/components/Home/Newsletter"
import Hero from "@/components/Contact/Hero"
import ContactInfo from "@/components/Contact/ContactInfo"
import ContactForm from "@/components/Contact/ContactForm"
import SocialMedia from "@/components/Contact/SocialMedia"

export default function ContactPage() {

    return (
        <>
            <Hero />

            <ContactInfo />

            <ContactForm />

            <SocialMedia />

            <Newsletter />
        </>
    )
}

