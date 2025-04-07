import Hero from '@/components/Hero'
import scaleImg from '../../../public/scale.jpg'

export default function ScalePage() {
  return (
    <main>
      <Hero 
        ImgData={scaleImg}
        imgalt="Scalable Infrastructure"
        title="Scalable Infrastructure"
      />
    </main>
  )
}
