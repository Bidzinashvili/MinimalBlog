"use client"

import Newsletter from "@/components/Home/Newsletter"
import Contact from "@/components/About/Contact"
import Faq from "@/components/About/Faq"
import Team from "@/components/About/Team"
import Values from "@/components/About/Values"
import Mission from "@/components/About/Mission"
import Hero from "@/components/About/Hero"

export default function AboutPage() {

    return (
        <>
            <Hero />

            <Mission />

            <Values />

            <Team />

            <Faq />

            <Contact />

            <Newsletter />
        </>
    )
}
