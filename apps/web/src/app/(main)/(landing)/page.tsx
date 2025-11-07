"use client";
import Bento from '@/components/landing-sections/Bento'
import Brands from '@/components/landing-sections/Brands'
import CTA from '@/components/landing-sections/CTA'
import Footer from '@/components/landing-sections/footer'
import Hero from '@/components/landing-sections/Hero'
import HowItWorks from '@/components/landing-sections/how-it-works'
import Navbar from '@/components/landing-sections/navbar'
import Testimonials from '@/components/landing-sections/testimonials'
import Video from '@/components/landing-sections/video'
import React from 'react'
import ProblemList from '@/components/blockcode/ProblemList'
import { problems } from '@/lib/blockcode/sampleData'


const Landing = () => {
    return (
        <main className='min-h-screen w-full bg-[#101010] text-white font-sans overflow-hidden relative'>
            <Navbar />
            <div className="min-h-screen w-full max-w-[2000px] mx-auto border-x border-[#252525] overflow-hidden">
                    <Hero />

                    {/* Blockcode promo section */}
                    <section className="max-w-6xl mx-auto w-full px-6 py-10">
                        <div className="rounded-2xl p-6 bg-gradient-to-r from-neutral-900 to-neutral-800/60 border border-[#2a2a2a]">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div>
                                    <h2 className="text-2xl font-bold">Blockcode - Learn blockchain by solving problems</h2>
                                    <p className="text-gray-300 mt-2 max-w-xl">A curated collection of blockchain programming problems (easy / medium / hard), blogs, research papers and starter projects - practice, learn, and build.</p>
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <a href="/blockcode" className="px-4 py-2 rounded bg-blue-600 text-white text-sm">Explore Blockcode</a>
                                        {/* Try easy problems button removed */}
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h4 className="text-sm text-gray-400" style={{ marginLeft: '50px' }}>Featured problems</h4>
                                    <div className="mt-3">
                                        <ProblemList items={problems.slice(0,3)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Bento />
                    <Video />
                    <HowItWorks />
                    <Brands />
                    <Testimonials />
            </div>
            <div className="max-w-[2000px] w-full mx-auto">
                <CTA />
                <Footer />
            </div>
        </main >
    )
}

export default Landing


