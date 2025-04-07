import Hero from '@/components/Hero'
import reliabilityImg from '../../../public/reliability.jpg'

export default function ReliabilityPage() {
  return (
    <main>
      <Hero 
        ImgData={reliabilityImg}
        imgalt="System Reliability"
        title="System Reliability"
      />
    </main>
  )
}