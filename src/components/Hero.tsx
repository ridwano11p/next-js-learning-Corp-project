import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
    ImgData: StaticImageData;
    imgalt: string;
    title: string;
}

export default function Hero(props: HeroProps) {
    return (
        <div className="relative w-screen h-screen">
            <Image 
                src={props.ImgData}
                alt={props.imgalt}
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-6xl font-bold">{props.title}</h1>
            </div>
        </div>
    )
}