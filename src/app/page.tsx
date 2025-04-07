import Hero from '@/components/Hero'
import homeImg from '../../public/home.jpg'

export default function HomePage() {
  return (
    <main>
      <Hero 
        ImgData={homeImg}
        imgalt="Professional Cloud Hosting"
        title="Professional Cloud Hosting"
      />
    </main>
  )
}