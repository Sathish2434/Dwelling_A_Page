import { useState } from 'react'
import { properties } from './data'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProperties from './components/FeaturedProperties'
import LocalityInsights from './components/LocalityInsights'
import ScheduleVisit from './components/ScheduleVisit'
import Footer from './components/Footer'

export default function App() {
  const [selectedPropertyId, setSelectedPropertyId] = useState(properties[0].id)

  const handleSchedule = (id: string) => {
    setSelectedPropertyId(id)
    document.getElementById('visit')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProperties onSchedule={handleSchedule} />
        <LocalityInsights />
        <ScheduleVisit
          selectedPropertyId={selectedPropertyId}
          onSelectProperty={setSelectedPropertyId}
        />
      </main>
      <Footer />
    </div>
  )
}
