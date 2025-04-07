import Hero from '@/components/Hero'
import performanceImg from '../../../public/performance.jpg'

export default function PerformancePage() {
  return (
    <main>
      <Hero 
        ImgData={performanceImg}
        imgalt="High Performance Computing"
        title="High Performance Computing"
      />
    </main>
  )
}