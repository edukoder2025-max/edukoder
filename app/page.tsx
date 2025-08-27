import Hero from '@/components/Hero'
import FeaturedTutorials from '@/components/FeaturedTutorials'
import TrainingSeries from '@/components/TrainingSeries'
import EbookPromo from '@/components/EbookPromo'
import Stats from '@/components/Stats'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedTutorials />
      <TrainingSeries />
      <EbookPromo />
    </>
  )
}
