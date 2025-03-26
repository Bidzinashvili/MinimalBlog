import { Separator } from '@radix-ui/react-separator'
import { Facebook, Twitter, Instagram, Share2, BookmarkPlus, ThumbsUp } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

export default function Share() {
    return (
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
    )
}
