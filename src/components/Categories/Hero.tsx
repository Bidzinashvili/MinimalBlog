import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'

interface Props {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

export default function Hero({ searchQuery, setSearchQuery }: Props) {
    return (
        <section className="py-12 md:py-16 bg-muted/30">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Categories</h1>
                    <p className="text-lg text-muted-foreground mb-8">
                        Explore our diverse range of topics covering design, development, and everything in between.
                    </p>
                    <div className="flex max-w-md mx-auto">
                        <Input
                            type="search"
                            placeholder="Search categories..."
                            className="rounded-r-none"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Button className="rounded-l-none">
                            <Search className="h-4 w-4 mr-2" />
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
