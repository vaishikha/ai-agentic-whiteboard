"use client"
import React from 'react'
import { useUser } from '@clerk/nextjs'
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

function WelcomeBanner() {
    const { user } = useUser();
    return (
        <div>
            <div className="p-10 border rounded-xl bg-gradient-to-r from-[#ffd1dc] to-[#F6909d]">
                <h2 className="text-2xl font-bold">Welcome Back, {user?.fullName}</h2>
                <p className="mt-2"> Bring Your Ideas to Life on Infinite Canvas</p>

               <div className="flex items-center gap-2 mt-5">
                  <Button size="lg">+ Create New Board</Button>
                  <Button variant="outline" size="lg"> <Sparkles/> AI Helper</Button>
               </div>

            </div>
        </div>
    )
}

export default WelcomeBanner