"use client"

import Navigation from './Navbar'

import MainContent from './HomeContent'
import HomePageCard from './HomePageCard'

export default function LandingPage() {


  return (
    <div className="min-h-screen bg-black backdrop-blur-xl text-white overflow-hidden relative">
      
      <Navigation />
      <MainContent />
      <HomePageCard />
    </div>
  )
}